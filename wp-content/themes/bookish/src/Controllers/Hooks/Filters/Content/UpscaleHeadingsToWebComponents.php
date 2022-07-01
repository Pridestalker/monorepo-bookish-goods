<?php

namespace App\Controllers\Hooks\Filters\Content;

use App\Controllers\Hooks\Filters\Filter;
use App\Controllers\TwigFunctions\AdminHelpers;

abstract class UpscaleHeadingsToWebComponents extends Filter
{

    public function filter($content = '') {
        return preg_replace(
            '/(h[1-6])/',
            '$1 is="bookish-heading"',
            $content
        );
    }
}
