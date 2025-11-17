const STEP_COUNT = 5;
const bigPicture = document.querySelector('.big-picture');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCommentTemplate = socialComments.querySelector('.social__comment');
const commentsCount = bigPicture.querySelector('.social__comment-total-count');
const commentsCurrentCount = bigPicture.querySelector('.social__comment-shown-count');
const commentsLoader = bigPicture.querySelector('.social__comments-loader');

let currentCount = 0;
let comments = [];

socialComments.innerHTML = '';

const addComments = () => {

  const commentsFragment = document.createDocumentFragment();
  const shownComments = comments.slice(currentCount, currentCount + STEP_COUNT);
  const shownCommentsLength = shownComments.length + currentCount;

  shownComments.forEach((el) => {
    const socialComment = socialCommentTemplate.cloneNode(true);

    socialComment.querySelector('.social__picture').src = el.avatar;
    socialComment.querySelector('.social__picture').alt = el.name;
    socialComment.querySelector('.social__text').textContent = el.message;

    commentsFragment.append(socialComment);
  });

  socialComments.append(commentsFragment);
  commentsCount.textContent = comments.length;
  commentsCurrentCount.textContent = shownCommentsLength;

  if (shownCommentsLength >= comments.length) {
    commentsLoader.classList.add('hidden');
  }

  currentCount += STEP_COUNT;
};
const clearComments = () => {
  currentCount = 0;
  socialComments.innerHTML = '';
  commentsLoader.classList.remove('hidden');
  commentsLoader.removeEventListener('click', addComments);
};

const renderComments = (currentComments) => {
  comments = currentComments;
  addComments();
  commentsLoader.addEventListener('click', addComments);
};

export { renderComments, clearComments };
