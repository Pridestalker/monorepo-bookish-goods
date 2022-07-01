import React, { Component, h, Fragment, createRef } from 'preact';
import PropTypes from 'prop-types';
import { AnimatedSaleBanner, AnimatedSoldOut, AnimatedPreOrderBanner, NewProductRibbon } from './components/AnimatedRibbons';
import { woocommerce } from '../../helpers';
import { AddToCart } from '../add-to-cart/mini-add-to-cart/app'
import { Thumbnail } from './components/Thumbnail'

export class Product extends Component {
	card = createRef();
	/**
	 *
	 * @type {IntersectionObserver} io
	 */
	io = null;
	constructor(props) {
		super(props);

		this.thumbnail = JSON.parse(this.props.thumbnail);

		this.state = {
			inView: false,
		}

		this.renderPrice = this.renderPrice.bind(this);
		this.renderPreOrderBanner = this.renderPreOrderBanner.bind(this);
		this.renderSaleBanner = this.renderSaleBanner.bind(this);
	}

	renderPrice() {
		const { onsale, saleprice, price } = this.props;

		let printablePrice = new woocommerce.priceStringBuilder(price).set_euro_separators().strip_euro_sign().toString();

		if (!!onsale) {
			let printableSalePrice = new woocommerce.priceStringBuilder(saleprice).set_euro_separators().strip_euro_sign().toString();

			return (<Fragment>&euro; <span style='text-decoration: line-through;'>{printablePrice}</span> {printableSalePrice}</Fragment>);
		}

		return <span>&euro; {printablePrice}</span>
	}

	renderNewProductBanner() {
		if (!this.props.is_new) {
			return '';
		}
		if (['outofstock', 'preorder', 'onbackorder'].includes(this.props.stock_status)) {
			return '';
		}

		if (!this.state.inView || this.props.onsale) {
			return '';
		}

		return <NewProductRibbon />
	}

	renderPreOrderBanner() {
		if (this.props.stock_status !== 'preorder') {
			return ' ';
		}

		if (!this.state.inView) {
			return '';
		}

		return <AnimatedPreOrderBanner />
	}

	renderSaleBanner() {
		if (this.props.stock_status === 'preorder' || !this.props.onsale) {
			return ' ';
		}

		if (!this.state.inView) {
			return '';
		}

		return <AnimatedSaleBanner />
	}

	componentDidMount() {
		this.io = new IntersectionObserver(([entry], ob) => {
			if (entry.isIntersecting) {
				this.setState({
					inView: true,
				});

				ob.unobserve(entry.target);
			}
		}, {
			root: null,
			rootMargin: '0px',
			threshold: 0
		});

		try {
			this.io.observe(this.card.current);
		} catch {}
	}

	componentWillUnmount() {
		this.io.disconnect();
	}

	render() {
		return (
			<Fragment>
				{this.renderSaleBanner()}

				{this.renderPreOrderBanner()}
				{this.renderNewProductBanner()}
				<Thumbnail link={this.props.link}
						   title={this.props.title}
						   thumbnail={this.props.thumbnail}
						   outofstock={this.props.stock_status === 'outofstock'} />
				<main className="card-content">
					<a href={this.props.link}>
						<h2 className="is-h3"  ref={this.card}>{this.props.title}</h2>
					</a>
					<p className="product-card--categories mb-2" dangerouslySetInnerHTML={{__html: this.props.categories}} />
					<p className="product-card--price">
						{this.renderPrice()}
					</p>
					{!this.props.instock && <AnimatedSoldOut />}
					{this.props.instock && <AddToCart id={this.props.id} />}
				</main>
			</Fragment>
		)
	}
}

Product.propTypes = {
	thumbnail: PropTypes.oneOfType([
		PropTypes.exact({
			webp: PropTypes.string,
			thumbnail: PropTypes.string.isRequired
		}),
		PropTypes.string,
	]),
	title: PropTypes.string.isRequired,
	categories: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	instock: PropTypes.oneOf(['1', '']),
	onsale: PropTypes.oneOf(['1', '']),
	saleprice: PropTypes.string,
	stock_status: PropTypes.oneOf(['instock', 'outofstock', 'preorder', 'onbackorder']),
	is_new: PropTypes.oneOf(['1', '']),

	id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}
