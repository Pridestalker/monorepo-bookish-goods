import React, {Component, render, h} from 'preact';
import ky from 'ky';
import {SubmitButton} from '../';
import {VariableSelect} from './Components/VariableSelect'
import getWindowAttributes from '../../../src/Woocommerce/Single/helpers/getWindowAttributes'
import {registerToast} from '../../notifications'
import {faTimes} from '@fortawesome/pro-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const formElement = document.querySelector('#add-variable-product-to-cart');

export class AddToCart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            productID: window['product_id'],
            quantity: 1,
            minQuantity: window['product_settings'].qty.min,
            maxQuantity: window['product_settings'].qty.max,
            loading: false,
            variationID: false,
            value: [],
        }

        this.editQuantity = this.editQuantity.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.changeVariation = this.changeVariation.bind(this);

        this.variations = variations;
        this.attributes = getWindowAttributes();
    }

    addToCart(e) {
        e.preventDefault();
        if (!this.state.variationID) {
            // Send toast notification?
            // Only if no variation selected
            return;
        }

        this.setState({loading: true});

        ky.post(window['ajax_url'], {
            searchParams: {
                action: 'add_product_to_cart',
            },
            json: {
                action: 'add_product_to_cart',
                product_id: this.state.productID,
                qty: this.state.quantity,
                variation_id: this.state.variationID,
                value: this.state.value,
            },
            credentials: 'same-origin'
        })
            .then(res => res.json())
            .then(res => document.body.dispatchEvent(new CustomEvent('product-added-to-cart', {detail: res?.data || []})))
            .finally(() => {
                registerToast({
                    slug: `add_product_to_cart-${new Date().getTime()}`,
                    content: `Product toegevoegd aan je winkelmandje!`,
                    actionText: <FontAwesomeIcon icon={faTimes}/>
                })
                this.setState({loading: false})
            });
    }

    changeVariation(e) {
        // Show a notification of selection?
        const {value, dataset} = e.target;
        const {attribute_name} = dataset;

        const possibilities = this.attributes
            .filter(attribute => attribute.attributes.hasOwnProperty(attribute_name))
            .filter(attribute => attribute.attributes[attribute_name] === '' ? true : attribute.attributes[attribute_name] === value)

		console.dir({
			value, dataset, attribute_name, possibilities
		})

        if (possibilities.length === 1) {
            this.setState({
                variationID: possibilities[0].id,
                loading: false,
                value: [value],
            });
        } else {
            this.setState({
                variationID: false,
                loading: false,
                value: []
            });
        }
    }

    editQuantity(newQuantity) {
        this.setState({
            quantity: newQuantity
        })
    }

    reduceHandler() {
        const {minQuantity, quantity} = this.state;
        if (this.state.quantity > minQuantity) {
            this.setState({
                quantity: quantity - 1
            });
        }
    }

    increaseHandler() {
        this.setState({
            quantity: quantity + 1
        });
    }

    render() {
        const selects = [];

        for (const key in this.variations) {
            if (this.variations.hasOwnProperty(key)) {
                selects.push(<VariableSelect
                    options={this.variations[key]} key={key}
                    changeHandler={this.changeVariation}
                    selectName={key}/>)
            }
        }

        return (
            <form onSubmit={this.addToCart}>
                <input
                    type='number'
                    name='quantity'
                    value={this.state.quantity}
                    className={'w-64'}
                    onChange={(e) => this.editQuantity(e.target.value)}
                />
                {/*<QuantityInput*/}
                {/*	changeHandler={this.editQuantity}*/}
                {/*	quantity={this.state.quantity}*/}
                {/*	reduceHandler={this.reduceHandler}*/}
                {/*	increaseHandler={this.increaseHandler} />*/}
                {selects}
                <SubmitButton productID={this.state.productID} loading={this.state.loading}/>
            </form>
        )
    }
}

export function renderVariableAddToCart() {
    if (formElement) {
        render(<AddToCart/>, formElement);
    }
}
