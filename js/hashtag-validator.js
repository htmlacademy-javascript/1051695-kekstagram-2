const MAX_HASHTAG_NUMBER = 5;
const hashtagInput = document.querySelector('.text__hashtags');
const formUpload = document.querySelector('.img-upload__form');

const pristine = new Pristine(formUpload, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper'
});

const validateHashtag = (value) => {

  const hashtags = value.toLowerCase().trim().split(' ').filter((el) => el !== '');
  const hashtagReg = /^#[a-zа-яё0-9]{1,19}$/i;
  let res = true;

  res = hashtags.every((el) => hashtagReg.test(el));
  if (hashtags.length > MAX_HASHTAG_NUMBER || new Set(hashtags).size !== hashtags.length) {
    res = false;
  }
  return res;
};

pristine.addValidator(hashtagInput, validateHashtag, 'некорректное значение поля');
formUpload.addEventListener('submit', (evt) => {

  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});
