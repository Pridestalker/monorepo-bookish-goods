import {listenEvent} from "@elderbraum/simple-event-bus";
import {EVENTS} from "../modal-button";

export const addListenToAddressFillRequest = () => {
    listenEvent(EVENTS.POSTCODE_FILLER.HAS_BEEN_FOUND, listenToAddressFillRequest)
}

const listenToAddressFillRequest = ({detail}) => {
    const { city, number, postcode, street, isShipping} = detail;

    let addressInput, postcodeInput, cityInput;

    if (isShipping) {
        addressInput = document.getElementById('shipping_address_1');
        postcodeInput = document.getElementById('shipping_postcode');
        cityInput = document.getElementById('shipping_city');
    } else {
        addressInput = document.getElementById('billing_address_1');
        postcodeInput = document.getElementById('billing_postcode');
        cityInput = document.getElementById('billing_city');
    }

    addressInput.value = `${street} ${number}`;

    postcodeInput.value = postcode;
    postcodeInput.setAttribute('readonly', 'true');

    cityInput.value = city;
    cityInput.setAttribute('readonly', 'true')
}
