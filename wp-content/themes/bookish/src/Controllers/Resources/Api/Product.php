<?php

namespace App\Controllers\Resources\Api;

defined('ABSPATH') || exit(0);

use Timber\Image;

class Product
{
    private \App\Models\Product $product;

    private ?Image $thumbnail;

    public function __construct(\App\Models\Product $product, array $cartItem)
    {
        $this->product = $product;
        $this->thumbnail = $product->thumbnail();
        $this->cartItem = $cartItem;
    }

    public function toArray()
    {
        return [
            'id' => $this->product->id,
            'name' => $this->product->name(),
            'price' => $this->product->get_price_bare(),
            'thumbnail' => $this->thumbnail,
            'cart' => $this->cartItem,
        ];
    }
}
