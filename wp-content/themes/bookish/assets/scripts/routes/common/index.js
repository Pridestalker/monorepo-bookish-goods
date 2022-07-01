import { enableToasts } from '../../services/notifications';
import { hydrateSearchBar } from '../../services/search-bar/app';
import { enableMailchimpForm } from '../../services/mailchimp-subscribe/app';
import { hydrateProducts } from '../../services/product-card/app';
import { Heading } from '../../src/Elements/Common/Heading/Heading';
import { Component } from '@webreact/webreactor';

export default class extends Component {
  static target = 'body';
  static _name = 'Common';

  componentMounted() {
    enableToasts();
    hydrateSearchBar();
    hydrateProducts();
    enableMailchimpForm();

    this.registerCustomElements();
  }

  registerCustomElements() {
    customElements.define('bookish-heading', Heading);
  }
}
