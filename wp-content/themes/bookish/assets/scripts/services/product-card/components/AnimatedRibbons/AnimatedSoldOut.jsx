import React, { Component, h } from 'preact';
import { Motion, spring } from 'react-motion'

export class AnimatedSoldOut extends Component {
	render() {
		return (
			<Motion
				defaultStyle={{ x: 100, o: 0 }}
				style={{ x: spring(0), o: spring(1) }}
			>
				{({ x, o }) => <p style={{
					WebkitTransform: `translate3d(${x}px, 0, 0)`,
					transform: `translate3d(${x}px, 0, 0)`,
					opacity: o
				}}>Uitverkocht</p>}
			</Motion>
		)
	}
}
