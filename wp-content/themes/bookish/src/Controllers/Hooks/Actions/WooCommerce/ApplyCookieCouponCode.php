<?php

namespace App\Controllers\Hooks\Actions\WooCommerce;

defined('ABSPATH') || exit(0);

use App\Helpers\Cookie;
use App\Controllers\Hooks\Actions\Action;

class ApplyCookieCouponCode extends Action
{

	public function action()
	{
		if (!Cookie::has(CheckForCouponCookie::COOKIE_NAME)) {
			return;
		}

		$cart = WC()->cart;
		$cart->apply_coupon(Cookie::get(CheckForCouponCookie::COOKIE_NAME));
	}

	public function hook()
	{
		return 'bookish/view-composer/order-cart/init';
	}
}
