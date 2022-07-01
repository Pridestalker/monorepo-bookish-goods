import {
	children,
	dispatch,
	html,
} from 'hybrids';
import style from './style';
import GalleryItem from './gallery-item';

function activate(name) {
	return (host) => {
		host.activeItem = name;

		dispatch(host, 'gallery-switch');
	};
}

export default {
	items: children(GalleryItem),
	activeItem: {
		set: ({items}, name) => items
			.filter(item => item.active = item.name === name)
			.map(({name}) => name)[0],
		get: ({items}) => items.filter(item => item.active)[0]
	},
	render: ({ items, activeItem }) => html`
	${style}
<picture>
	<img src="${activeItem.src}" loading="lazy" alt="${activeItem.alt}" class="featured-image" />
</picture>
<nav>
  ${items.map( ( { src, alt, active, name } ) =>
		html`
<button class="${{ active }}" onclick="${activate( name )}" >
	<picture>
		<img src="${src}" alt="${alt}" loading="lazy" class="button-image">
	</picture>
</button>
	`.key( name )
	)}
</nav>
	`
};
