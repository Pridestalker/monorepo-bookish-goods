<?php

namespace App\Controllers\Http\Api;

defined('ABSPATH') || exit(0);

interface RestInterface
{
	public function baseUrl(): string;
	public function version(): string;

	public function endpoint(): string;
	public function methods(): array;
}
