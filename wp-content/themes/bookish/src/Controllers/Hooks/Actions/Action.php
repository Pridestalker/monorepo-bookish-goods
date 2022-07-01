<?php

namespace App\Controllers\Hooks\Actions;

defined('ABSPATH') || exit(0);

use App\Controllers\Hooks\Hook;

abstract class Action extends Hook
{
	abstract public function action();
}
