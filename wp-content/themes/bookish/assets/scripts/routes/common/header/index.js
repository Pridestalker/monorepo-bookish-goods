import { Component } from '@webreact/webreactor';
import Headroom from 'headroom.js';

export default class extends Component {
  static target = 'header.header';
  static _name = 'Header - Default';

  componentMounted() {
    const headroom = new Headroom(this.first);

    headroom.init();
  }
}
