<?php

namespace App\Controllers\Customizer;

defined('ABSPATH') || exit(0);

use Kirki;
use App\Helpers\Str;

abstract class Customize
{
    public static ?string $panel_name = null;
    public static ?string $section_name = null;
    public static ?array $section_args = [];
    abstract public function register();

    protected Kirki $kirki;

    public function __construct(Kirki $kirki)
    {
        $this->kirki = $kirki;
    }

    final public function registerPanel()
    {
        $this->kirki::add_panel(
            static::$panel_name,
            [
                'title' => $this->getTitle(),
                'priority' => $this->getPriority(),
                'description' => $this->getDescription(),
            ]
        );
    }

    public function getDescription(): string
    {
        return '';
    }

    public function getTitle(): string
    {
        return static::$panel_name;
    }

    public function getPriority(): int
    {
        return 10;
    }

    final public function registerSection(): void
    {
        $this->kirki::add_Section(
            static::$section_name,
            array_merge(static::$section_args, ['panel_id' => static::$panel_name])
        );
    }

    /*
     * Helper classes
     */
    protected function getSettingID($name)
    {
        return '_bookish_' . Str::slug($name);
    }
}
