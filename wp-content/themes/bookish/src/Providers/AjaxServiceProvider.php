<?php

namespace App\Providers;

use App\Controllers\Http\Ajax\AjaxManager;
use App\Controllers\Http\Ajax\v1\Shop\AddItemToCart;
use App\Controllers\Http\Ajax\v1\Shop\GetCrossSells;
use App\Controllers\Http\Ajax\v1\Common\SearchResults;
use App\Controllers\Http\Ajax\v1\Shop\CurrentUserCartItems;
use App\Controllers\Http\Ajax\v1\Shop\GetCustomerAddress;

class AjaxServiceProvider extends ServiceProvider
{
    protected array $ajaxClasses = [];

    public function boot()
    {
        $this->ajaxClasses = apply_filters('bookish/providers/ajax', [
            CurrentUserCartItems::class,
            AddItemToCart::class,
	        SearchResults::class,
	        GetCrossSells::class,
            GetCustomerAddress::class,
        ]);
    }

    public function register()
    {
        foreach ($this->ajaxClasses as $ajaxClass) {
            AjaxManager::load($ajaxClass);
        }
    }
}
