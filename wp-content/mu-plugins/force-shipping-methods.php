<?php
/**
 * Plugin Name: Force Shipping Method
 * Description: Force certain kinds of shipment methods based on some variables
 * Version: 1.0.0
 */

// add_filter('woocommerce_package_rates', 'mh_tiered_shipping', 10000);

/**
 * @param array $rates
 *
 * @return mixed
 */
function mh_tiered_shipping(array $rates)
{
    /**
     * @var \WC_Cart $cart
     */
    $cart = WC()->cart;

    // Skip anything when you do not need to calculate anything
    if (count($rates) === 1) {
        return $rates;
    }

    /*
     * Only show free shipping when it is available.
     * Let WooCommerce decide when it's time for it.
     */
    $free = [];
    foreach ($rates as $rate_id => $rate) {
        if ($rate->method_id === 'free_shipping') {
            $free[$rate_id] = $rate;
            break; # You only need to remove this one break if there ever will be more than one way to ship freely.
        }
    }

    if (count($free) >= 1) {
        return $free;
    }

    $volume = 0;
    $total_height = 0;
    $rate = 0;
    $dimension_unit = get_option( 'woocommerce_dimension_unit' );

    if ( $dimension_unit === 'mm' ) {
        $rate = 1;
    } elseif ( $dimension_unit === 'cm' ) {
        $rate = pow(10, 3);
    } elseif ( $dimension_unit === 'm' ) {
        $rate = pow(10, 9);
    }

    $contents = $cart->get_cart_contents();

    foreach($contents as $product) {
        $amount = $product['quantity'];
        /** @var WC_Product $product_data */
        $product_data = $product['data'];

        $length = (int) $product_data->get_length();
        $width = (int) $product_data->get_width();
        $height = (int) $product_data->get_height();

        $volume += $length * $width * $height * $amount;
        $total_height += $height * $amount;
    }

    $volume = $volume * $rate;

    if ($volume >= 3222400 || $total_height >= 32) {
        foreach ($rates as $rate_id => $rate) {
            if ($rate->label !== 'Pakketpost') {
                unset($rates[$rate_id]);
            }
        }

        return $rates;
    }

    foreach ($rates as $rate_id => $rate) {
        if ($rate->label !== 'Brievenbus pakket') {
            unset($rates[$rate_id]);
        }

        return $rates;
    }

    return $rates;
}
