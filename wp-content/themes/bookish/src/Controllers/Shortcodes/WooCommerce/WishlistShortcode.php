<?php

namespace App\Controllers\Shortcodes\WooCommerce;

use App\Controllers\Shortcodes\Shortcode;
use App\Helpers\Template;
use Timber\Timber;

class WishlistShortcode implements Shortcode
{
    public function tag(): string
    {
        return 'user-wishlist';
    }

    public function shortcode($args)
    {
        $args = shortcode_atts(
            [],
            $args,
            $this->tag()
        );

        $user = $_GET['user_id']?? null;

        $context = Timber::get_context();
        $context['favorites_count'] = \get_user_favorites_count($user);
        $context['favorites'] = [
            'products' => \get_user_favorites($user),
        ];

        $templates = [
            Template::partialHtmlTwigFile('woocommerce/account/favorites')
        ];

        return Timber::compile($templates, $context);
    }

}