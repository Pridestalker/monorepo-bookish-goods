import { html } from 'hybrids';
export default html`
<style>
nav {
    display: flex;
	scroll-snap-type: x mandatory;
	overflow: scroll;
	overflow-y: hidden;
	padding-left: 1rem;
	padding-right: 1rem;
}
button {
    padding: 0;
    width: auto;
    overflow: visible;

    background: transparent;

    color: inherit;
    font: inherit;

    line-height: normal;

    /* Corrects font smoothing for webkit */
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    -webkit-appearance: none;
    border: 0;
    flex: 0 0 105px;
    height: 105px;
    cursor: pointer;
    margin: 0 .5rem 0 0;
    border-radius: 14px;
    scroll-snap-align: start;
}

button.active {
    border: 1px solid hsl(265, 83%, 45%);
}

button > img {
    border-radius: 14px;
}

.featured-image {
    max-height: 450px;
    width: 100%;
    transition: all 225ms ease-in-out;
}

.button-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

figure {
    margin: 0;
}

@media screen and (min-width: 768px) {
	nav {
		overflow: unset;
		scroll-snap-type: unset;
		padding-left: 0;
		padding-right: 0;
	}
	
	.featured-image {
		width: auto;
	}
}
</style>
`;
