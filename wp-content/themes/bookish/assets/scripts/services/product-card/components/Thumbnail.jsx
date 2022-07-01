import React, { Component, h } from 'preact';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Image = styled.img`
	${props => props.outofstock && css`
		filter: grayscale(1);
		position: relative;
		z-index: -1;
	`}
`

export class Thumbnail extends Component {
	constructor(props) {
		super(props);

		this.thumbnail = JSON.parse(props.thumbnail);
	}

	render() {
		return (
			<a href={this.props.link} title={`Bekijk ${this.props.title}`}>
				<picture>
					<source srcSet={this.thumbnail.webp} type={'image/webp'} />
					<Image src={this.thumbnail.thumbnail} loading={'lazy'} alt={`Productafbeelding ${this.props.title}`} outofstock={this.props.outofstock}/>
				</picture>
			</a>
		)
	}
}

Thumbnail.propTypes = {
	link: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	thumbnail: PropTypes.oneOfType([
		PropTypes.exact({
			webp: PropTypes.string,
			thumbnail: PropTypes.string.isRequired
		}),
		PropTypes.string,
	]),

	outofstock: PropTypes.bool
}
