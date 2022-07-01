<?php

/**
 * Plugin Name: Add PayPal surcharge
 * Description: Add a surcharge when PayPal is used.
 * Version: 1.0.0
 */

/**
 * Add a 3% surcharge to your cart / checkout when PayPal is checked as payment method.
 */
function mh_paypal_surcharge()
{
    if (!defined('DOING_AJAX') && is_admin()) {
        return;
    }

    [$cart, $session] = [WC()->cart, WC()->session];

    if ($cart === null || $session === null) {
        return;
    }

    if ($session->get('chosen_payment_method') !== 'paypal') {
        return;
    }

    $percentage = 0.03;
    $surcharge = ( $cart->get_cart_contents_total() + $cart->get_shipping_total() ) * $percentage;
    $cart->add_fee('Paypal +3%', $surcharge, true, '');
}

add_action('woocommerce_cart_calculate_fees', 'mh_paypal_surcharge');
