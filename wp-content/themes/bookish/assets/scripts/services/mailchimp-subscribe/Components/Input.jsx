import React, { Component, h } from 'preact'
import styled from 'styled-components';
import { Colors } from '../../../config'

const generateRandomString = (length= 6 )=> Math.random().toString(36).substr(2, length);

const InputField = styled.input.attrs(props => ({
	type: props.type || 'text',
}))`
	color: ${Colors.black};
`;

const InputGroup = styled.div`
	position: relative;
`;

const FloatingLabel = styled.label.attrs(props => ({

}))`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 1rem;
	transition: all 225ms ease-in-out;
	color: ${Colors.black};
	opacity: 1;
	
	&.active {
		font-size: 50%;
		transform: none;
		top: 0;
	}
`

export class Input extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activated: false,
		};

		this.focusHandler = this.focusHandler.bind(this);
	}

	focusHandler() {
		this.setState({
			activated: true,
		});
	}

	render() {
		const { type, label, required, target } = this.props;
		const id = generateRandomString();
		return (
			<InputGroup>
				<FloatingLabel htmlFor={id} className={this.state.activated? 'active' : ''}>
					{label} {required && <span style={{ 'color': '#f00'}}>*</span>}
				</FloatingLabel>
				<InputField type={type}
							id={id}
							onFocus={this.focusHandler}
							required={required}
							onChange={e => this.props.changeHandler(target, e.target.value)} />
			</InputGroup>
		);
	}
}
