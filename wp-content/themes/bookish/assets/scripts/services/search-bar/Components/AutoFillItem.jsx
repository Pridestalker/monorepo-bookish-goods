import React, { Component, createRef, h } from 'preact';
import styled from 'styled-components';
import { Colors, Trans } from '../../../config';

const Item = styled.li`
cursor: pointer;
transition: background-color 225ms ease,
			color 225ms ease-in-out;
padding: 1rem .5rem;

&:hover, 
&:focus {
	background: ${Colors.primary};
	color: ${Colors.white};
}

&:not(:last-of-type) {
margin-bottom: .5rem;
}
`

const Header = styled.strong`

`;

const Aside = styled.small`
display: block;
`

export class AutoFillItem extends Component {
	self = createRef();

	constructor(props) {
		super(props);

		this.item = props.item;
		this.clickHandler = this.clickHandler.bind(this);
		this.keyPressHandler = this.keyPressHandler.bind(this);
	}

	clickHandler()  {
		window.location.search = new URLSearchParams({
			p: this.item.ID,
		}).toString();
	}

	componentDidMount() {
		if (this.props.focused) { this.self?.current?.focus(); }
	}

	componentDidUpdate() {
		if (this.props.focused) { this.self?.current?.focus(); }
	}

	keyPressHandler(e) {
		console.dir(e.key);
		if (e.key === 'Enter') {
			return this.clickHandler();
		}

		if (e.key === 'Escape') {
			return this.props.fillHider(e, true);
		}
		

		this.props.keyDownHandler(e);
	}

	render() {
		if (this.item.post_status !== 'publish') {
			return;
		}

		return (
			<Item onClick={this.clickHandler} onKeyDown={this.keyPressHandler} ref={this.self} tabIndex={-1}>
				<Header>{this.item.post_title}</Header>
				<Aside>
					{Trans.$t(`search.post_type.${this.item.post_type}`, this.item.post_type)}
				</Aside>
			</Item>
		)
	}
}
