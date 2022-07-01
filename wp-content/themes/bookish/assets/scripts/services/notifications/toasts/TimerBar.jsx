import React, { Component, h, Fragment } from 'preact';
import styled from 'styled-components';

const ProgressBar = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: ${props => (props.width || 0) + '%'};
	transition: width 225ms ease;
	height: 3px;
	background: rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(2px);
`

export class TimerBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			width: 0,
		}

		this.interval = null;

		this.increaseWidth = this.increaseWidth.bind(this);
	}

	increaseWidth(width) {
		this.setState({
			width: this.state.width += width
		});
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		if (!this.props.time) {
			return <Fragment />
		}

		this.interval = setInterval(() => this.increaseWidth(100/this.props.time), 100);

		if (this.state.width >= 100) {
			clearInterval(this.interval);
		}

		return (
			<ProgressBar width={this.state.width} />
		);
	}
}
