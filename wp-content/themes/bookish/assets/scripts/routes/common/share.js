import { Component } from '@webreact/webreactor';

export default class extends Component {
  static target = '[data-component="share-button"]';
  static _name = 'Share';

  componentMounted() {
    this.each(({ el }) => {
      el.addEventListener('click', () => {
        window.navigator.share({
          title: document.title,
          url: window.location.href,
        });
      });
    });
  }
}
