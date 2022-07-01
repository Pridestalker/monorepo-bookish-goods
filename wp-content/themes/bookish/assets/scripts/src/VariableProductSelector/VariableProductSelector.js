/**
 * @deprecated
 */
class VariableProductSelector {
	static formSelector = '.js-add-to-cart';
	static selectSelector = 'select[data-attribute_name]';
	attributeList = [];
	elements = {
		form: null,
		selects: []
	}

	constructor() {
		this.attributeList = this.splitAttributes(window.acceptedAttributes);
		this.elements.form = document.querySelector(VariableProductSelector.formSelector);
		if (!this.elements.form) {
			return;
		}

		this.elements.selects = document.querySelectorAll(VariableProductSelector.selectSelector);

		if (this.elements.selects.length === 0) {
			return;
		}

		this.run();
	}

	run() {
		for ( let i = 0; i < this.elements.selects.length; i++ ) {
			this.elements.selects[i].addEventListener('change', e => this.selectEvent(e));
		}
	}

	selectEvent(e) {
		const { value, dataset } = e.target;
		const { attribute_name } = dataset;

		const possibilities = this.attributeList
			.filter(attribute => attribute.attributes.hasOwnProperty(attribute_name))
			.filter(attribute => attribute.attributes[attribute_name] === '' ? true : attribute.attributes[attribute_name] === value);

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
	 * @param {any[]} data
	 */
	splitAttributes(data) {
		return	data.map(attribute => ({
			id: attribute.variation_id,
			is_active: attribute.variation_is_active,
			is_visible: attribute.variation_is_visible,
			is_in_stock: attribute.is_in_stock,
			min_qty: attribute.min_qty,
			max_qty: attribute.max_qty,
			price: attribute.display_price,
			attributes: attribute.attributes,
		}));
	}
}

export default VariableProductSelector;
