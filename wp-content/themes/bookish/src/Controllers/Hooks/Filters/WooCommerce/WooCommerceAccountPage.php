<?php


namespace App\Controllers\Hooks\Filters\WooCommerce;


use App\Controllers\Hooks\Filters\Filter;

class WooCommerceAccountPage extends Filter
{
    public function filter($menu_links = [])
    {
        $logout = $menu_links['customer-logout'];
        unset($menu_links['customer-logout']);

        $menu_links['wishlist'] = 'Wishlist';
        $menu_links['customer-logout'] = $logout;

        return $menu_links;
    }

    public function hook()
    {
        return 'woocommerce_account_menu_items';
    }

}