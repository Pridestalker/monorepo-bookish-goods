<?php

namespace App\Providers;

defined('ABSPATH') || exit(0);

abstract class ServiceProvider
{
    public function __construct()
    {
        if (method_exists($this, 'boot')) {
            $this->boot();
        }

        if (method_exists($this, 'register')) {
            $this->register();
        }
    }

    public function boot()
    {
    }

    public function register()
    {
    }
}
