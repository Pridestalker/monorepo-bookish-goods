<?php

namespace App\Controllers\Meta\Fields;

use App\Controllers\Meta\Meta;

abstract class PostMeta extends Meta
{
	public function __construct () {
		$this->loadFields();
	}
}
