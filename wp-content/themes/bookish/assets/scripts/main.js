if (process.env.NODE_ENV !== 'production') {
  require('preact/debug');
}

import './vendor';
import './bootstrap';
import { fullReady, HadronCollider } from '@webreact/webreactor';
import routes from './routes.js';

const router = new HadronCollider(routes);

router.loadEvents();

fullReady(() => {});
