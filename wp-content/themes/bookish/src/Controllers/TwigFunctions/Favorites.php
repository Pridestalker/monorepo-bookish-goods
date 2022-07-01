<?php

namespace App\Controllers\TwigFunctions;

class Favorites
{
    /**
     * @param null|int $post_id
     * @return string
     */
    public static function getButton(?int $post_id = null)
    {
        if (!$post_id) {
            $post_id = get_queried_object_id();
        }

        return get_favorites_button($post_id, null);
    }
}