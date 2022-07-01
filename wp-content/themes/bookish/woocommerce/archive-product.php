<?php

use Timber\Post;
use Timber\Timber;
use Timber\PostQuery;
use App\Models\Product;
use App\Helpers\Template;
use App\Models\VariableProduct;

defined('ABSPATH') || exit(0);

$context = Timber::get_context();
$context['post'] = new Post();
$context['products'] = new PostQuery(false, Product::class);
$context['canon_url'] = strtok($_SERVER['REQUEST_URI'], '?');

if (\is_product_category()) {
    $queried_object = get_queried_object();
    $term_id = $queried_object->term_id;
    $context['category'] = new \Timber\Term($term_id, 'product_cat');
}


$templates = [
    Template::viewHtmlTwigFile('woo/archive-product/main'),
    Template::viewHtmlTwigFile('page'),
];

Timber::render(
    apply_filters('bookish/view-composer/archive-product/templates', $templates),
    apply_filters('bookish/view-composer/archive-product/context', $context),
    apply_filters('bookish/view-composer/archive-product/cache', [false, false])
);
