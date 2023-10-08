import {galleryItems} from './gallery-items.js';

export class GalleryMarkupCreator {
    #galleryRef;
    #isBasicLightbox;

    constructor(galleryRef, isBasicLightbox) {
        this.#galleryRef = galleryRef;
        this.#isBasicLightbox = isBasicLightbox;
        this.createMarkup();
    }

    /**
     * create item li
     * @param elem
     * @returns {HTMLLIElement}
     */
    item(elem) {
        const galleryItem = document.createElement('li');
        galleryItem.classList.add('gallery__item');
        return galleryItem;
    }

    /**
     * create link
     * @param elem
     * @returns {HTMLAnchorElement}
     */
    link(elem) {
        const galleryLink = document.createElement('a');
        galleryLink.href = `${elem.original}`;
        galleryLink.classList.add('gallery__link');
        return galleryLink;
    }

    /**
     * create image
     * @param elem
     * @returns {HTMLImageElement}
     */
    image(elem) {
        const galleryImage = document.createElement('img');
        galleryImage.classList.add('gallery__image')
        galleryImage.src = `${elem.preview}`;
        if (this.#isBasicLightbox) {
            galleryImage.dataset.source = `${elem.original}`
        }
        galleryImage.alt = `${elem.description}`;
        return galleryImage;
    }

    /**
     * create markup
     */
    createMarkup() {
        const arrayItems = galleryItems.map(value => this.item(value));
        const arrayLinks = galleryItems.map(value => this.link(value));
        const arrayImages = galleryItems.map(value => this.image(value));
        arrayLinks.forEach((elem, index) => elem.appendChild(arrayImages[index]));
        arrayItems.forEach((elem, index) => elem.appendChild(arrayLinks[index]));

        this.#galleryRef.append(...arrayItems);
    }
}