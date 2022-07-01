import { LitElement, html } from 'lit-element';

export class TabItem extends LitElement {
	static get properties() {
		return {
			name: { type: String },
			icon: { type: String },
		}
	}

	render () {
		return html`<slot />`
	}
}
