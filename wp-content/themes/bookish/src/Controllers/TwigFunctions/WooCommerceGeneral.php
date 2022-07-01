<?php

namespace App\Controllers\TwigFunctions;

defined('ABSPATH') || exit(0);

class WooCommerceGeneral
{
    protected static $url_cache = [];

    /**
     * Gets the current shop page
     *
     * @return string
     */
    public static function getShopUrl(): string
    {
        return static::getUrl('shop');
    }

    public static function getCartUrl(): string
    {
        return static::getUrl('cart');
    }

    public static function getUrl(string $page): string
    {
        if (isset(static::$url_cache[$page])) {
            return static::$url_cache[$page];
        }

        return static::$url_cache[$page] = get_permalink(wc_get_page_id($page));
    }

    public static function getFavoritesUrl(): string
    {
    	return static::getUrl('myaccount') . 'wishlist';
    }
}
