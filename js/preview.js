import { onFormCloseClick } from './photo-loader.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const fileChoser = document.querySelector('#upload-file');
const upLoadPreview = document.querySelector('.img-upload__preview img');
const upLoadPreviewEffects = document.querySelectorAll('.effects__preview');
const FReader = new FileReader();
const loadImageFile = () => {
  const file = fileChoser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    FReader.readAsDataURL(file);

    FReader.onload = function (evt) {

      upLoadPreview.src = evt.target.result;
      upLoadPreviewEffects.forEach((item) => {
        item.style.backgroundImage = `url(${evt.target.result})`;
      });

    };
  } else {
    onFormCloseClick();
  }
};

document.querySelector('#upload-file').addEventListener('change', loadImageFile);

