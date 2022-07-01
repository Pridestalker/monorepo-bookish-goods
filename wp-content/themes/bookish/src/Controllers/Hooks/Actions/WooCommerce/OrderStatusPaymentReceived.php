<?php

namespace App\Controllers\Hooks\Actions\WooCommerce;

defined('ABSPATH') || exit(0);

use App\Controllers\Hooks\Actions\Action;

class OrderStatusPaymentReceived extends Action
{
    public function hook()
    {
        return 'init';
    }

    public function action()
    {
        register_post_status(
            'wc-payment-received',
            [
                'label'                     => _x('Payment received', 'Order status', 'woocommerce'),
                'public'                    => true,
                'exclude_from_search'       => false,
                'show_in_admin_all_list'    => true,
                'show_in_admin_status_list' => true,
                'label_count'               => _n_noop('Payment received <span class="count">(%s)</span>', 'Payment received <span class="count">(%s)</span>', 'woocommerce')
            ]
        );
    }
}
