<?php

namespace App\Controllers\Http\Api;

defined('ABSPATH') || exit(0);

use App\Controllers\Http\Controller;

abstract class RestController extends Controller implements RestInterface
{
	public function baseUrl (): string {
		return 'bookish';
	}

	public function version(): string {
		return 'v1';
	}

	public function getBaseNamespace(): string
	{
		return $this->baseUrl() . '/' . $this->version();
	}
}
