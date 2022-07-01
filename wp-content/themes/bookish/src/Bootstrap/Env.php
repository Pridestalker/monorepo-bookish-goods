<?php

namespace App\Bootstrap;

defined('ABSPATH') || exit(0);

use Dotenv\Dotenv;
use App\Helpers\WP;

class Env implements Bootstrapper
{
    protected static ?Env $_instance = null;
    /**
     * @var Dotenv|null
     */
    protected ?Dotenv $env = null;

    public static function get($name, $default = '', $type = null)
    {
        static::bootstrap();


        if ($type === null) {
            return $_ENV[$name]?? $default;
        }

        switch ($type) {
            case 'int':
            case 'integer':
            case 'number':
            case 'num':
                return (int) ($_ENV[$name]?? $default);
            case 'bool':
            case 'boolean':
                return filter_var(($_ENV[$name]?? $default), FILTER_VALIDATE_BOOLEAN);
            default:
                return $_ENV[$name]?? $default;
        }
    }

    public static function getInt($name, $default = 0)
    {
        return static::get($name, $default, 'integer');
    }

    public static function getBool($name, $default = false)
    {
        return static::get($name, $default, 'boolean');
    }

    public function __construct()
    {
        $this->env = Dotenv::createImmutable(WP::getStylesheetDir());
        $this->env->safeLoad();
    }

    public static function bootstrap(): self
    {
        if (static::$_instance === null) {
            static::$_instance = new static();
        }

        return static::$_instance;
    }
}
