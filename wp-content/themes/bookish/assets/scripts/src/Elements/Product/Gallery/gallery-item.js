import { LitElement, html, css } from 'lit-element';

export class GalleryItem extends LitElement {
	static get styles() {
		return css`
img	{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 14px;
}
`
	}

	static get properties() {
		return {
			src: {
				type: String,
			},
			modern_src: {
				type: String,
			},
			alt: {
				type: String,
			},
			name: {
				type: String,
			}
		}
	}

	render() {
		return html`
			<picture>
				${(this.modern_src && this.modern_src !== '') && html`
					<source srcset="${this.modern_src}" type="image/webp">
				`}	
				<img src="${this.src}" alt="${this.alt}" />
			</picture>
		`
	}
}
