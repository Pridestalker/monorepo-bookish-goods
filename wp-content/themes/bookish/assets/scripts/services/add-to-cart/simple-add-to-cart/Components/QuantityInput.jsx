import React, { Component, h } from 'preact'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/pro-solid-svg-icons'

const Input = styled.input`
	margin-bottom: 0 !important;
	box-shadow: none !important;
	border-radius: 0 !important;
	text-align: center !important;
	flex: 1 0 250px;
`;

const Button = styled.button`
	line-height: 0;
	padding: 0 1rem;
	border: 1px solid #ffdc5c;
	background: #ffdc5c;
	touch-action: manipulation;
	
	${props => props.left && 'border-top-left-radius: 4px; border-bottom-left-radius: 4px;'}
	${props => props.right && 'border-top-right-radius: 4px; border-bottom-right-radius: 4px;'}
`;

export class QuantityInput extends Component {
	render() {
		return (
			<div style={{ 'display': 'flex', }}>
				<Button type={'button'} onClick={this.props.reduceHandler} left={true} right={false}>
					<FontAwesomeIcon icon={faMinus} />
				</Button>
				<Input
					type={'number'}
					name={'quantity'}
					value={this.props.quantity}
					onChange={event => this.props.changeHandler(event.target.value)} />
				<Button type={'button'} onClick={this.props.increaseHandler} left={false} right={true}>
					<FontAwesomeIcon icon={faPlus} />
				</Button>
			</div>
		)
	}
}
