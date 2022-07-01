import React, { Component, h, render } from 'preact';
import { Input } from './Components/Input';
import { registerToast } from '../notifications';
import ky from 'ky';
import styled from 'styled-components'
import { Colors } from '../../config'
import {ThemeProvider} from "../../theme";

const appElement = document.querySelector('#mailchimp-subscribe-app');

const SubmitButton = styled.button`
box-shadow: 0 3px 6px rgba(51, 51, 51, .2);
background: ${Colors.primary};
color: ${Colors.white};
border-radius: 4px;
padding: .5rem 1rem;

&[disabled] {
	background: ${Colors.gray};
}
`;

export class MailchimpSubscribe extends Component {
	constructor(props) {
		super(props);

		this.state = {
			first_name: null,
			last_name: null,
			email: null,
			loading: false,
		}

		this.submitHandler = this.submitHandler.bind(this);
		this.inputChange = this.inputChange.bind(this);
	}

	inputChange(key, value) {
		if (!this.state.hasOwnProperty(key)) {
			return;
		}

		this.setState({
			[key]: value
		});
	}

	submitHandler(e) {
		e.preventDefault();
		const { first_name, last_name, email } = this.state;
		const data$ = new FormData();

		if (!email) {
			registerToast({
				slug: `mc-no-email-${new Date().getTime()}`,
				content: 'Email is verplicht.'
			});
		}

		data$.set('email', email);
		if (first_name) {
			data$.set('first_name', first_name);
		}

		if (last_name) {
			data$.set('last_name', last_name);
		}

		this.setState({
			loading: true
		});

		ky.post(
			window['rest_url'] + 'bookish/v1/mailchimp',
			{
				body: data$
			}
		)
			.then(res => res.json())
			.then(res => {
				registerToast({
					slug: `mc-success-register-${new Date().getTime()}`,
					content: 'Je bent ingeschreven voor de nieuwsbrief!'
				});
			})
			.catch(err => registerToast({
				slug: `mc-email-exists-${new Date().getTime()}`,
				content: 'Je bent al ingeschreven voor de nieuwbrief!'
			}))
			.finally(() => this.setState({loading: false}));

	}

	render() {
		return (
			<form onSubmit={this.submitHandler}>
				<Input label={'Voornaam'}
					   required={true}
					   target={'first_name'}
					   changeHandler={this.inputChange}/>

				<Input label={'Achternaam'}
					   target={'last_name'}
					   changeHandler={this.inputChange} />

				<Input label={'E-mail'}
					   required={true}
					   type={'email'}
					   target={'email'}
					   changeHandler={this.inputChange} />

				<SubmitButton type={'submit'} disabled={this.state.loading}>
					Aanmelden
				</SubmitButton>
			</form>
		);
	}
}

export function enableMailchimpForm() {
	if (appElement) {
		render(<MailchimpSubscribe />, appElement);
	}
}
