export default () => {
	const checkbox = document.getElementById('ship-to-different-address-checkbox'),
		fields = document.querySelector('.shipping_address');

	checkbox.addEventListener('input', (e) => {
		if (e.target.checked) {
			addActiveToFields(fields);
		} else {
			removeActiveFromFields(fields);
		}
	});
};

/**
 *
 * @param {HTMLInputElement} checkbox
 * @param {HTMLDivElement} fields
 */
export const immediateCheckOnce = (checkbox, fields) => {
	if (checkbox.checked) {
		addActiveToFields(fields);
	}
};

/**
 * Only adds a new class when it wasn't already added
 *
 * @param {HTMLDivElement} fields
 */
export const addActiveToFields = fields => {
	if (!fields.classList.contains('active'))
		fields.classList.add('active');
};

export const removeActiveFromFields = fields => {
	if(fields.classList.contains('active'))
		fields.classList.remove('active');
}
