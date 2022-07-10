<?php

namespace App\Controllers\Hooks\Actions\Layouts\Product;

use App\Controllers\Hooks\Actions\Action;
use Timber\Timber;

class InjectProductContent extends Action
{
    public function action($product = null)
    {
        Timber::render('partials/pages/single-product/content.twig', Timber::get_context() + ['product' => $product,]);
    }

    public function hook()
    {
        return 'bookish/template/product/content';
    }


}