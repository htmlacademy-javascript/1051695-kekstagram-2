// let serverPhotos = Array.from(document.querySelectorAll('.picture'));
// import { createPhotos } from './picture';
const ACTIVE_BUTTON_CLASS = 'img-filters__button--active';
let currentFilter = 'filter-default';
const applyFilter = () => {
  let serverPhotos = Array.from(document.getElementsByClassName('picture'));
  let filteredPictures = [];
  switch (currentFilter) {
    case 'filter-default':
      filteredPictures = serverPhotos;
      break;
    case 'filter-random':
      filteredPictures = serverPhotos.toSorted(() => 0.5 - Math.random).slice(0, 10);
      break;
    case 'filter-discussed':
      filteredPictures = serverPhotos.toSorted((a, b) => +b.querySelector('.picture-likes') - +a.querySelector('.picture-likes'));
  }
  serverPhotos = filteredPictures;
  // console.log(filteredPictures);
  return filteredPictures;
};

const onFilterChange = (evt) => {

  const targetButton = evt.target;
  const activeButton = document.querySelector(`.${ACTIVE_BUTTON_CLASS}`);
  if (!targetButton.matches('button')) {
    return;
  }
  if (targetButton === activeButton) {
    return;
  }

  activeButton.classList.toggle(`${ACTIVE_BUTTON_CLASS}`);
  targetButton.classList.toggle(`${ACTIVE_BUTTON_CLASS}`);
  currentFilter = targetButton.getAttribute('id');

  applyFilter();
};

const imgFiltersContainer = document.querySelector('.img-filters__form');
imgFiltersContainer.addEventListener('click', onFilterChange);

// export { applyFilter };
