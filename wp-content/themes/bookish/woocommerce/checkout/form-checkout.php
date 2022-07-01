<?php
/**
 * @version 3.5.0
 * @var WC_Checkout $checkout
 */

use Timber\Timber;
use App\Helpers\Template;

defined('ABSPATH') || exit(0);

$context = Timber::get_context();
$context['checkout'] = $checkout;
$context['cart_url'] = esc_url(wc_get_checkout_url());

$templates = [
    Template::partialHtmlTwigFile('woocommerce/checkout/form-container')
];

return Timber::render(
    apply_filters('bookish/view-composer/form-checkout/templates', $templates),
    apply_filters('bookish/view-composer/form-checkout/context', $context),
    apply_filters('bookish/view-composer/form-checkout/cache', [false, false])
);

