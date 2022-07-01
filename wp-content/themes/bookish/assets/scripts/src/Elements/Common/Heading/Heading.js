import { LitElement, html, css } from 'lit-element';
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';

export class Heading extends LitElement {
	static get properties() {
		return {
			type: { type: String },
			size: { type: String }
		}
	}

	static get styles() {
		return css`
h1,
h2,
h3,
h4,
h5,
h6 {
	font-family: 'Merienda', cursive;
	font-weight: normal;
	margin: 0;
	line-height: 1.5;
}

h1, .is-h1 { font-size: 2rem; }
h2, .is-h2 { font-size: 1.8rem; }
h3, .is-h3 { font-size: 1.5rem; }
`
	}

	constructor() {
		super();

		this.type = '1';
	}

	getClassNames() {
		if (this.size) {
			return `is-${this.size.toString().includes('h')? this.size.toString() : `h${this.size.toString()}`}`
		}
	}

	_getTagName() {
		if (!this.type) {
			return 'h1';
		}

		return `${this.type.toString().includes('h') ? this.type : `h${this.type}`}`;
	}

	render() {
		const template = `
<${this._getTagName()} class="${this.getClassNames()}">
<slot />
</${this._getTagName()}>
		`;

		return html`${unsafeHTML(template)}`
	}
}
