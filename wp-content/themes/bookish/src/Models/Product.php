<?php

namespace App\Models;

defined( 'ABSPATH' ) || exit( 0 );

use App\Bootstrap\Env;
use App\Controllers\TwigFunctions\ProductCategoryUrl;
use App\Helpers\Number;
use App\Helpers\Str;
use App\Helpers\Terms;
use Carbon\Carbon;
use DusanKasan\Knapsack\Collection;
use Timber\ImageHelper;
use Timber\Post;
use Timber\PostQuery;
use Timber\Term;
use WC_Product;
use WC_Product_Attribute;

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

	public function __call( $field, $args )
	{
		try {
			return call_user_func_array( [ $this->setProduct(), $field ], $args );
		} catch ( \Throwable $e ) {
			return false;
		}
	}

	public function setProduct(): \WC_Product
	{
		if ( $this->product === null ) {
			if ( isset( static::$product_cache[ $this->id ] ) ) {
				$this->product = static::$product_cache[ $this->id ];
			} else {
				$this->product = static::$product_cache[ $this->id ] = wc_get_product( $this->id );
			}
		}

		return $this->product;
	}

	/**
	 * Returns a carbon-field value
	 *
	 * @param  string  $field_name
	 *
	 * @return array|mixed|\WP_Post
	 */
	public function get_field( $field_name, $default = null )
	{
		$value = carbon_get_post_meta( $this->id, $field_name );
		$value = $this->convert( $value );

		return $value ?? $default;
	}

	public function get_price_bare()
	{
		if ( isset( static::$bare_price_cache[ $this->id ] ) ) {
			return static::$bare_price_cache[ $this->id ];
		}

		$this->setProduct();

		return static::$bare_price_cache[ $this->id ] = $this->product->get_regular_price( 'edit' );
	}

	public function get_price()
	{
		if ( isset( static::$price_cache[ $this->id ] ) ) {
			if ( Str::contains( static::$price_cache[ $this->id ], '€' ) ) {
				return static::$price_cache[ $this->id ];
			}
		}

		$this->setProduct();

		return Number::formatAsCurrency( static::$price_cache[ $this->id ] = $this->product->get_price() );
	}

	public function get_regular_price()
	{
		return Number::formatAsCurrency( $this->setProduct()->get_regular_price('edit') );
	}

	public function is_on_sale()
	{
		return $this->setProduct()->is_on_sale();
	}

	public function get_title()
	{
		if ( $this->is_pre_order() ) {
			return 'Preorder: ' . $this->title();
		}

		return $this->title();
	}

	public function is_pre_order(): bool
	{
		if ( isset( static::$stock_cache[ $this->id ][ 'is_pre_order' ] ) ) {
			return static::$stock_cache[ $this->id ][ 'is_pre_order' ];
		}

		return static::$stock_cache[ $this->id ][ 'is_pre_order' ] =
			$this->setProduct()->get_stock_status( 'edit' ) === 'preorder';
	}

	/**
	 * @param  string  $separator
	 * @param  array|string  $classes
	 *
	 * @return string
	 */
	public function get_product_categories_links( string $separator = ', ', $classes = null ): string
	{
		if ( ! isset( static::$categories_cache[ $this->id ] ) ) {
			$this->setProduct();
			static::$categories_cache[ $this->id ] = $this->product->get_category_ids();
		}

		$data = [];
		foreach ( static::$categories_cache[ $this->id ] as $category ) {
			$data [] = sprintf(
				'<a href="%1$s" class="%2$s">%3$s</a>',
				ProductCategoryUrl::getUrlOnID( $category ),
				implode( ' ', (array) $classes ),
				Terms::getTermNameOnId( $category, 'product_cat' )
			);
		}

		return implode( $separator, $data );
	}

	public function get_sale_price()
	{
		if ( isset( static::$sale_price_cache[ $this->id ] ) ) {
			return static::$sale_price_cache[ $this->id ];
		}

		$this->setProduct();

		return static::$sale_price_cache[ $this->id ] = $this->product->get_sale_price();
	}

	public function get_attributes()
	{
		if ( isset( static::$attributes_cache[ $this->id ] ) ) {
			return static::$attributes_cache[ $this->id ];
		}

		/** @var WC_Product_Attribute $attribute */
		foreach ( $this->setProduct()->get_attributes() as $attribute ) {
			if ( ! $attribute->get_visible() ) {
				continue;
			}
			$name                                            = $attribute->get_name();
			static::$attributes_cache[ $this->id ] [ $name ] = [
				'name'    => str_replace( '-', ' ', str_replace( 'pa_', '', $name ) ),
				'options' => array_map( static function ( $item )
				{
					return new Term( $item );
				}, $attribute->get_options() ),
			];
		}

		return static::$attributes_cache[ $this->id ] ?? false;
	}

	public function is_in_stock()
	{
		if ( isset( static::$stock_cache[ $this->id ][ 'in_stock' ] ) ) {
			return static::$stock_cache[ $this->id ][ 'in_stock' ];
		}

		$this->setProduct();

		return static::$stock_cache[ $this->id ][ 'in_stock' ] = $this->product->is_in_stock();
	}

    public function add_to_cart_link()
    {
        return $this->setProduct()->add_to_cart_url();
    }

	public function can_backorder()
	{
		if ( isset( static::$stock_cache[ $this->id ][ 'on_backorder' ] ) ) {
			return static::$stock_cache[ $this->id ][ 'on_backorder' ];
		}

		$this->setProduct();

		return static::$stock_cache[ $this->id ][ 'on_backorder' ] = $this->product->backorders_allowed();
	}

	public function is_new_product()
	{
		if ( isset( static::$product_new_cache[ $this->id ] ) ) {
			return static::$product_new_cache[ $this->id ];
		}


		$product = Carbon::createFromFormat( \DateTimeInterface::ATOM,
			$this->setProduct()->get_date_created( 'edit' )->date( \DateTimeInterface::ATOM ),
			Env::get( 'TIME_ZONE', 'Europe/Amsterdam' ) );

		return static::$product_new_cache[ $this->id ] = $product->isBetween( Carbon::now( Env::get( 'TIME_ZONE',
			'Europe/Amsterdam' ) ), Carbon::now( Env::get( 'TIME_ZONE', 'Europe/Amsterdam' ) )->subWeek() );
	}

	public function related_products()
	{
		if ( ! isset( static::$related_cache[ $this->id ] ) ) {
			static::$related_cache[ $this->id ] = wc_get_related_products( $this->id, 3 );
		}

		return new PostQuery( static::$related_cache[ $this->id ], __CLASS__ );
	}

	public function gallery_items()
	{
		if ( isset( static::$gallery_id_cache[ $this->id ] ) ) {
			return static::$gallery_id_cache[ $this->id ];
		}

		$this->setProduct();

		return static::$gallery_id_cache[ $this->id ] = $this->product->get_gallery_image_ids();
	}

	public function get_category_name_array()
	{
		if ( ! isset( static::$categories_cache[ $this->id ] ) ) {
			$this->setProduct();
			static::$categories_cache[ $this->id ] = $this->product->get_category_ids();
		}

		return array_map( static function ( $category )
		{
			return Terms::getTermNameOnId( $category, 'product_cat' );
		}, static::$categories_cache[ $this->id ] );
	}

	public function get_thumbnail_json()
	{
		$thumbnail = $this->thumbnail();

		$thumbnail = ImageHelper::resize( $thumbnail, 500, 500 );

		return json_encode( [
			'webp'      => ImageHelper::img_to_webp( $thumbnail ),
			'thumbnail' => (string) $thumbnail,
		], JSON_THROW_ON_ERROR );
	}

	/**
	 * @return bool
	 * @see is_pre_order()
	 * @deprecated use Product::is_pre_order()
	 */
	public function is_preorder()
	{
		$tags = Collection::from( $this->terms( 'product_tag' ) );

		return $tags->filter( static function ( $item )
		{
			return $item->name === 'Pre-order';
		} )->sizeIsGreaterThan( 0 );
	}
}
