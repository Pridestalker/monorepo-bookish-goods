import { Component } from '@webreact/webreactor';

export default class extends Component {
  static target = '[data-component="product-gallery"]';
  static _name = 'Single Product - Gallery';

  componentMounted() {
    const imageEventListener = (target, image) => () => {
      target.src = image.hasAttribute('data-src') ? image.getAttribute('data-src') : image.src;
      target.srcSet = image.hasAttribute('data-srcset') ? image.getAttribute('data-srcset') : image.srcSet;
    };

    this.each(({ el }) => {
      const images = this.getAllImagesFromComponent(el);
      const target = this.getTargetImageFromComponent(el);

      let bindEventsToImages = (image) => image.addEventListener('click', imageEventListener(target, image));

      images.forEach(bindEventsToImages);
    });
  }

  getTargetImageFromComponent(el) {
    return el.querySelector(':scope > .product-gallery__selected-image');
  }

  getAllImagesFromComponent(el) {
    return el.querySelectorAll(':scope > .product-gallery__images > img');
  }
}
