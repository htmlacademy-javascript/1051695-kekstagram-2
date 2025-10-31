import { createPhotos } from './picture.js';
import { onError, onResponse, onSuccess, submitButton } from './api-handlers.js';
import { pristine, formUpload } from './validator.js';


let serverPhotos = [];
fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
  .then(onResponse)
  .then((response) => response.json())
  .then((photos) => {
    createPhotos(photos);
    serverPhotos = photos;
  }
  )
  .catch(() => {
    const dataErrorMessage = document.querySelector('#data-error').content;
    document.body.append(dataErrorMessage);
    setTimeout(() => {
      document.querySelector('.data-error').remove();
    }, 5000);
  });

formUpload.addEventListener('submit', (evt) => {
  submitButton.disabled = 'true';
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
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

