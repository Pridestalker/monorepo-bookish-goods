<?php

use App\Helpers\Cookie;
use App\Helpers\Template;
use App\Helpers\Woo;
use App\Models\Product;
use Timber\Timber;

defined( 'ABSPATH' ) || exit( 0 );

$context              = Timber::get_context();
$context[ 'product' ] = new Product();

Woo::setProductView( $context[ 'product' ]->id );

$templates = [
	Template::viewHtmlTwigFile( 'woo/single-product/specific/' . $context[ 'product' ]->slug ),
	Template::viewHtmlTwigFile( 'woo/single-product/main' ),
	Template::viewHtmlTwigFile( 'page' ),
];

if ( $context[ 'product' ]->is_type( 'variable' ) ) {
	array_unshift(
		$templates,
		Template::viewHtmlTwigFile( 'woo/single-product/variable' ),
	);

	$context[ 'product' ] = new \App\Models\VariableProduct();
}

Cookie::setLastViewedProduct( $context[ 'product' ]->id );

Timber::render(
	apply_filters( 'bookish/view-composer/single-product/templates', $templates ),
	apply_filters( 'bookish/view-composer/single-product/context', $context ),
	apply_filters( 'bookish/view-composer/single-product/cache', [ 600, false ] )
);
