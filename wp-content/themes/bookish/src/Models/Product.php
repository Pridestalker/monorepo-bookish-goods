<?php

namespace App\Models;

defined('ABSPATH') || exit(0);

use App\Bootstrap\Env;
use App\Controllers\TwigFunctions\ProductCategoryUrl;
use App\Helpers\Terms;
use Carbon\Carbon;
use JetBrains\PhpStorm\Deprecated;
use Timber\ImageHelper;
use Timber\Post;
use Timber\Term;
use WC_Product;
use WC_Product_Attribute;

/**
 *
 * @author M. Hijlkema
 * @version 2.0.0
 *
 * @modified 2.0.0
 *  Add more classes for easier work in twig templates.
 *  Add more deprecation notices.
 */
class Product extends Post
{
    protected static array $price_cache = [];
    protected static array $bare_price_cache = [];
    protected static array $sale_price_cache = [];
    protected static array $categories_cache = [];
    protected static array $attributes_cache = [];
    protected static array $stock_cache = [];
    protected static array $related_cache = [];
    protected static array $product_cache = [];
    protected static array $gallery_id_cache = [];
    protected static array $product_new_cache = [];
    /**
     * @var WC_Product|null $product
     */
    public ?WC_Product $product = null;

    public function __call($field, $args)
    {
        try {
            return call_user_func_array([$this->getProduct(), $field], $args);
        } catch (\Throwable $e) {
            return false;
        }
    }

    #[Deprecated(reason: 'Incorrect naming, setters should handle argument.', replacement: '%class%->getProduct()')]
    public function setProduct(): \WC_Product
    {
        return $this->getProduct();
    }

    public function getProduct(): \WC_Product
    {
        if ($this->product === null) {
            if (isset(static::$product_cache[$this->id])) {
                $this->product = static::$product_cache[$this->id];
            } else {
                $this->product = static::$product_cache[$this->id] = wc_get_product($this->id);
            }
        }

        return $this->product;
    }

    /**
     * Returns a carbon-field value
     *
     * @param string $field_name
     *
     * @return array|mixed|\WP_Post
     */
    public function get_field($field_name, $default = null): mixed
    {
        $value = carbon_get_post_meta($this->id, $field_name);
        $value = $this->convert($value);

        return $value ?? $default;
    }

    /**
     * Gets the title, with required prefixes and other changes.
     *
     * @return string
     * @todo(@mitchhijlkema) This feels hacky, can work a lot better with potential filters.
     *
     */
    public function get_title(): string
    {
        if ($this->is_pre_order()) {
            return 'Preorder: ' . $this->title();
        }

        return $this->title();
    }

    /**
     * Check if a product is on pre-order. Is a replacement for {@see self::is_preorder} function.
     *
     * @return bool
     */
    public function is_pre_order(): bool
    {
        if (isset(static::$stock_cache[$this->id]['is_pre_order'])) {
            return static::$stock_cache[$this->id]['is_pre_order'];
        }

        return static::$stock_cache[$this->id]['is_pre_order'] =
            $this->getProduct()->get_stock_status('edit') === 'preorder';
    }

    /**
     * Return a string list of product categories.
     *
     * @param string $separator
     * @param array|string|null $classes
     *
     * @return string
     */
    public function get_product_categories_links(string $separator = ', ', array|string $classes = null): string
    {
        if (!isset(static::$categories_cache[$this->id])) {
            $this->setProduct();
            static::$categories_cache[$this->id] = $this->product->get_category_ids();
        }

        $data = [];
        foreach (static::$categories_cache[$this->id] as $category) {
            $data [] = sprintf(
                '<a href="%1$s" class="%2$s">%3$s</a>',
                ProductCategoryUrl::getUrlOnID($category),
                implode(' ', (array)$classes),
                Terms::getTermNameOnId($category, 'product_cat')
            );
        }

        return implode($separator, $data);
    }

    /**
     * Gets the product sale price.
     *
     * @return string
     */
    #[Deprecated(reason: 'Function with HTML gives easier results', replacement: 'get_price_html')]
    public function get_sale_price(): string
    {
        if (isset(static::$sale_price_cache[$this->id])) {
            return static::$sale_price_cache[$this->id];
        }

        $this->setProduct();

        return static::$sale_price_cache[$this->id] = $this->product->get_sale_price();
    }

    /**
     * Gets product attributes.
     *
     * @return array|false
     * @todo Refactor this function to look better and more efficient.
     */
    public function get_attributes(): array|false
    {
        if (isset(static::$attributes_cache[$this->id])) {
            return static::$attributes_cache[$this->id];
        }

        /** @var WC_Product_Attribute $attribute */
        foreach ($this->setProduct()->get_attributes() as $attribute) {
            if (!$attribute->get_visible()) {
                continue;
            }
            $name = $attribute->get_name();
            static::$attributes_cache[$this->id] [$name] = [
                'name' => str_replace('-', ' ', str_replace('pa_', '', $name)),
                'options' => array_map(static function ($item) {
                    return new Term($item);
                }, $attribute->get_options()),
            ];
        }

        return static::$attributes_cache[$this->id] ?? false;
    }

