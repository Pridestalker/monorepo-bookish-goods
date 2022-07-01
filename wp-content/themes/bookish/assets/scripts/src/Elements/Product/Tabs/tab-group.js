import { html, LitElement } from 'lit-element';
import { buttonStyle } from './styles'

export class TabGroup extends LitElement {
	static get properties() {
		return {
			default: {
				type: String,
			}
		}
	}

	static get styles() {
		return [
			buttonStyle
		];
	}

	get _slottedChildren() {
		return this.querySelectorAll('bookish-tab');
	}

	get selectedChild() {
		return Array.prototype.filter.call(this.slottedChildren, (child) => child.name === this.default)?.[0] || ''
	}

	constructor() {
		super();

		this.slottedChildren = this._slottedChildren;
	}

	render() {
		const selected = this.selectedChild,
			children = Array.from(this.slottedChildren);

		return html`
		<section>
		<nav>
			${children.map(child => html`
			<button class="${this.default === child.name && 'active'}" @click="${() => this.default = child.name}">
				${child.name}
			</button>`)}
		</nav>
		
		<main>
			${selected}
		</main>
		</section>
		`
	}
}
