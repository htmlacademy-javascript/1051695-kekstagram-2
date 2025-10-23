const SCALE_STEP = .25;
const MAX_SCALE = 1;
const MIN_SCALE = .25;

const formUpload = document.querySelector('.img-upload__form');
const formCloseButton = document.querySelector('.img-upload__cancel');
const formImgUploadOpen = document.querySelector('.img-upload__overlay');
const imgUploadFile = document.querySelector('#upload-file');
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

const imgUploadWrappers = document.querySelectorAll('.img-upload__field-wrapper');
const effectLevel = document.querySelector('.effect-level');

const scaleMinus = document.querySelector('.scale__control--smaller');
const scalePlus = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const img = document.querySelector('.img-upload__preview img');

let scale = MAX_SCALE;

const onFormCloseClick = () => {
  formImgUploadOpen.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeClose);
  imgUploadFile.value = '';
  formUpload.reset();
};

const onFormOpenClick = () => {
  const pristineErrors = document.querySelectorAll('.pristine-error');
  formImgUploadOpen.classList.remove('hidden');
  document.body.classList.add('modal-open');
  formCloseButton.addEventListener('click', onFormCloseClick);
  document.addEventListener('keydown', onEscapeClose);
  effectLevel.classList.add('hidden');
  pristineErrors.forEach((el) => el.remove());
  imgUploadWrappers.forEach((el) => el.classList.remove('img-upload__field-wrapper--error'));
  img.style.filter = 'none';
  scale = MAX_SCALE;
  scaleInput.value = `${scale * 100}% `;
  img.style.scale = `${scale}`;
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

const onMinusClick = () => {
  if (scale <= MAX_SCALE && scale > MIN_SCALE) {
    scale -= SCALE_STEP;
    img.style.scale = `${scale}`;
    scaleInput.value = `${scale * 100}% `;
  }
};

const onPlusClick = () => {
  if (scale < MAX_SCALE && scale >= MIN_SCALE) {
    scale += SCALE_STEP;
    img.style.scale = `${scale}`;
    scaleInput.value = `${scale * 100}% `;
  }
};

imgUploadFile.addEventListener('change', onFormOpenClick);
scaleMinus.addEventListener('click', onMinusClick);
scalePlus.addEventListener('click', onPlusClick);

