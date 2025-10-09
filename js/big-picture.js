import { newPictures } from './picture.js';
const bigPicture = document.querySelector('.big-picture');
const pictures = document.querySelector('.pictures');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const bigPictureLikesCount = bigPicture.querySelector('.likes-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCommentTemplate = socialComments.querySelector('.social__comment');
const commentsCaption = bigPicture.querySelector('.social__caption');
const commentsCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.social__comments-loader');
const bigPictureClose = bigPicture.querySelector('.big-picture__cancel');

const onEscapeClose = (evt) => {
  if (evt.key === 'Escape') {
    bigPicture.classList.add('hidden');
  }
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onEscapeClose);
};


const onCloseBigPicture = () => {
  closeBigPicture();
};

const openBigPicture = (pictureId) => {
  const currentPicture = newPictures.find((el) => el.id === +pictureId);
  const commentsFragment = document.createDocumentFragment();

  bigPictureImg.src = currentPicture.url;
  bigPictureLikesCount.textContent = currentPicture.likes;
  socialComments.innerHTML = '';
  commentsCaption.textContent = currentPicture.description;
  commentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  currentPicture.comments.forEach((el) => {
    const socialComment = socialCommentTemplate.cloneNode(true);

    socialComment.querySelector('.social__picture').src = el.avatar;
    socialComment.querySelector('.social__picture').alt = el.name;
    socialComment.querySelector('.social__text').textContent = el.message;

    commentsFragment.append(socialComment);
  });
  socialComments.append(commentsFragment);

  bigPicture.classList.remove('hidden');
};

bigPicture.querySelector('.big-picture__cancel').addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  bigPictureClose.addEventListener('click', onCloseBigPicture);
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onEscapeClose);
});

pictures.addEventListener('click', (evt) => {
  evt.preventDefault();
  const currentPicture = evt.target.closest('.picture');
  if (currentPicture) {
    openBigPicture(currentPicture.dataset.pictureId);
  }
});


