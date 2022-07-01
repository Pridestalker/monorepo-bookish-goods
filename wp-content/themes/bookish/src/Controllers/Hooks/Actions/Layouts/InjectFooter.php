<?php

namespace App\Controllers\Hooks\Actions\Layouts;

use App\Controllers\Hooks\Actions\Action;
use Timber\Timber;

class InjectFooter extends Action
{
    public function action()
    {
        Timber::render('partials/footer.twig', Timber::get_context());
    }

    public function hook()
    {
        return 'bookish/template/footer';
    }

}