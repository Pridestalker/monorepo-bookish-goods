import styled, { withTheme } from 'styled-components';
import { getThemeColor } from '../../../config';

const Button = styled.button`
	border: 1px solid ${props => getThemeColor(props.theme.background, props.defaults.background)};
	background: ${props => getThemeColor(props.theme.background, props.defaults.background)};
	color: ${props => getThemeColor(props.theme.color, props.defaults.color)};
	padding: .75rem 1rem;
	margin: 1rem 0;
	display: block;
	border-radius: ${props => props.theme.borderRadius?? props.defaults.borderRadius};
	width: ${props => props.theme.width?? props.defaults.width};
`;

Button.defaultProps = {
	theme: {
		background: 'primary',
		color: 'white',
		borderRadius: '8px',
		width: 'auto',
	},
	defaults: {
		background: 'primary',
		color: 'white',
		borderRadius: '8px',
		width: 'auto',
	}
}

export const StyledButton = withTheme(Button);
export default StyledButton;
