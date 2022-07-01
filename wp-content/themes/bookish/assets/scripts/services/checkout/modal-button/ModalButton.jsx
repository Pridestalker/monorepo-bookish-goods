import {fireEvent} from "@elderbraum/simple-event-bus";
import {Button as MatButton} from "@material-ui/core";
import React, {h} from "preact";
import {EVENTS} from ".";
import PropTypes from 'prop-types';
import {defaultTheme, ThemeProvider} from "../../../theme";

export const Button = (props) => {
    function handleButtonClick() {
        fireEvent(EVENTS.POSTCODE_FILLER.OPEN, {isShipping: props.isShipping});
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <MatButton color={'primary'}
                       className={'block'}
                       id={props.isShipping ? 'autofill_from_postcode_shipping' : 'autofill_from_postcode_billing'}
                       onClick={handleButtonClick}>
                Adres laten invoeren
            </MatButton>
        </ThemeProvider>
    )
}

Button.propTypes = {
    isShipping: PropTypes.bool,
}
