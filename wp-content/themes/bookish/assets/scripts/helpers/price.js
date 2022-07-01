/**
 *
 * @param {string|number} price
 * @returns {string}
 */
export function price_europe_separators(price) {
	return price.toString().replace('.', ',')
}

/**
 *
 * @param {string|number} price
 * @returns {*}
 */
export function price_strip_euro(price) {
	return price.toString().replace('€', '');
}


export class priceStringBuilder {
	/**
	 *
	 * @param {string|number} price
	 */
	constructor(price) {
		this.price = price;
	}

	set_euro_separators() {
		this.price = price_europe_separators(this.price);
		return this;
	}

	strip_euro_sign() {
		this.price = price_strip_euro(this.price);
		return this;
	}

	toString() {
		return this.price;
	}
}
