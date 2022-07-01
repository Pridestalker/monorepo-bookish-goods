<?php
use Timber\Timber;
use Timber\PostQuery;
use App\Helpers\Template;

defined('ABSPATH') || exit(0);

$total = $total?? wc_get_loop_prop('total_pages');

if ($total <= 1) {
    return;
}

$context = Timber::get_context();
$context['pagination'] = (new PostQuery())->pagination();

$templates = [
    Template::partialHtmlTwigFile('woocommerce/loop/pagination')
];

Timber::render(
    apply_filters('bookish/view-composer/loop-pagination/templates', $templates),
    apply_filters('bookish/view-composer/loop-pagination/context', $context),
    apply_filters('bookish/view-composer/loop-pagination/cache', false)
);
