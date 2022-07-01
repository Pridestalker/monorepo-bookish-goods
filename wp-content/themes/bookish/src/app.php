<?php

namespace App;

defined('ABSPATH') || exit(0);

use App\Bootstrap\Container;
use App\Providers\AppServiceProvider;
use App\Bootstrap\Env;

Container::get(Env::class);
Container::get(AppServiceProvider::class);
