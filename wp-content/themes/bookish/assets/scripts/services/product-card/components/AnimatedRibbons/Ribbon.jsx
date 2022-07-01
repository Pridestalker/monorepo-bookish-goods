import React, { Component, h } from 'preact';
import styled from 'styled-components';
import { Colors } from '../../../../config';
import { darken } from 'polished';
import { Motion, spring } from 'react-motion';

const HorizontalBannerWrapper = styled.div`
	position: absolute;
	top: -10px;
	right: 2rem;
	pointer-events: none;
	
	&:before {
		content: ' ';
		top: 0;
		left: 100%;
		display: block;
		position: absolute;
		border-style: solid;
		border-width: 5px;
		border-color: transparent transparent ${darken(.2, Colors.green)} ${darken(.2, Colors.green)};
	}
	
	filter: drop-shadow(-1px 6px 3px rgba(51, 51, 51, 1))
`;

const HorizontalBanner = styled.span`
	background: ${Colors.green};
	color: ${Colors.white};
	
	padding: 1rem .5rem;
	width: min-content;
	height: 11ch;
	
	text-transform: uppercase;
	text-align: center;
	display: block;

	clip-path: polygon(0 0, 0 100%, 50% 7ch, 100% 100%, 100% 0);
`;

export class HorizontalRibbon extends Component {
	render() {
		const { children } = this.props;
		return (
			<Motion defaultStyle={{ s: 0 }} style={{ s: spring(1, { stiffness: 90, damping: 9}) }}>
				{({ s }) => (
					<HorizontalBannerWrapper style={{
						transform: `scale(1, ${s})`,
						transformOrigin: 'top center',
					}}>
						<HorizontalBanner children={children} />
					</HorizontalBannerWrapper>
				)}
			</Motion>
		)
	}
}
