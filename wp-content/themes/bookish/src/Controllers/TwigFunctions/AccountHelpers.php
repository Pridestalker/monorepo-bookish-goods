<?php

namespace App\Controllers\TwigFunctions;

class AccountHelpers {
	public static function isLoggedIn() {
		return is_user_logged_in();
	}

	public static function getUser() {
		if (static::isLoggedIn()) {
			return wp_get_current_user();
		}

		return false;
	}
}
