<?php
declare(strict_types=1);

namespace App\Controllers\TwigFunctions;

defined('ABSPATH') || exit(0);

class ProductCategoryUrl
{
    protected static $term_link_cache = [];
    protected static $term_id_link_cache = [];

    /**
     * @param string|null $category the category to look for
     *
     * @return string
     */
    public static function getUrlOnName(?string $category): string
    {
        if (!$category) {
            return '';
        }

        if (isset(static::$term_link_cache[$category])) {
            return static::$term_link_cache[$category];
        }

        $id = \get_term_by('slug', $category, 'product_cat');

        return static::$term_link_cache[$category] = static::getUrlOnID($id->term_id);
    }

    /**
     * @param int|null $category the category ID to look for.
     *
     * @return string
     */
    public static function getUrlOnID(?int $category): string
    {
        if (!$category) {
            return '';
        }

        if (isset(static::$term_id_link_cache[$category])) {
            return static::$term_id_link_cache[$category];
        }
        return static::$term_id_link_cache[$category] = get_term_link($category, 'product_cat');
    }
}
