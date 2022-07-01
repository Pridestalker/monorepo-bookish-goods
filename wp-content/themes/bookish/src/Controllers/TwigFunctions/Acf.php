<?php

namespace App\Controllers\TwigFunctions;

defined( 'ABSPATH' ) || exit( 0 );

class Acf
{
	public static function get_field( $key )
	{
		return \get_field( $key, get_queried_object_id() );
	}
}
