import { createPhotos } from './picture.js';
import { onError, onResponse, onSuccess, submitButton } from './api-handlers.js';
import { pristine, formUpload } from './validator.js';

const ERROR_MESSAGE_DELAY = 5000;
let serverPhotos = [];
fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
  .then(onResponse)
  .then((response) => response.json())
  .then((photos) => {
    createPhotos(photos);
    serverPhotos = photos;
    document.querySelector('.img-filters').classList.remove('img-filters--inactive');
  }
  )
  .catch(() => {
    const dataErrorMessage = document.querySelector('#data-error').content;
    document.body.append(dataErrorMessage);
    setTimeout(() => {
      document.querySelector('.data-error').remove();
    }, ERROR_MESSAGE_DELAY);
  });


formUpload.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    submitButton.disabled = 'true';
    const formData = new FormData(evt.target);
    fetch(
      'https://31.javascript.htmlacademy.pro/kekstagram',
      {
        method: 'POST',
        body: formData,
      }
    )
      .then(onResponse)
      .then(onSuccess)
      .catch(onError);
  }
});

export { serverPhotos };

