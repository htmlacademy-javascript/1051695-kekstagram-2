import { createObjects } from './data.js';

const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const newPictures = createObjects();
const newPicturesFragment = document.createDocumentFragment();

newPictures.forEach(({ id, url, description, likes, comments }) => {
  const newPictureElement = pictureTemplate.cloneNode(true);
  newPictureElement.dataset.pictureId = id;
  newPictureElement.querySelector('.picture__img').setAttribute('src', url);
  newPictureElement.querySelector('.picture__img').setAttribute('alt', description);
  newPictureElement.querySelector('.picture__likes').textContent = likes;
  newPictureElement.querySelector('.picture__comments').textContent = comments.length;
  newPicturesFragment.append(newPictureElement);
});

pictures.append(newPicturesFragment);

export {newPictures};

