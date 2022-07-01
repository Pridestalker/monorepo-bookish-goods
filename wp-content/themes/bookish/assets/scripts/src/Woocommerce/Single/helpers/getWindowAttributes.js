export default () => splitWindowAttributes(window.acceptedAttributes);

/**
 * @param {any[]} data
 */
export const splitWindowAttributes = (data) => data.map(
	attribute => ({
		id: attribute.variation_id,
		is_active: attribute.variation_is_active,
		is_visible: attribute.variation_is_visible,
		is_in_stock: attribute.is_in_stock,
		min_qty: attribute.min_qty,
		max_qty: attribute.max_qty,
		price: attribute.display_price,
		attributes: attribute.attributes,
	}));
