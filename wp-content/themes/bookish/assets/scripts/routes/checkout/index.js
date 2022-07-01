import {
  addSelectChangeListeners,
  checkForDifferentShipping,
  openCreateAccount,
  openLoginForm,
} from '../../src/Woocommerce/Checkout';
import { Component } from '@webreact/webreactor';

export default class extends Component {
  static target = '.woocommerce-checkout';
  static _name = 'Checkout - main';

  componentMounted() {
    checkForDifferentShipping();
    openLoginForm();
    openCreateAccount();
    addSelectChangeListeners();
  }
}
