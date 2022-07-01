<?php
/**
 * @global WC_Checkout $checkout
 */

use Timber\Timber;
use App\Helpers\Template;

defined('ABSPATH') || exit(0);

$context = Timber::get_context();
$context['checkout'] = $checkout;
$context['cart'] = WC()->cart;
$context['shipping_checked'] = checked(apply_filters('woocommerce_ship_to_different_address_checked', 'shipping' === get_option('woocommerce_ship_to_destination') ? 1 : 0), 1);
$context['notes_enabled'] = apply_filters('woocommerce_enable_order_notes_field', 'yes' === get_option('woocommerce_enable_order_comments', 'yes'));

$templates = [
    Template::partialHtmlTwigFile('woocommerce/checkout/shipping-form'),
];

return Timber::render(
    apply_filters('bookish/view-composer/shipping-checkout/templates', $templates),
    apply_filters('bookish/view-composer/shipping-checkout/context', $context),
    apply_filters('bookish/view-composer/shipping-checkout/cache', [false, false])
);
