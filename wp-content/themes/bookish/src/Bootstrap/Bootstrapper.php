<?php

namespace App\Bootstrap;

defined('ABSPATH') || exit(0);

interface Bootstrapper
{
    public static function bootstrap();
}
