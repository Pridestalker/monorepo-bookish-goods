<?php

namespace App\Controllers\Shortcodes;

use App\Bootstrap\Container;

class ShortcodeLoader
{
    /**
     * @param string $shortcode
     * @throws \DI\DependencyException
     * @throws \DI\NotFoundException
     */
    public static function load(string $shortcode)
    {
        /** @var Shortcode $shortcode */
        $shortcode = Container::get($shortcode);

        add_shortcode($shortcode->tag(), [$shortcode, 'shortcode']);
    }
}