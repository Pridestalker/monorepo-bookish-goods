<?php

namespace App\Providers;

use App\Helpers\Log;
use Carbon_Fields\Carbon_Fields;
use App\Controllers\Meta\MetaManager;
use App\Controllers\Meta\Fields\Products\ProductPreOrder;
use App\Controllers\Meta\Fields\Products\ProductVariation;

class CarbonServiceProvider extends ServiceProvider
{
	protected array $carbonFields = [];

	public function boot(): void
	{
        Carbon_Fields::boot();

		$this->carbonFields = apply_filters('bookish/providers/carbon-meta', [
			ProductVariation::class,
            ProductPreOrder::class,
		]);
	}

	public function register(): void
	{
		foreach($this->carbonFields as $field) {
			try {
				MetaManager::load($field);
			} catch (\Throwable $e) {
                Log::alert($e->getMessage());
			}
		}
	}
}
