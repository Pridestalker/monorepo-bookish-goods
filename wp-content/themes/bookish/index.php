<?php

use Timber\Post;
use Timber\Timber;
use App\Bootstrap\Env;
use App\Helpers\Template;

defined('ABSPATH') || exit(0);

$context         = Timber::get_context();
$post = new Post();
$context['post'] = $post;
$context['time'] = microtime();

$templates = [
    Template::viewHtmlTwigFile('index'),
];

$caches = [
    Env::getInt('DEFAULT_USER_CACHING', 600),
    Env::getBool('DEFAULT_ADMIN_CACHING', false)
];

return Timber::render(
    apply_filters('bookish/view-composer/index-page/templates', $templates),
    apply_filters('bookish/view-composer/index-page/context', $context),
    apply_filters('bookish/view/composer/index-page/cache', $caches)
);
