<?php

namespace App\Controllers\Hooks;

defined('ABSPATH') || exit(0);

abstract class Hook
{
	/**
	 * @return string The hookname to apply the Action to
	 */
	abstract public function hook();

	public function priority(): int
	{
		return 10;
	}

	public function parameterCount(): int
	{
		return 1;
	}
}
