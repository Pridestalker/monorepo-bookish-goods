<?php

namespace App\Helpers;

defined('ABSPATH') || exit(0);

class Terms
{
    protected static $term_name_cache = [];

    public static function getTermNameOnId(int $term, string $tax = '')
    {
        if (isset(static::$term_name_cache[$term])) {
            return static::$term_name_cache[$term];
        }

        return static::$term_name_cache[$term] = get_term_field('name', $term, $tax);
    }
}
