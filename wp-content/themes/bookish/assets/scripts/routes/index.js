const common = async () =>
    (await import(/* webpackChunkName: "scripts/routes/common" */'./common')).default;
const home = async () =>
    (await import(/* webpackChunkName: "scripts/routes/home" */ './home')).default;
const singleProduct = async () =>
    (await import(/* webpackChunkName: "scripts/routes/single-product" */ './single-product')).default;
const woocommerceCheckout = async () =>
    (await import(/* webpackChunkName: "scripts/routes/woocommerce/checkout" */ './checkout')).default;
const wooStore = async () =>
    (await import(/* webpackChunkName: "scripts/routes/woocommerce/store" */ './woo-store')).default;

export default {
    common,
    home,
    singleProduct,
    woocommerceCheckout,
    wooStore
}
