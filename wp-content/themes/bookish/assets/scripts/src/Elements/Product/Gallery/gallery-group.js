import { html, LitElement } from 'lit-element';
import style from './style';

export class GalleryGroup extends LitElement {
	static get properties() {
		return {
			selected: {
				type: String
			}
		}
	}

	static get styles() {
		return [style];
	}

	get _slottedChildren() {
		return this.querySelectorAll( 'bookish-gallery-item' );
	}

	get selectedChild() {
		return Array.prototype.filter.call(this.slottedChildren, (child) => child.name === this.selected)?.[0] || ``;
	}

	constructor() {
		super();

		this.slottedChildren = this._slottedChildren;
	}

	render() {
		const selected = this.selectedChild;
		const children = Array.from(this.slottedChildren);
		return html`
<section>
	<picture>
		${(selected.modern_src && selected.modern_src !== '') && html`
			<source srcset="${selected.modern_src}" type="image/webp">
		`}	
		<img src="${selected.src}" alt="${selected.alt}" class="selected-gallery-item" />
	</picture>

	<nav>
		${children.map(child => html`
			<button class="${this.selected === child.name? 'active' : ''}" @click="${() => this.selected = child.name}">
			${child}
			</button>
		`)}	
	</nav>
</section>
`;
	}
}
