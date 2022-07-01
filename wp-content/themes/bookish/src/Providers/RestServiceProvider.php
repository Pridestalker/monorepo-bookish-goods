<?php

namespace App\Providers;

defined('ABSPATH') || exit(0);

use App\Controllers\Http\Api\ApiManager;
use App\Controllers\Http\Api\v1\Shop\GetProductData;
use App\Controllers\Http\Api\v1\Shop\GetRelatedProducts;
use App\Controllers\Http\Api\v1\MailChimp\AddNewSubscriber;

class RestServiceProvider extends ServiceProvider
{
    protected array $restClasses = [];

    public function boot()
    {
        $this->restClasses = apply_filters('bookish/providers/rest', [
            AddNewSubscriber::class,
            GetRelatedProducts::class,
            GetProductData::class,
        ]);
    }

    public function register()
    {
        foreach ($this->restClasses as $restClass) {
            ApiManager::load($restClass);
        }
    }
}
