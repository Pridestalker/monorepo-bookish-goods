import React, { Component, render, h } from 'preact';
import styled from 'styled-components';

import { Toast } from './Toast';

const ToastWrapperElement = styled.aside`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	pointer-events: none;
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	padding: 1rem;
	overflow: hidden;
	flex-direction: column;
`

export class ToastWrapper extends Component {
	constructor() {
		super();

		this.state = {
			toastList: []
		}

		this.findToasts = this.findToasts.bind(this);
		this.createNewToast = this.createNewToast.bind(this);
		this.removeToast = this.removeToast.bind(this);

		this.findToasts();

	}

	findToasts() {
		document.body.addEventListener('register-toast', evt => {
			const {
				slug,
				time,
				content,
				color,
				actionText
			} = evt.detail;

			this.createNewToast(slug, content, color, time, actionText);
		})
	}

	removeToast(slug) {
		const { toastList } = this.state;

		this.setState({toastList: toastList.filter(toast => toast.slug !== slug)});
	}

	createNewToast(slug, content, color = 'primary', time = 5000, actionText = 'Close') {
		const { toastList } = this.state;
		toastList.push({
			slug,
			item: <Toast
				content={content}
				color={color}
				time={time}
				actionText={actionText}
				action={this.removeToast}
				slug={slug}
			/>
		});

		const [...rest] = toastList;

		if (time && typeof time === 'number') {
			setTimeout(() => {
				this.removeToast(slug);
			}, time);
		}

		this.setState({toastList: rest.slice(-5)});
	}

	render() {
		return (
			<ToastWrapperElement>
				{(this.state.toastList || []).map(item => item.item)}
			</ToastWrapperElement>
		)
	}
}


export function enableToasts() {
	const toastContainer = document.querySelector('#toast-container');

	if (toastContainer) {
		render(<ToastWrapper />, toastContainer);
	}
}

export function registerToast({ slug, time, content, color, actionText }) {
	document.body.dispatchEvent(new CustomEvent('register-toast', { detail: { slug, time, content, color, actionText }}));
}
