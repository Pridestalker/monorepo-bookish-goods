<?php

use Timber\Timber;

defined('ABSPATH') || exit(0);

include_once __DIR__ . '/vendor/autoload.php';

add_theme_support('custom-logo');
add_theme_support('woocommerce');

\Carbon\Carbon::setLocale('nl');
setlocale(LC_TIME, 'nl');

Timber::$locations = [
    get_stylesheet_directory() . '/templates/',
];
