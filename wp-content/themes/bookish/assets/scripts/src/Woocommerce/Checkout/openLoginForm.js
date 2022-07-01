export default () => {
	const form = document.querySelector('.woocommerce-form-login'),
		button = document.querySelector('.js-login-toggle-button');

	if (!form || !button) {
		return;
	}

	button.addEventListener('click', () => form.style.display = '');
};
