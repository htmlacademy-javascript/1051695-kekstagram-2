import { onFormCloseClick } from './photo-loader.js';
export const submitButton = document.querySelector('.img-upload__submit');

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
  const dataSuccessMessage = document.querySelector('#success').content.cloneNode(true);

  document.body.append(dataSuccessMessage);

  const successButton = document.querySelector('.success__button');
  successButton.addEventListener('click', onSuccessButtonClose);
  document.addEventListener('keydown', onEscapeSuccessClose);
  document.addEventListener('click', onDocumentClickSuccessClose);
};

const onError = () => {
  submitButton.removeAttribute('disabled');
  const dataErrorMessage = document.querySelector('#error').content.cloneNode(true);

  document.body.append(dataErrorMessage);
  const errorButton = document.querySelector('.error__button');
  if (errorButton) {
    errorButton.addEventListener('click', onErrorButtonClose);
    document.addEventListener('keydown', onEscapeErrorClose);
    document.addEventListener('click', onDocumentClickErrorClose);
  }
};


export { onError, onResponse, onSuccess };
