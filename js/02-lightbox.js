import {GalleryMarkupCreator} from './gallery-markup-creator.js';

/**
 * get gallery ref
 * @type {Element}
 */
const galleryRef = document.querySelector('.gallery');
/**
 * create markup
 */
new GalleryMarkupCreator(galleryRef, false);

new SimpleLightbox('.gallery a', {captionType: 'attr', captionsData: 'alt', captionDelay: 250});