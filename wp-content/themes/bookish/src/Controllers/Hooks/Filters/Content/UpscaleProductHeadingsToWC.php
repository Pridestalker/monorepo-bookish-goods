<?php

namespace App\Controllers\Hooks\Filters\Content;

class UpscaleProductHeadingsToWC extends UpscaleHeadingsToWebComponents
{
    public function hook()
    {
        return 'bookish/content/product/content';
    }

}
