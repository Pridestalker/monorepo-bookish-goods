<?php

namespace App\Controllers\Shortcodes;

interface Shortcode
{
    public function tag(): string;

    public function shortcode($args);
}