<?php
/**
 * @version 3.4.0
 */

use Timber\Timber;
use App\Helpers\Template;

defined('ABSPATH') || exit(0);

if (!function_exists('wc_terms_and_conditions_checkbox_enabled') && apply_filters('woocommerce_checkout_show_terms', true)) {
    return;
}

do_action('woocommerce_checkout_before_terms_and_conditions');

$context = Timber::get_context();
$context['enabled'] = wc_terms_and_conditions_checkbox_enabled();
$context['checked'] = apply_filters('woocommerce_terms_is_checked_default', isset($_POST['terms']));
$context['content_function'] = 'wc_terms_and_conditions_checkbox_text';

$templates = [
    Template::partialHtmlTwigFile('woocommerce/checkout/terms'),
];

Timber::render(
    apply_filters('bookish/view-composer/front-page/context', $templates),
    apply_filters('bookish/view-composer/front-page/context', $context),
    apply_filters('bookish/view-composer/front-page/context', false)
);

do_action('woocommerce_checkout_after_terms_and_conditions');
