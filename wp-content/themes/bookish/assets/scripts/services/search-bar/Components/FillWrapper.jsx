import React, { Component, h } from 'preact'
import styled from 'styled-components';
import { Colors } from '../../../config';
import { AutoFillItem } from './AutoFillItem'

const Wrapper = styled.ul`
position: absolute;
top: 100%;
left: 0;
right: 0;
background: ${Colors.white};
box-shadow: 0 3px 6px rgba(51,51,51, 0.2);
z-index: 1;
`;

export class FillWrapper extends Component {
	render() {
		if (this.props.posts.length === 0) {
			return;
		}

		return (
			<Wrapper>
				{this.props.posts.map((item, index) => (
					<AutoFillItem item={item}
								  focused={index === this.props.cursor}
								  fillHider={this.props.fillHider}
								  keyDownHandler={this.props.keyDownHandler} />
				))}
			</Wrapper>
		)
	}
}
