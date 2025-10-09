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


const onCancelClose = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  bigPictureClose.removeEventListener('click', onCancelClose);

};

const onEscapeClose = (evt) => {
  if (evt.key === 'Escape') {
    onCancelClose();
  }
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
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onEscapeClose);
  bigPictureClose.addEventListener('click', onCancelClose);
};


pictures.addEventListener('click', (evt) => {
  const currentPicture = evt.target.closest('.picture');
  if (currentPicture) {
    evt.preventDefault();
    openBigPicture(currentPicture.dataset.pictureId);
  }
});


