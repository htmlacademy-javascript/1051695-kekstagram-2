
import { serverPhotos } from './api.js';
import { renderComments, clearComments } from './show-comments.js';
const bigPicture = document.querySelector('.big-picture');
const pictures = document.querySelector('.pictures');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const bigPictureLikesCount = bigPicture.querySelector('.likes-count');


const commentsCaption = bigPicture.querySelector('.social__caption');

const bigPictureClose = bigPicture.querySelector('.big-picture__cancel');

const onEscapeClose = (evt) => {
  if (evt.key === 'Escape') {
    onCancelClose();
  }
};


function onCancelClose() {
  clearComments();
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  bigPictureClose.removeEventListener('click', onCancelClose);
  document.removeEventListener('keydown', onEscapeClose);
}


const openBigPicture = (pictureId) => {
  const currentPicture = serverPhotos.find((el) => el.id === +pictureId);


  bigPictureImg.src = currentPicture.url;
  bigPictureLikesCount.textContent = currentPicture.likes;
  commentsCaption.textContent = currentPicture.description;
  renderComments(currentPicture.comments);


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

// const FReader = new FileReader();

// // событие, когда файл загрузится
// FReader.onload = function (evt) {
//   document.querySelector('.img-upload__preview img').src = evt.target.result;
// };

// // выполнение функции при выборки файла
// document.querySelector('#upload-file').addEventListener('change', loadImageFile);

// // функция выборки файла
// function loadImageFile() {
//   const file = document.querySelector('#upload-file').files[0];
//   FReader.readAsDataURL(file);
// }
