import { Component } from '@webreact/webreactor';
import { HamburgerSloped } from '@webreact/fissure-hamburger';

export default class extends Component {
  static target = 'bookish-hamburger';
  static _name = 'Common - Hamburger';

  componentMounted() {
    this.defineHamburgerMenu();
    this.toggleNavMenuHandler();
  }

  handleBodyClickToCloseMenu() {
    document.body.addEventListener('click', this.closeNavigationOnClick.bind(this), {
      once: true,
    });
  }

  toggleNavMenuHandler() {
    document.body.addEventListener('wr-hamburger-clicked', (e) => {
      const { isOpen } = e.detail;

      if (isOpen) {
        this.openNavigationMenu();
      } else {
        document.body.classList.remove('menu-active');
        document.querySelector('nav.nav').classList.remove('active');
      }
    });
  }

  closeNavigationOnClick() {
    document.body.dispatchEvent(new CustomEvent('wr-hamburger-close'));
    document.body.classList.remove('menu-active');
  }

  openNavigationMenu() {
    document.body.classList.add('menu-active');
    document.querySelector('nav.nav').classList.add('active');
    setTimeout(() => {
      this.handleBodyClickToCloseMenu();
    }, 20);
  }

  defineHamburgerMenu() {
    customElements.define('bookish-hamburger', HamburgerSloped);
  }
}
