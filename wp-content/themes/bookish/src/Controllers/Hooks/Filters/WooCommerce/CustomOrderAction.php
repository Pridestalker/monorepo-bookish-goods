<?php

namespace App\Controllers\Hooks\Filters\WooCommerce;

defined('ABSPATH') || exit(0);

use App\Controllers\Hooks\Filters\Filter;

class CustomOrderAction extends Filter
{
    public function hook()
    {
        return 'woocommerce_email_actions';
    }

    public function filter($actions = [])
    {
        $actions[] = 'woocommerce_order_status_wc-payment-received';
        return $actions;
    }

    public function priority(): int
    {
        return 20;
    }
}
