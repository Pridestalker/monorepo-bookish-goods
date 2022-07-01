<?php

namespace App\Controllers\Hooks\Actions\Layouts;

use App\Controllers\Hooks\Actions\Action;
use Timber\Timber;

defined('ABSPATH') || exit(0);

class InjectNavigation extends Action
{
    public function action()
    {
        Timber::render('partials/layout/header/navigation.twig', Timber::get_context());
    }

    public function hook()
    {
        return 'bookish/template/header';
    }

    public function priority(): int
    {
        return 50;
    }
}