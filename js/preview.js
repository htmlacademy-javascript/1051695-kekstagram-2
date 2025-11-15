import { onFormCloseClick } from './photo-loader.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const fileChoser = document.querySelector('#upload-file');
const upLoadPreview = document.querySelector('.img-upload__preview img');
const upLoadPreviewEffects = document.querySelectorAll('.effects__preview');

const loadImageFile = () => {
  const file = fileChoser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {

    upLoadPreview.src = URL.createObjectURL(file);
    upLoadPreviewEffects.forEach((item) => {
      item.style.backgroundImage = `url(${upLoadPreview.src})`;
    });
  } else {
    onFormCloseClick();
  }
};

document.querySelector('#upload-file').addEventListener('change', loadImageFile);

