<?php

namespace App\Providers;

class WidgetServiceProvider extends ServiceProvider
{
    protected $footer_settings = [
        'before_widget' => '<div>',
        'after_widget'  => '</div>',
        'before_title'  => '<h3>',
        'after_title'   => '</h3>',
    ];

    public function boot()
    {
        register_sidebar(
            [
                'name' => __('Footer column 1', 'bookish'),
                'id'   => 'footer_col_1',
            ] + $this->footer_settings
        );

        register_sidebar(
            [
                'name' => __('Footer column 2', 'bookish'),
                'id'   => 'footer_col_2',
            ] + $this->footer_settings
        );
    }
}
