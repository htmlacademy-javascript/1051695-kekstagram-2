import { onFormCloseClick } from './photo-loader.js';
export const submitButton = document.querySelector('.img-upload__submit');

const onEscapeErrorClose = (event) => {
  if (event.key === 'Escape') {
    onErrorButtonClose();
  }
};
const onEscapeSuccessClose = (event) => {
  if (event.key === 'Escape') {
    onSuccessButtonClose();
  }
};

const onDocumentClickErrorClose = (event) => {
  if (document.querySelector('.error') && !document.querySelector('.error__inner').contains(event.target)) {
    onErrorButtonClose();
  }
};
const onDocumentClickSuccessClose = (event) => {
  if (document.querySelector('.success') && !document.querySelector('.success__inner').contains(event.target)) {
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
