<?php

namespace App\Controllers\Hooks\Actions\Layouts;

use App\Controllers\Hooks\Actions\Action;
use App\Models\Product;
use Timber\Timber;

defined('ABSPATH') || exit(0);

class RenderProductCard extends Action
{
    public function action(?Product $product = null)
    {
        if (!$product) {
            return;
        }

        Timber::render('partials/tease/product-card/card.twig', [
            'product' => $product,
        ]);
    }

    public function hook()
    {
        return 'bookish/template/product-card';
    }

}