import './picture.js';
import './big-picture.js';
import './img-effect-slider.js';
import './img-scale.js';
import './api.js';
import './filter.js';
import { applyFilter, imgFiltersContainer } from './filter.js';
import { createPhotos } from './picture.js';
import { serverPhotos } from './api.js';
imgFiltersContainer.addEventListener('click', () => {
  applyFilter(serverPhotos, createPhotos)();
});
