<?php

namespace App\Controllers\Http\Ajax\v1\Shop;

defined('ABSPATH') || exit(0);

use App\Controllers\Resources\Api\Product;
use App\Controllers\Http\Ajax\AjaxController;

class AddItemToCart extends AjaxController
{
    public function isPrivate(): bool
    {
        return false;
    }

    public function actionName(): string
    {
        return 'add_product_to_cart';
    }

    public function hookName(): string
    {
        return 'addToCart';
    }

    public function addToCart()
    {
        $request = $this->getRequestWithJson();

        $productID = apply_filters('bookish/ajax/v1/shop/add-to-cart/product-id', $request->request->get('product_id', false));
        $quantity = apply_filters('bookish/ajax/v1/shop/add-to-cart/qty', $request->request->get('qty', 1), $productID);
        $variationID = apply_filters('bookish/ajax/v1/shop/add-to-cart/product-variation-id', $request->request->get('variation_id', 0));
        $value = apply_filters('bookish/ajax/v1/shop/add-to-cart/product-value', $request->request->get('value', []));
        $postStatus = get_post_status($productID);

        if ($postStatus !== 'publish') {
            wp_send_json_error([
                'error_code' => 'PRODUCT_NOT_PUBLIC',
                'message' => __('Dit product kan niet worden toegevoegd aan je winkelmandje.', 'bookish'),
                'post_status' => $postStatus,
            ], 403);
        }

        if (!$this->validate($productID, $quantity) || !WC()->cart->add_to_cart($productID, $quantity, $variationID, $value)) {
            wp_send_json_error([
                'error_code' => 'REQUEST_NOT_VALID',
                'message' => __('Het product is niet toegevoegd aan je mandje.', 'bookish')
            ], 500);
        }

        do_action('woocommerce_ajax_added_to_cart', $productID);

        wp_send_json_success([
            'message' => __('Product toegevoegd aan je winkelmandje!', 'bookish'),
            'product' => $productID,
            'quantity' => $quantity
        ]);
    }


    protected function validate($productID, $quantity)
    {
        return apply_filters('woocommerce_add_to_cart_validation', true, $productID, $quantity);
    }
}
