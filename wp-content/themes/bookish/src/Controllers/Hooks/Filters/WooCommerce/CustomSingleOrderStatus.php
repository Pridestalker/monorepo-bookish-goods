<?php

namespace App\Controllers\Hooks\Filters\WooCommerce;

defined('ABSPATH') || exit(0);

use App\Controllers\Hooks\Filters\Filter;

class CustomSingleOrderStatus extends Filter
{
    public function filter($order_statuses = [])
    {
        $order_statuses['wc-payment-received'] = _x('Payment received', 'Order status', 'woocommerce');

        return $order_statuses;
    }

    public function hook()
    {
        return 'wc_order_statuses';
    }

    public function priority(): int
    {
        return 20;
    }
}
