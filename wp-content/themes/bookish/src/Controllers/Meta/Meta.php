<?php

namespace App\Controllers\Meta;

abstract class Meta
{
	protected string $name;
	protected array $fields;
	protected static $instantiated = false;

	abstract public function register();
	abstract public function loadFields();
}
