const SCALE_STEP = .25;
const MAX_SCALE = 1;
const MIN_SCALE = .25;

const scaleMinus = document.querySelector('.scale__control--smaller');
const scalePlus = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const img = document.querySelector('.img-upload__preview img');
let scale = MAX_SCALE;

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

scaleMinus.addEventListener('click', onMinusClick);
scalePlus.addEventListener('click', onPlusClick);
