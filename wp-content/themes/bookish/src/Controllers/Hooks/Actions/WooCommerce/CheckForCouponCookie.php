<?php

namespace App\Controllers\Hooks\Actions\WooCommerce;

defined('ABSPATH') || exit(0);

use App\Helpers\Cookie;
use App\Controllers\Hooks\Actions\Action;

class CheckForCouponCookie extends Action
{
	public const COOKIE_NAME = 'promo_code';

	public function action()
	{
		if (!isset($_GET[static::COOKIE_NAME])) {
			return;
		}

		$code = $_GET[static::COOKIE_NAME];

		if (Cookie::has(static::COOKIE_NAME) && Cookie::get(static::COOKIE_NAME) === $code) {
			return;
		}

		Cookie::set(
			static::COOKIE_NAME,
			$code,
			false
		);
	}

	public function hook ()
	{
		return 'init';
	}
}
