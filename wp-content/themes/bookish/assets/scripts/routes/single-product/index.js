import { GalleryItem, GalleryGroup, TabItem, TabGroup } from '../../src/Elements/Product';
import { renderVariableAddToCart, renderSimpleAddToCart } from '../../services/add-to-cart';

export default {
	init() {
		customElements.define('bookish-gallery', GalleryGroup);
		customElements.define('bookish-gallery-item', GalleryItem);
		customElements.define('bookish-tabs', TabGroup);
		customElements.define('bookish-tab', TabItem);
	},

	finalize() {
		renderVariableAddToCart();
		renderSimpleAddToCart();
	},
};
