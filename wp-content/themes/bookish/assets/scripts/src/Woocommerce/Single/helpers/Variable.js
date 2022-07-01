/**
 * @param {Event} e
 * @param {any} attributesMemo
 */
export const selectEvent = (e, attributesMemo) => {
	const { value, dataset } = e.target;
	const { attribute_name } = dataset;
	const possibilities = attributesMemo
		.filter(attribute => attribute.attributes.hasOwnProperty(attribute_name))
		.filter(attribute => attribute.attributes[attribute_name] === ''? true : attribute.attributes[attribute_name] === value);

	if (possibilities.length === 1) {
		document.querySelector('input[name="variation_id"]').value = possibilities[0].id;
		document.querySelector('button.product-add-to-cart').disabled = false;
	} else {
		document.querySelector('input[name="variation_id"]').value = 0;
		document.querySelector('button.product-add-to-cart').disabled = true;
	}
}

/**
 *
 * @param {HTMLOptionElement} option
 * @param {HTMLSelectElement} select
 * @param {any} attributesMemo
 */
export const isValidOption = (option, select, attributesMemo) => {
	const { attribute_name } = select.dataset;
	const attributes = attributesMemo
		.filter(attribute => attribute.attributes.hasOwnProperty(attribute_name))
		.filter(attribute => attribute.attributes[attribute_name] === option.value);

	return attributes.length > 0 && attributes[0].is_in_stock;
}

export default {
	selectEvent,
	isValidOption
}
