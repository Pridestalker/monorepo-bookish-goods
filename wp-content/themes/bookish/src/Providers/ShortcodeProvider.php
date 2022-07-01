<?php

namespace App\Providers;

use App\Controllers\Shortcodes\ShortcodeLoader;
use App\Controllers\Shortcodes\WooCommerce\WishlistShortcode;
use DI\DependencyException;
use DI\NotFoundException;

class ShortcodeProvider extends ServiceProvider
{
    protected array $shortcodes = [];

    public function boot()
    {
        $this->shortcodes = apply_filters('bookish/providers/shortcodes', [
            WishlistShortcode::class,
        ]);
    }

    public function register()
    {
        foreach ($this->shortcodes as $shortcode) {

            try {
                ShortcodeLoader::load($shortcode);
            } catch (DependencyException $e) {
            } catch (NotFoundException $e) {
            }
        }
    }
}