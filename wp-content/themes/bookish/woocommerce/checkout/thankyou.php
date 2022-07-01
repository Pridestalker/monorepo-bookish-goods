<?php
/**
 * Is a partial template. No need to extends base layout.
 * @var WC_Order $order
 */


use Timber\Timber;
use App\Helpers\Template;

defined('ABSPATH') || exit(0);

$order->update_status('processing');
$context = Timber::get_context();
$context['order'] = $order;

$templates = [
    Template::partialHtmlTwigFile('woocommerce/order/thankyou')
];

Timber::render(
    apply_filters('bookish/view-composer/order-thankyou/templates', $templates),
    apply_filters('bookish/view-composer/order-thankyou/context', $context),
    apply_filters('bookish/view-composer/order-thankyou/cache', [ false, false ])
);
