export default () => {
	const form = document.querySelector('.woocommerce-ordering'),
		select = form.querySelector('select');

	select.addEventListener('change', () => {
		form.submit();
	})
}
