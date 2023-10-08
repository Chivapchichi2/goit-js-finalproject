import {GalleryMarkupCreator} from './gallery-markup-creator.js';

/**
 * get gallery ref
 * @type {Element}
 */
const galleryRef = document.querySelector('.gallery');
/**
 * create markup
 */
new GalleryMarkupCreator(galleryRef, true);

let instance = null;

/**
 * handle click on gallery
 * @param event
 */
function handleGalleryClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') return;
    instance = basicLightbox.create(`<img src=${event.target.dataset.source} alt=${event.target.alt}>`);
    instance.show();
}


galleryRef.addEventListener('click', handleGalleryClick);


/**
 * handle keydown Escape
 */
document.addEventListener('keydown', event => {
    if (instance) {
        if (event.key === 'Escape') {
            instance.close();
            instance = null;
        }
    }
});
