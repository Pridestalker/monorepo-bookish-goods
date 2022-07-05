/**
 * @var {Array<import('@webreact/webreactor/src/Router/types').ComponentInit>} components
 */
const components = [
  {
    target: 'body',
    file: async () => (await import(/* webpackChunkName: "common" */ './routes/common')).default,
  },
  {
    target: 'header.header',
    file: async () => (await import(/* webpackChunkName: "header" */ './routes/common/header')).default,
  },
  {
    target: 'bookish-hamburger',
    file: async () => (await import(/* webpackChunkName: "bookish-header" */ './routes/common/header/Menu')).default,
  },
  {
    target: '.woocommerce-checkout',
    file: async () => (await import(/* webpackChunkName: "checkout" */ './routes/checkout')).default,
  },
  {
    target: '[data-component="share-button"]',
    file: async () => (await import(/* webpackChunkName: "share" */ './routes/common/share')).default,
  },
  {
    target: '[data-component="product-gallery"]',
    file: async () =>
      (await import(/* webpackChunkName: "single-product/gallery" */ './routes/single-product/Gallery')).default,
  },
];

export default components;
