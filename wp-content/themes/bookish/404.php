<?php

use Timber\Post;
use Timber\Timber;
use App\Helpers\Template;

defined('ABSPATH') || exit(0);

$context         = Timber::get_context();
$post            = new Post();
$context['post'] = $post;

$templates = [
    Template::viewHtmlTwigFile('404'),
];

return Timber::render(
    apply_filters('bookish/view-composer/404-page/templates', $templates),
    apply_filters('bookish/view-composer/404-page/context', $context),
    apply_filters('bookish/view-composer/404-page/cache', false)
);
