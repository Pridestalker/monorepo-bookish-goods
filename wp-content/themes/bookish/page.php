<?php

use Timber\Post;
use Timber\Timber;
use App\Bootstrap\Env;
use App\Helpers\Template;

defined('ABSPATH') || exit(0);

$context = Timber::get_context();
$post = new Post();
$context['post'] = $post;

$templates = [
    Template::viewHtmlTwigFile('pages/' . $post->type()->slug),
    Template::viewHtmlTwigFile('page'),
];

$context['time'] = microtime();

$caches = [
    Env::getInt('DEFAULT_USER_CACHING', false),
    Env::getBool('DEFAULT_ADMIN_CACHING', false)
];

return Timber::render(
    apply_filters('bookish/view-composer/page/templates', $templates),
    apply_filters('bookish/view-composer/page/context', $context),
    apply_filters('bookish/view/composer/page/cache', $caches)
);
