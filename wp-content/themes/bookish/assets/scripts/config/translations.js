export const nl = {
	search: {
		post_type: {
			product: 'product',
			page: 'pagina',
			post: 'bericht'
		}
	}
}

export function $t(string, backup = '', locale = nl) {
	const nesting = string.split('.');

	return nesting.reduce((xs, x) => (xs && xs[x]) ? xs[x] : backup, locale);
}

export default {
	$t,
	locales: {
		nl
	}
}
