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


const onEffectChange = (evt) => {
  const effect = evt.target.value;

  if (effect === 'none') {
    effectLevel.classList.add('hidden');
  } else {
    effectLevel.classList.remove('hidden');
  }

  if (effect === 'none') {
    img.style.filter = 'none';
  } else if (effect === 'chrome') {
    slider.noUiSlider.updateOptions({
      range: {
        'min': 0,
        'max': 1
      },
      start: 1,
      step: .1
    });
    slider.noUiSlider.on('update', () => {
      img.style.filter = `grayscale(${effectLevelValue.value})`;
    });
  } else if (effect === 'sepia') {
    slider.noUiSlider.updateOptions({
      range: {
        'min': 0,
        'max': 1
      },
      start: 1,
      step: .1
    });
    slider.noUiSlider.on('update', () => {
      img.style.filter = `sepia(${effectLevelValue.value})`;
    });
  } else if (effect === 'marvin') {
    slider.noUiSlider.updateOptions({
      range: {
        'min': 0,
        'max': 100
      },
      start: 100,
      step: 1
    });
    slider.noUiSlider.on('update', () => {
      img.style.filter = `invert(${effectLevelValue.value}%)`;
    });
  } else if (effect === 'phobos') {
    slider.noUiSlider.updateOptions({
      range: {
        'min': 0,
        'max': 3
      },
      start: 3,
      step: .1
    });
    slider.noUiSlider.on('update', () => {
      img.style.filter = `blur(${effectLevelValue.value}px)`;
    });
  } else if (effect === 'heat') {
    slider.noUiSlider.updateOptions({
      range: {
        'min': 1,
        'max': 3
      },
      start: 3,
      step: .1
    });
    slider.noUiSlider.on('update', () => {
      img.style.filter = `brightness(${effectLevelValue.value})`;
    });
  }
};

effectsList.addEventListener('change', onEffectChange);

