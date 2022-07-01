import { html } from 'hybrids';

export default html`
<style>
nav {
	display:flex;
}

nav button {
	flex: 1 1 auto;
    width: auto;
    overflow: visible;
    background: transparent;
    font: inherit;
    line-height: normal;
    /* Corrects font smoothing for webkit */
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    -webkit-appearance: none;
    cursor: pointer;
    padding: .5rem;
	border: 0 solid hsl(265, 83%, 45%);
	border-bottom-width: 1px;
	color: hsl(265, 83%, 45%);
	opacity: 0.5;
	
	transition: opacity 225ms ease-in;
}

button:hover {
	opacity: 0.75
}

button.active {
	border-bottom-width: 0;
	border-top-width: 1px;
	border-left-width: 1px;
	border-right-width: 1px;
	opacity: 1;
}
</style>
`;
