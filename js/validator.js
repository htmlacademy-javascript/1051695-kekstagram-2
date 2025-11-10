

const MAX_HASHTAG_NUMBER = 5;
const MAX_COMMENT_LENGTH = 140;
const HASHTAG_REG = /^#[a-zа-яё0-9]{1,19}$/i;
const formUpload = document.querySelector('.img-upload__form');
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');


const pristine = new Pristine(formUpload, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
});

const getHashtags = (val) => val.toLowerCase().trim().split(' ').filter((el) => el !== '');

const validateHashtagReg = (value) => getHashtags(value).every((el) => HASHTAG_REG.test(el));
const validateHashtagNumber = (value) => getHashtags(value).length <= MAX_HASHTAG_NUMBER;
const validateHashtagRepeat = (value) => new Set(getHashtags(value)).size === getHashtags(value).length;

const validateComment = (value) => value.length <= MAX_COMMENT_LENGTH;

pristine.addValidator(hashtagInput, validateHashtagReg, 'невалидный хэштег');
pristine.addValidator(hashtagInput, validateHashtagNumber, 'превышено количество хэштегов');
pristine.addValidator(hashtagInput, validateHashtagRepeat, 'хэштеги повторяются');
pristine.addValidator(commentInput, validateComment, 'превышена длина комментария');

export { pristine, formUpload };
