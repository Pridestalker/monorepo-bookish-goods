<?php

namespace App\Controllers\Hooks\Filters;

defined('ABSPATH') || exit(0);

use App\Controllers\Hooks\Hook;

abstract class Filter extends Hook
{
    abstract public function filter();
}
