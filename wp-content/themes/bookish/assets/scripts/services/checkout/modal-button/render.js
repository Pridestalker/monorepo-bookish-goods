import React, { render, h } from "preact";
import {Button} from '.';
import {EVENTS} from '../../../src/Woocommerce/Checkout';
import {listenEvent} from "@elderbraum/simple-event-bus";

export const insertModalButton = () => {
    const target = document.getElementById('billing_address_1_field');
    const shippingTarget = document.getElementById('shipping_address_1_field');
    if (!target) {
        return;
    }

    render(<Button isShipping={false} />, target);
    if (shippingTarget) {
        render(<Button isShipping={true} />, shippingTarget);
    }

    const billingButton = document.getElementById('autofill_from_postcode_billing')
    hideFieldIfNotNL(billingButton, document.getElementById('billing_country').value);
    listenEvent(EVENTS.CHANGE_COUNTRY.BILLING, ({detail}) => {
        hideFieldIfNotNL(billingButton, detail);
    });

    if (shippingTarget) {
        const shippingButton = document.getElementById('autofill_from_postcode_shipping');
        hideFieldIfNotNL(shippingButton, document.getElementById('shipping_country').value);
        listenEvent(EVENTS.CHANGE_COUNTRY.SHIPPING, ({detail}) => {
            hideFieldIfNotNL(shippingButton, detail);
        });
    }
}

const hideFieldIfNotNL = (field, country) => {
    if (country === 'NL') {
        field.style.display = '';
    } else {
        field.style.display = 'none';
    }
}
