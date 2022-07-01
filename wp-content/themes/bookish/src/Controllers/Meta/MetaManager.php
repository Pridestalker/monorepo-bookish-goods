<?php

namespace App\Controllers\Meta;

use App\Bootstrap\Container;

class MetaManager
{
	public const T_POST_PRODUCT = 'product';

	public static function load(string $class)
	{
		/** @var Meta $class */
		$class = Container::get($class);

		do_action('bookish/meta/register/'.(new \ReflectionClass($class))->getShortName());

		add_action('carbon_fields_register_fields', [ $class, 'register' ]);
	}
}
