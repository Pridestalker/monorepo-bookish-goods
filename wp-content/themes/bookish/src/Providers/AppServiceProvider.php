<?php

namespace App\Providers;

defined('ABSPATH') || exit(0);

use App\Helpers\Log;
use App\Bootstrap\Container;

class AppServiceProvider extends ServiceProvider
{
    protected array $providers;

    public function boot(): void
    {
        $providers = include get_stylesheet_directory() . '/src/config/app.php';
        $this->providers = apply_filters('bookish/app/register-providers/providers', $providers['providers']);
        do_action('bookish/app/init');
    }

    public function register(): void
    {
        foreach ($this->providers as $provider) {
            try {
                do_action('bookish/app/register-providers/register/' . (new \ReflectionClass($provider))->getShortName());
            } catch (\ReflectionException $exception) {
                Log::warning('Reflection error while registering providers', ['class' => $provider]);
            }
            Container::get($provider);
        }

        do_action('bookish/app/providers/initialized');
    }
}
