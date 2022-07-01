import {
	Shop
} from '../../src/Woocommerce';

export default {
	init() {
		Shop.refreshAfterOrder();
	},
	finalize() {},
};
