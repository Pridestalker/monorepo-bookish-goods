<?php

namespace App\Providers;

defined('ABSPATH') || exit(0);

use Timber\Menu;
use function register_nav_menus;

/**
 * Class MenuServiceProvider
 *
 * @package App\Providers
 */
class MenuServiceProvider extends ServiceProvider
{
    protected array $menus = [
        'primary-menu' => 'Primary',
    ];

    /**
     * Register nav menus in timber
     *
     * @return void
     */
    public function boot(): void
    {
        register_nav_menus($this->menus);

        add_filter('timber/context', [ $this, 'registerContent' ]);
    }

    /**
     * Register nav menu's in twig.
     *
     * @param array $content
     *
     * @return mixed
     */
    public function registerContent($content)
    {
        foreach ($this->menus as $key => $name) {
            $content[ \App\Helpers\Str::camel($key) ] = new Menu($key);
        }
        return $content;
    }
}
