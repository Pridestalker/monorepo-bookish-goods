import React, { Component, h } from 'preact'
import styled from 'styled-components';

const Bulb = styled.span`
	position: absolute;
	bottom: -.5rem;
	left: -.5rem;
	background: #6314d2;
	color: #fff;
	border-radius: 50%;
	font-size: 70%;
	padding: .3rem .5rem;
	line-height: 1;
`;


export class BulbCounter extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (this.props.cartCount === 0) {
			return;
		}

		return (
			<Bulb>
				{ this.props.cartCount }
			</Bulb>
		)
	}
}

