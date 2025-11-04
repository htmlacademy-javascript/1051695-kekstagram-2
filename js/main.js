import './picture.js';
import './big-picture.js';
import './img-effect-slider.js';
import './img-scale.js';
import './api.js';
import './filter.js';
import { applyFilter, imgFiltersContainer } from './filter.js';
import { createPhotos } from './picture.js';
import { serverPhotos } from './api.js';
import { debounce, DEBOUNCE_DELAY } from './utils.js';

imgFiltersContainer.addEventListener('click', debounce(() => {
  applyFilter(serverPhotos, createPhotos)();
},DEBOUNCE_DELAY));
