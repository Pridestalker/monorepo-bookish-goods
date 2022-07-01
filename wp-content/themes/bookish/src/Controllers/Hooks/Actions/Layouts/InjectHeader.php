<?php

namespace App\Controllers\Hooks\Actions\Layouts;

use App\Controllers\Hooks\Actions\Action;
use Timber\Timber;

defined('ABSPATH') || exit(0);

class InjectHeader extends Action
{
    public function action()
    {
        Timber::render('partials/header.twig', Timber::get_context());
    }

    public function hook()
    {
        return 'bookish/template/header';
    }

    public function priority(): int
    {
        return 20;
    }
}