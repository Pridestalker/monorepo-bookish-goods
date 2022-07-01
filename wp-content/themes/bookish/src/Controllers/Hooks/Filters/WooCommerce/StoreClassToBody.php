<?php

namespace App\Controllers\Hooks\Filters\WooCommerce;

defined('ABSPATH') || exit(0);

use App\Controllers\Hooks\Filters\Filter;

class StoreClassToBody extends Filter
{
	public function filter($classes = [])
	{
		if (\is_shop() || \is_product_category()) {
			$classes[] = 'woo-store';
		}

		return $classes;
	}

	public function hook()
	{
		return 'body_class';
	}
}
