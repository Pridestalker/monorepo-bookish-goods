<?php

namespace App\Controllers\Hooks\Actions\Layouts\Product;

use App\Controllers\Hooks\Actions\Action;
use Timber\Timber;

/**
 * @hooked bookish/template/product/content - 5
 */
class InjectProductGallery extends Action
{
    public function action($product = null)
    {
        Timber::render('partials/pages/single-product/gallery.twig', Timber::get_context() + ['product' => $product,]);
    }

    public function hook()
    {
        return 'bookish/template/product/content';
    }

    public function priority(): int
    {
        return 5;
    }
}