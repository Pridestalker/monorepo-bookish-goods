import React, { Component, h} from 'preact'
import styled from 'styled-components';
import { Colors } from '../../../config';
import { TimerBar } from './TimerBar'

const ToastElement = styled.section`
	pointer-events: all;
	overflow: hidden;
	box-shadow: 0 3px 6px rgba(51, 51, 51, 0.2);
	background: ${Colors.primary};
	color: ${Colors.white};
	display: flex;
	margin: .5rem 0;
	padding: .5rem 1rem;
	border-radius: 4px;
	width: 300px;
	position: relative;
`;

const MainToastElement = styled.main`
	flex: 1 0 60%;
`

const ButtonToastElement = styled.button``;

export class Toast extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ToastElement type={this.props.type?? 'primary'} color={this.props.color?? 'white'}>
				<MainToastElement>
					{this.props.content}
				</MainToastElement>
				<ButtonToastElement onClick={e => this.props.action(this.props.slug)}>
					{this.props.actionText}
				</ButtonToastElement>
				<TimerBar time={this.props.time} />
			</ToastElement>
		)
	}
}
