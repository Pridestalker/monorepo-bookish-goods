<?php

namespace App\Bootstrap;

defined('ABSPATH') || exit(0);

use DI\NotFoundException;
use DI\DependencyException;
use DI\Container as IoContainer;

class Container implements Bootstrapper
{
    protected static ?Container $_instance = null;

    protected static ?IoContainer $_container = null;

    public function __construct()
    {
        $this->buildContainer();
    }

    private function buildContainer()
    {
        if (static::$_container === null) {
            static::$_container = new IoContainer();
        }
    }

    /**
     * @param string $class
     *
     * @return mixed
     * @throws DependencyException
     * @throws NotFoundException
     */
    public static function get($class)
    {
        static::bootstrap();

        return static::$_container->get($class);
    }

    public static function bootstrap(): self
    {
        if (static::$_instance === null) {
            static::$_instance = new static();
        }

        return static::$_instance;
    }
}
