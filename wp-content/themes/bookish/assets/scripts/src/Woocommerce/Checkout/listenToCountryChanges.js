import {fireEvent} from "@elderbraum/simple-event-bus";

export const EVENTS = {
    CHANGE_COUNTRY: {
        BILLING: 'checkout-change-billing-country',
        SHIPPING: 'checkout-change-shipping-country',
    }
}

export const addSelectChangeListeners = () => {
    const billingSelect = document.getElementById('billing_country');
    const shippingSelect = document.getElementById('shipping_country');
    if (billingSelect) {
        billingSelect.addEventListener('input', e => {
            fireEvent(EVENTS.CHANGE_COUNTRY.BILLING, e.target.value);
        });
    }

    if (shippingSelect) {
        shippingSelect.addEventListener('input', e => {
            fireEvent(EVENTS.CHANGE_COUNTRY.SHIPPING, e.target.value);
        })
    }
}
