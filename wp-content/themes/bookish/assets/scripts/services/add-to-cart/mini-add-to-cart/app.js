import React, {Component, h, render} from 'preact';
import ky from 'ky';
import {registerToast} from '../../notifications';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/pro-duotone-svg-icons';
import PropTypes from 'prop-types';
import {fireEvent} from '@elderbraum/simple-event-bus'
import StyledButton from '../../lib/styled/button'
import {ThemeProvider} from "styled-components";

const theme = {
    width: '100%',
}

const buttonElements = document.querySelectorAll('.pre-add-to-cart-mini');

export class AddToCart extends Component {
    constructor(props) {
        super(props);

        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(e) {
        e.preventDefault();
        const {id} = this.props;

        ky.post(window['ajax_url'], {
            searchParams: {
                action: 'add_product_to_cart',
            },
            json: {
                action: 'add_product_to_cart',
                product_id: id,
                qty: 1,
            },
            credentials: 'same-origin',
        })
            .then(res => res.json())
            .then(res => fireEvent('product-added-to-cart', res?.data || []))
            .then(() => registerToast({
                slug: `add_product_to_cart-${new Date().getTime()}`,
                content: `Product toegevoegd aan je winkelmandje`,
            }))
            .catch(() => {
                registerToast({
                    slug: `add_product_not_to_cart-${new Date().getTime()}`,
                    content: `Product niet toegevoegd aan je winkelmandje`,
                });
            })
            .finally(() => {
                // Set loading state here.
            })
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <form onSubmit={this.submitHandler} style={{display: 'flex', justifyContent: 'center'}}>
                    <StyledButton>
                        <FontAwesomeIcon icon={faShoppingCart} className={'mr-2'}/>
                        In winkelmandje
                    </StyledButton>
                </form>
            </ThemeProvider>
        )
    }
}

AddToCart.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.string.isRequired]),
}

export function renderMiniAddToCart() {
    if (buttonElements.length === 0) {
        return;
    }

    buttonElements.forEach(element => render(<AddToCart id={element.dataset.product}/>, element));
}
