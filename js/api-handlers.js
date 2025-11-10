import { onFormCloseClick } from './photo-loader.js';

const submitButton = document.querySelector('.img-upload__submit');

const onEscapeErrorClose = (evt) => {
  if (evt.key === 'Escape') {
    onErrorButtonClose();
  }
};
const onEscapeSuccessClose = (evt) => {
  if (evt.key === 'Escape') {
    onSuccessButtonClose();
  }
};

const onDocumentClickErrorClose = (evt) => {
  if (document.querySelector('.error') && !document.querySelector('.error__inner').contains(evt.target)) {
    onErrorButtonClose();
  }
};
const onDocumentClickSuccessClose = (evt) => {
  if (document.querySelector('.success') && !document.querySelector('.success__inner').contains(evt.target)) {
    onSuccessButtonClose();
  }
};

function onErrorButtonClose() {
  document.querySelector('.error').remove();
  document.removeEventListener('keydown', onEscapeErrorClose);
  document.removeEventListener('click', onDocumentClickErrorClose);
}

function onSuccessButtonClose() {
  document.querySelector('.success').remove();
  document.removeEventListener('keydown', onEscapeSuccessClose);
  document.removeEventListener('click', onDocumentClickSuccessClose);
}

const onResponse = (response) => {
  submitButton.removeAttribute('disabled');
  if (!response.ok) {
    throw new Error();
  }
  return response;
};

const onSuccess = () => {
  onFormCloseClick();
  document.body.append(document.querySelector('#success').content.cloneNode(true));

  document.querySelector('.success__button').addEventListener('click', onSuccessButtonClose);
  document.addEventListener('keydown', onEscapeSuccessClose);
  document.addEventListener('click', onDocumentClickSuccessClose);
};

const onError = () => {
  submitButton.removeAttribute('disabled');
  document.body.append(document.querySelector('#error').content.cloneNode(true));

  if (document.querySelector('.error__button')) {
    document.querySelector('.error__button').addEventListener('click', onErrorButtonClose);
    document.addEventListener('keydown', onEscapeErrorClose);
    document.addEventListener('click', onDocumentClickErrorClose);
  }
};


export { onError, onResponse, onSuccess, submitButton };
