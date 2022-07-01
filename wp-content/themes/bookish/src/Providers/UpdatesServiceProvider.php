<?php

namespace App\Providers;

defined('ABSPATH') || exit(0);

use App\Helpers\WP;
use App\Bootstrap\Env;

class UpdatesServiceProvider extends ServiceProvider
{
    protected array $settings = [];
    private Env $env;

    public function __construct(Env $env)
    {
        $this->env = $env;
    }

    public function boot()
    {
        $this->GH_URL = $this->env::get('UP_GH_URL');
        $this->GH_SLUG = $this->env::get('UP_SLUG');
        $this->GH_KEY = $this->env::get('UP_GH_KEY', false);
        $this->GH_CHECK_PERIOD = $this->env::get('UP_CHECK_PERIOD', 12);
    }

    public function register()
    {
        if (!Env::getBool('UP_GH_KEY')) {
            return;
        }
        $builder = \Puc_v4_Factory::buildUpdateChecker(
            $this->GH_URL,
            WP::getStylesheetDir() . '/functions.php',
            $this->GH_SLUG,
            $this->GH_CHECK_PERIOD
        );

        if ($this->GH_KEY) {
            $builder->setAuthentication($this->GH_KEY);
        }
    }

    /**
     * @param $name
     * @param $val
     */
    public function __set($name, $val)
    {
        $this->settings[$name] = $val;
    }

    public function __isset($name)
    {
        return isset($this->settings[$name]);
    }

    public function __get($name)
    {
        return $this->settings[$name];
    }
}
