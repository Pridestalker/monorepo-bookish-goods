<?php

namespace App\Controllers\TwigFunctions;

defined('ABSPATH') || exit(0);

class AdminHelpers
{
    public static function isAdmin()
    {
        return current_user_can('editor') || current_user_can('administrator');
    }
}
