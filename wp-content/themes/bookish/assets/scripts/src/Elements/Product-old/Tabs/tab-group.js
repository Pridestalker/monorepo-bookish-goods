import {
	children,
	dispatch,
	html
} from 'hybrids';
import TabItem from './tab-item';
import buttonStyle from './button-style';

function activate(name) {
	return (host) => {
		host.activeItem = name;

		dispatch(host, 'tab-switch');
	};
}

/** @deprecated */
export default {
	items: children(TabItem),
	activeItem: {
		set: ({items}, name) => items
			.filter(item => item.active = item.name === name)
			.map(({name}) => name)[0],
	},
	render: ({ items }) => html`
${buttonStyle}
    <nav>
      ${items.map(({ name, active }) =>
		html`
          <button class="${{ active }}" onclick="${activate(name)}">
            ${name}
          </button>
        `.key(name)
	)}
    </nav>
	
	<slot></slot>
	`,
};
