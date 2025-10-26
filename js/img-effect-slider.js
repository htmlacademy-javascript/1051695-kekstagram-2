const img = document.querySelector('.img-upload__preview img');
const slider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectLevel = document.querySelector('.effect-level');
const effectsList = document.querySelector('.effects__list');

noUiSlider.create(slider, {
  connect: 'lower',
  range: {
    'min': 0,
    'max': 1
  },

  start: 0,

  format: {
    to: (value) => value,
    from: (value) => parseFloat(value)
  }
});

slider.noUiSlider.on('update', () => {
  effectLevelValue.value = slider.noUiSlider.get();
});

const effectOptions = {
  chrome: {
    range: {
      'min': 0,
      'max': 1
    },
    start: 1,
    step: .1
  },
  sepia: {
    range: {
      'min': 0,
      'max': 1
    },
    start: 1,
    step: .1
  },
  marvin: {
    range: {
      'min': 0,
      'max': 100
    },
    start: 100,
    step: 1
  },
  phobos: {
    range: {
      'min': 0,
      'max': 3
    },
    start: 3,
    step: .1
  },
  heat: {
    range: {
      'min': 1,
      'max': 3
    },
    start: 3,
    step: .1
  }
};
const effectHandlers = {
  chrome: () => {
    img.style.filter = `grayscale(${effectLevelValue.value})`;
  },
  sepia: () => {
    img.style.filter = `sepia(${effectLevelValue.value})`;
  },
  marvin: () => {
    img.style.filter = `invert(${effectLevelValue.value}%)`;
  },
  phobos: () => {
    img.style.filter = `blur(${effectLevelValue.value}px)`;
  },
  heat: () => {
    img.style.filter = `brightness(${effectLevelValue.value})`;
  }
};

const onEffectChange = (evt) => {
  const effect = evt.target.value;

  if (effect === 'none') {
    effectLevel.classList.add('hidden');
    img.style.filter = 'none';
  } else {
    effectLevel.classList.remove('hidden');
  }

  if (effectOptions[effect]) {
    slider.noUiSlider.updateOptions(effectOptions[effect]);
    slider.noUiSlider.on('update', effectHandlers[effect]);
  }
};


effectsList.addEventListener('change', onEffectChange);

