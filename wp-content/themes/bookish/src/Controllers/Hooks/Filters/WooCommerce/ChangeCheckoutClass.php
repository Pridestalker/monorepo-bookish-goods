<?php

namespace App\Controllers\Hooks\Filters\WooCommerce;

defined('ABSPATH') || exit(0);

use App\Controllers\Hooks\Filters\Filter;

class ChangeCheckoutClass extends Filter
{
	public function hook ()
	{
		return 'woocommerce_checkout_fields';
	}

	public function filter($fields = [])
    {
//        $fields['billing']['billing_country']['input_class'][] = implode(',', [
//            'block',
//            'appearance-none',
//            'w-full',
//            'bg-white',
//            'border',
//            'border-gray-400',
//            'hover:border-gray-500',
//            'px-4',
//            'py-2',
//            'pr-8',
//            'rounded',
//            'shadow',
//            'leading-tight',
//            'focus:outline-none',
//            'focus:shadow-outline',
//        ]);

        return $fields;
    }
}
