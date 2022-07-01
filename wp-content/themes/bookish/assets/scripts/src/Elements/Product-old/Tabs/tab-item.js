import { html } from 'hybrids';
import itemStyle from './item-style';

export default {
	name: '',
	icon: '',
	active: false,
	render: ({ active }) => html`
		${active && html`${itemStyle} <slot></slot>`}
	`,
};
