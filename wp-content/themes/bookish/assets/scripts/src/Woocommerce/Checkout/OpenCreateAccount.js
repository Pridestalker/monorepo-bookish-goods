export default () => {
	const button = document.querySelector('#createaccount'),
		form = document.querySelector('.create-account');

	if (!form || !button) {
		return;
	}

	button.addEventListener('click', () => form.style.display = button.checked ? '' : 'none');
}
