<?php

namespace App\Helpers;

class Number
{
	private static ?\App\Helpers\Number $_instance = null;

	public \NumberFormatter $currencyFormatter;

	private function __construct() {
		$this->currencyFormatter = new \NumberFormatter('nl_NL', \NumberFormatter::CURRENCY);
	}

	private static function bootstrap(): \App\Helpers\Number {
		if (null === static::$_instance) {
			static::$_instance = new static;
		}

		return static::$_instance;
	}

	/**
	 * @param int|float|string $number
	 */
	public static function formatAsCurrency( $number )
	{
		static::bootstrap()->currencyFormatter->setAttribute(\NumberFormatter::MAX_FRACTION_DIGITS, 2);
		static::bootstrap()->currencyFormatter->setAttribute(\NumberFormatter::MIN_FRACTION_DIGITS, 2);
		if (is_string($number)) {
			$number = self::convertToFloat($number);
		}

		return static::bootstrap()->currencyFormatter->format($number);
	}

	private static function convertToFloat(string $number): float {
		if (Str::contains($number, ',')) {
			$number = str_replace(',', '.', $number);
		}


		return (float) $number;
	}
}
