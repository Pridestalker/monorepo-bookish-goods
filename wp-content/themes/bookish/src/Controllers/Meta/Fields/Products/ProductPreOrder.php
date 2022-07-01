<?php


namespace App\Controllers\Meta\Fields\Products;


use Carbon_Fields\Container;
use Carbon_Fields\Field\Field;
use App\Controllers\Meta\MetaManager;
use App\Controllers\Meta\Fields\PostMeta;

class ProductPreOrder extends PostMeta
{
    protected string $name = 'Preorder Settings';

    public function register(): void
    {
        Container::make('post_meta', $this->name)
            ->where('post_type', '=', MetaManager::T_POST_PRODUCT)
            ->add_fields($this->fields);
    }

    public function loadFields(): void
    {
        $this->fields []= Field::make('text', 'shipment_estimate', 'Shipment estimate');
    }

}
