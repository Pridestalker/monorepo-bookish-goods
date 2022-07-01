<?php

namespace App\Controllers\Hooks\Filters\Content;

use App\Controllers\Hooks\Filters\Filter;

class AddBodyClasses extends Filter {
	public function filter($classes = []) {
		$classes[]= 'page-' . \get_post_field( 'post_name', \get_post() );
		return $classes;
	}

	public function hook() {
		return 'body_class';
	}

}
