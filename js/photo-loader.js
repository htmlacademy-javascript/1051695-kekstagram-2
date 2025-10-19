const formUpload = document.querySelector('.img-upload__form');
const formCloseButton = document.querySelector('.img-upload__cancel');
const formImgUploadOpen = document.querySelector('.img-upload__overlay');
const imgUploadFile = document.querySelector('#upload-file');
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');


const onFormCloseClick = () => {
  formImgUploadOpen.classList.add('hidden');
  document.body.classList.remove('modal-open');
  formCloseButton.removeEventListener('click', onFormCloseClick);
  document.removeEventListener('keydown', onEscapeClose);
  imgUploadFile.value = '';
  formUpload.reset();
};

const onFormOpenClick = () => {
  formImgUploadOpen.classList.remove('hidden');
  document.body.classList.add('modal-open');
  formCloseButton.addEventListener('click', onFormCloseClick);
  document.addEventListener('keydown', onEscapeClose);
  formCloseButton.addEventListener('click', onFormCloseClick);
};

function onEscapeClose(evt) {
  if (evt.key === 'Escape') {
    if (document.activeElement === hashtagInput || document.activeElement === commentInput) {
      evt.stopPropagation();
    } else {
      onFormCloseClick();
    }
  }
}

imgUploadFile.addEventListener('change', onFormOpenClick);

