<?php

namespace App\Controllers\Hooks\Filters\Twig;

defined('ABSPATH') || exit(0);

use Twig\Environment;
use App\Controllers\Hooks\Filters\Filter;
use Twig\Extra\CssInliner\CssInlinerExtension;

class AddTwigExtensions extends Filter
{
    public function hook()
    {
        return 'timber/twig';
    }

    /**
     * @param Environment $twig
     *
     * @return Environment|null
     */
    public function filter($twig = null)
    {
        $twig->addExtension(new CssInlinerExtension());

        return $twig;
    }

    public function parameterCount(): int
    {
         return 1;
    }
}
