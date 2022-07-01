import React, { Component, h } from 'preact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusHexagon, faSpinner } from '@fortawesome/pro-duotone-svg-icons';
import { StyledButton } from '../../../lib/styled/button';
import { ThemeProvider } from 'styled-components';

const theme = {
	background: 'green',
	width: '100%',
}

export class SubmitButton extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<StyledButton type='submit' disabled={this.props.loading} >
					<FontAwesomeIcon icon={this.props.loading? faSpinner: faPlusHexagon} spin={this.props.loading}/>
					<span style={{ 'margin-left': '.5rem' }}>
						{ this.props.loading?
							'Aan het toevoegen':
							'Toevoegen aan winkelmand' }
					</span>
				</StyledButton>
			</ThemeProvider>
		)
	}
}
