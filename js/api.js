import { createPhotos } from './picture.js';
// import { setUserFormSubmit } from './validator.js';
// import { onFormCloseClick } from './photo-loader.js';
let serverPhotos = [];
fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json())
  .then((photos) => {
    createPhotos(photos);
    serverPhotos = photos;
  }
  );
// setUserFormSubmit(onFormCloseClick);

export { serverPhotos };

