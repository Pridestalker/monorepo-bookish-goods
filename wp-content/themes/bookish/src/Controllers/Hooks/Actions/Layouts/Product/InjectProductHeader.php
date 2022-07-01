<?php

namespace App\Controllers\Hooks\Actions\Layouts\Product;

use App\Controllers\Hooks\Actions\Action;
use Timber\Timber;

defined('ABSPATH') || exit(0);

class InjectProductHeader extends Action
{
    public function action($product = null)
    {
        Timber::render('partials/pages/single-product/header.twig', Timber::get_context() + ['product' => $product]);
    }

    public function hook()
    {
        return 'bookish/template/product/before-content';
    }
}