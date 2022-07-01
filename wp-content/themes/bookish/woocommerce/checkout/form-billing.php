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
$context['is_user_logged_in'] = is_user_logged_in();


$templates = [
    Template::partialHtmlTwigFile('woocommerce/checkout/billing-form'),
];

return Timber::render(
    apply_filters('bookish/view-composer/billing-checkout/templates', $templates),
    apply_filters('bookish/view-composer/billing-checkout/context', $context),
    apply_filters('bookish/view-composer/billing-checkout/cache', [false, false])
);
