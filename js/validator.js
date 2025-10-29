const MAX_HASHTAG_NUMBER = 5;
const MAX_COMMENT_LENGTH = 140;

const formUpload = document.querySelector('.img-upload__form');
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');


const pristine = new Pristine(formUpload, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
});

const getHashtags = (val) => val.toLowerCase().trim().split(' ').filter((el) => el !== '');

const validateHashtagReg = (value) => {
  const hashtagReg = /^#[a-zа-яё0-9]{1,19}$/i;
  return getHashtags(value).every((el) => hashtagReg.test(el));
};
const validateHashtagNumber = (value) => getHashtags(value).length <= MAX_HASHTAG_NUMBER;
const validateHashtagRepeat = (value) => {
  const set = new Set(getHashtags(value)).size;
  return set === getHashtags(value).length;
};

const validateComment = (value) => value.length <= MAX_COMMENT_LENGTH;

pristine.addValidator(hashtagInput, validateHashtagReg, 'невалидный хэштег');
pristine.addValidator(hashtagInput, validateHashtagNumber, 'превышено количество хэштегов');
pristine.addValidator(hashtagInput, validateHashtagRepeat, 'хэштеги повторяются');
pristine.addValidator(commentInput, validateComment, 'превышена длина комментария');


const setUserFormSubmit = (onSuccess) => {
  formUpload.addEventListener('submit', (evt) => {
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
        .then(onSuccess);
    }
  });
};

export { setUserFormSubmit };
