<?php


namespace App\Controllers\Hooks\Filters\WooCommerce;


use App\Controllers\Hooks\Filters\Filter;

class HideKlarnaForPreOrders extends Filter
{
    public function filter($gateways = [])
    {
        if (is_admin()) {
            return $gateways;
        }

        foreach (WC()->cart->get_cart() as $cart_item) {
            $product = wc_get_product($cart_item['product_id']);


            if ($product->get_stock_status() === 'preorder') {
                unset($gateways['mollie_wc_gateway_klarnapaylater']);
            }
        }

        return $gateways;
    }

    public function hook()
    {
        return 'woocommerce_available_payment_gateways';
    }

}
