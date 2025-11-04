
const RANDOM_PHOTOS_COUNT = 10;
const ACTIVE_BUTTON_CLASS = 'img-filters__button--active';

let currentFilter = 'filter-default';
const applyFilter = (photos, func) =>
  () => {

    let filteredPictures = [];
    switch (currentFilter) {
      case 'filter-default':
        filteredPictures = photos;
        break;
      case 'filter-random':
        filteredPictures = photos.toSorted(() => (0.5 - Math.random())).slice(0, RANDOM_PHOTOS_COUNT);
        break;
      case 'filter-discussed':
        filteredPictures = photos.toSorted((a, b) => b.comments.length - a.comments.length);
    }

    document.querySelectorAll('.picture').forEach((el) => el.remove());
    func(filteredPictures);
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
};

const imgFiltersContainer = document.querySelector('.img-filters__form');
imgFiltersContainer.addEventListener('click', onFilterChange);
export { imgFiltersContainer };
export { applyFilter };
