<?php
/**
 * @var boolean $hidden
 * @var string $redirect
 * @var mixed $message
 */

use Timber\Timber;
use App\Helpers\Template;

defined('ABSPATH') || exit(0);

if (is_user_logged_in()) {
    return;
}

$context = Timber::get_context();
$context['hidden'] = $hidden;
$context['redirect'] = $redirect;
$context['message'] = $message;
$context['lost_pw_url'] = wp_lostpassword_url();
$context['nonce'] = wp_nonce_field('woocommerce-login', 'woocommerce-login-nonce', true, false);

$templates = [
    Template::partialHtmlTwigFile('woocommerce/global/login'),
];

return Timber::render(
    apply_filters('bookish/view-composer/global-login/context', $templates),
    apply_filters('bookish/view-composer/global-login/context', $context),
    apply_filters('bookish/view-composer/global-login/context', false)
);
