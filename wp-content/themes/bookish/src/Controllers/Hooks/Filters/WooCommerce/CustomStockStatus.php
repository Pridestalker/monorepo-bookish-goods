<?php

namespace App\Controllers\Hooks\Filters\WooCommerce;

use App\Controllers\Hooks\Filters\Filter;

class CustomStockStatus extends Filter
{
    public function filter($status = [])
    {
        $status ['preorder'] = 'Pre order';

        return $status;
    }

    public function hook()
    {
        return 'woocommerce_product_stock_status_options';
    }

}
