<?php

namespace App\Providers;

class ThemeSupportServiceProvider extends ServiceProvider
{
    private function add_action($callback)
    {
        add_action('after_setup_theme', [$this, $callback]);
    }

    public function boot()
    {
        $this->add_action('add_gutenberg_colors');
        $this->disable_default_blocks();
    }

    public function add_gutenberg_colors()
    {
        add_theme_support('editor-color-palette', [
            [
                'name' => 'Strong Magenta',
                'slug' => 'strong-magenta',
                'color' => '#6314D2',
            ],
            [
                'name' => 'Strong Yellow',
                'slug' => 'strong-yellow',
                'color' => '#FFDC5C',
            ],
            [
                'name' => 'Strong Red',
                'slug' => 'strong-red',
                'color' => '#FF1A25',
            ],
            [
                'name' => 'Strong Green',
                'slug' => 'strong-green',
                'color' => '#28CC2E',
            ],
            [
                'name' => 'White',
                'slug' => 'white',
                'color' => '#fff'
            ],
            [
                'name' => 'Black',
                'slug' => 'black',
                'color' => '#000'
            ]
        ]);

        add_theme_support(
            'editor-gradient-presets',
            array(
                array(
                    'name' => __('Vivid cyan blue to vivid purple', 'themeLangDomain'),
                    'gradient' => 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
                    'slug' => 'vivid-cyan-blue-to-vivid-purple'
                ),
                array(
                    'name' => __('Vivid green cyan to vivid cyan blue', 'themeLangDomain'),
                    'gradient' => 'linear-gradient(135deg,rgba(0,208,132,1) 0%,rgba(6,147,227,1) 100%)',
                    'slug' => 'vivid-green-cyan-to-vivid-cyan-blue',
                ),
                array(
                    'name' => __('Light green cyan to vivid green cyan', 'themeLangDomain'),
                    'gradient' => 'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)',
                    'slug' => 'light-green-cyan-to-vivid-green-cyan',
                ),
                array(
                    'name' => __('Luminous vivid amber to luminous vivid orange', 'themeLangDomain'),
                    'gradient' => 'linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)',
                    'slug' => 'luminous-vivid-amber-to-luminous-vivid-orange',
                ),
                array(
                    'name' => __('Luminous vivid orange to vivid red', 'themeLangDomain'),
                    'gradient' => 'linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)',
                    'slug' => 'luminous-vivid-orange-to-vivid-red',
                ),
            )
        );

        add_theme_support('disable-custom-colors');
        add_theme_support('disable-custom-gradients');
    }

    public function disable_default_blocks()
    {
        remove_theme_support('core-block-patterns');
    }

    public function enable_default_block_settings()
    {
        add_theme_support('responsive-embeds');
    }
}