    /**
     * Checks if the product is in stock.
     *
     * @return bool
     */
    public function is_in_stock(): bool
    {
        if (isset(static::$stock_cache[$this->id]['in_stock'])) {
            return static::$stock_cache[$this->id]['in_stock'];
        }

        $this->setProduct();

        return static::$stock_cache[$this->id]['in_stock'] = $this->product->is_in_stock();
    }

    /**
     * Gets the add to cart URL for the product.
     *
     * @return string
     * @since 2.0.0
     *
     */
    public function add_to_cart_link(): string
    {
        return $this->setProduct()->add_to_cart_url();
    }

    /**
     * Check if this product can be sold on backorder.
     *
     * @return bool
     */
    public function can_backorder(): bool
    {
        if (isset(static::$stock_cache[$this->id]['on_backorder'])) {
            return static::$stock_cache[$this->id]['on_backorder'];
        }

        $this->setProduct();

        return static::$stock_cache[$this->id]['on_backorder'] = $this->product->backorders_allowed();
    }

    /**
     * Check if a product is new.
     *
     * @return bool
     * @deprecated potential deprecation. New products are not marked as new anymore.
     */
    public function is_new_product(): bool
    {
        if (isset(static::$product_new_cache[$this->id])) {
            return static::$product_new_cache[$this->id];
        }

        $product = Carbon::createFromFormat(
            \DateTimeInterface::ATOM,
            $this->setProduct()->get_date_created('edit')->date(\DateTimeInterface::ATOM),
            Env::get('TIME_ZONE', 'Europe/Amsterdam')
        );

        return static::$product_new_cache[$this->id] = $product->isBetween(
            Carbon::now(
                Env::get(
                    'TIME_ZONE',
                    'Europe/Amsterdam'
                )
            ),
            Carbon::now(Env::get('TIME_ZONE', 'Europe/Amsterdam'))->subWeek()
        );
    }

    /**
     * Gets an array of product ids with as related product.
     *
     * @return array<Product>
     */
    public function related_products(): array
    {
        if (!isset(static::$related_cache[$this->id])) {
            static::$related_cache[$this->id] = wc_get_related_products($this->id, 3);
        }

        $query = new \WP_Query([
            'post_type' => 'product',
            'post__in' => static::$related_cache[$this->id],
            'posts_per_page' => 3,
            'fields' => 'ids',
            'update_post_term_cache' => false,
            'update_post_meta_cache' => false,
            'no_found_rows' => true,
        ]);

        $posts = [];

        foreach ($query->get_posts() as $postId) {
            $posts [] = new Product($postId);
        }

        return $posts;
    }

    /**
     * Returns an array with gallery image ids.
     *
     * @return array
     */
    public function gallery_items(): array
    {
        if (isset(static::$gallery_id_cache[$this->id])) {
            return static::$gallery_id_cache[$this->id];
        }

        $this->setProduct();

        return static::$gallery_id_cache[$this->id] = $this->product->get_gallery_image_ids();
    }

    /**
     * Returns an array with category names
     *
     * @return array
     */
    public function get_category_name_array(): array
    {
        if (!isset(static::$categories_cache[$this->id])) {
            $this->setProduct();
            static::$categories_cache[$this->id] = $this->product->get_category_ids();
        }

        return array_map(static function ($category) {
            return Terms::getTermNameOnId($category, 'product_cat');
        }, static::$categories_cache[$this->id]);
    }

    /**
     * Builds JSON ready data with thumbnails to use in (P)React apps.
     *
     * @return false|string
     * @throws \JsonException
     * @deprecated
     */
    #[Deprecated(reason: 'Hydrated JavaScript is removed in new theme version', replacement: 'none')]
    public function get_thumbnail_json(): false|string
    {
        $thumbnail = $this->thumbnail();

        $thumbnail = ImageHelper::resize($thumbnail, 500, 500);

        return json_encode([
            'webp' => ImageHelper::img_to_webp($thumbnail),
            'thumbnail' => (string)$thumbnail,
        ], JSON_THROW_ON_ERROR);
    }

    /**
     * Gets the percentage difference for the prices if the product is on sale.
     *
     * @return false|string
     * @author M. Hijlkema
     *
     * @version 1.0.0
     */
    public function get_sale_price_percentage(): false|string
    {
        if (!$this->is_on_sale()) {
            return false;
        }

        $sale_price = $this->product->get_price();
        $regular_price = $this->product->get_regular_price();

        $percentageOff = ($regular_price - $sale_price) / $regular_price * 100;

        return sprintf('-%d %s', $percentageOff, '%');
    }

    /**
     * Check if the stock status should be shown.
     *
     * Defaults to a maximum of 5 items in stock.
     * Also returns true if there is no stock left.
     *
     * @return bool
     * @author M. Hijlkema
     *
     * @version 1.0.0
     */
    public function should_show_stock(): bool
    {
        if (!$this->is_in_stock()) {
            return true;
        }

        if (!$this->product->get_manage_stock()) {
            return false;
        }

        if ($this->product->get_stock_quantity() > 5) {
            return false;
        }

        return true;
    }

    /**
     * @return bool
     * @see is_pre_order()
     * @deprecated use Product::is_pre_order()
     */
    #[Deprecated(reason: 'Typo in function name', replacement: 'Product::is_pre_order')]
    public function is_preorder(): bool
    {
        return $this->is_pre_order();
    }
}
