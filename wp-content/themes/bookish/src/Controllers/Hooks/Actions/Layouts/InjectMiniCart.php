<?php

namespace App\Controllers\Hooks\Actions\Layouts;

use App\Controllers\Hooks\Actions\Action;
use Timber\Timber;

defined('ABSPATH') || exit(0);

class InjectMiniCart extends Action
{
    public function action()
    {
        Timber::render('partials/layout/header/mini-cart.twig', Timber::get_context());
    }

    public function hook()
    {
        return 'bookish/template/header/end';
    }

    public function priority(): int
    {
        return 100;
    }
}