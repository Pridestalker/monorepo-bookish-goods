<?php

namespace App\Helpers;

defined('ABSPATH') || exit(0);

class Template
{
    /**
     * returns a view file from the emails directory
     *
     * @param string|array $name
     * @param string       $extension
     *
     * @return array|string
     */
    public static function emailFile($name, $extension)
    {
        return static::getFile('emails/', $name, $extension);
    }

    /**
     * Returns an email .html.twig file
     *
     * @param string|array $name
     *
     * @return array|string
     */
    public static function emailHtmlTwigFile($name)
    {
        return static::emailFile($name, '.html.twig');
    }

    /**
     * returns view file
     *
     * @param string|array $name
     * @param string       $extension
     *
     * @return array|string
     */
    public static function viewFile($name, $extension)
    {
        return static::getFile('views/', $name, $extension);
    }

    /**
     * Returns a view .html.twig file
     *
     * @param $name
     *
     * @return array|string
     */
    public static function viewHtmlTwigFile($name)
    {
        return static::viewFile($name, '.html.twig');
    }

    /**
     * Returns a view .twig file
     *
     * @param $name
     *
     * @return array|string
     */
    public static function viewTwigFile($name)
    {
        return static::viewFile($name, 'twig');
    }

    /**
     * Returns a partial .html.twig file
     *
     * @param string|array  $name
     * @param string        $extension
     *
     * @return array|string
     */
    public static function partialFile($name, $extension)
    {
        return static::getFile('partials/', $name, $extension);
    }

    /**
     * Returns a partial .html.twig file
     *
     * @param string $name
     *
     * @return array|string
     */
    public static function partialHtmlTwigFile($name)
    {
        return static::partialFile($name, '.html.twig');
    }

    /**
     * Returns a partial .twig file
     *
     * @param string $name
     *
     * @return array|string
     */
    public static function partialTwigFile($name)
    {
        return static::partialFile($name, 'twig');
    }

    /**
     * Returns a file
     *
     * Used only in this class
     *
     * @param string        $dir_prefix
     * @param string|array  $name
     * @param string        $extension
     *
     * @return array|string
     */
    private static function getFile(string $dir_prefix, $name, string $extension)
    {
        if (!Str::startsWith($extension, '.')) {
            $extension = Str::start($extension, '.');
        }

        if (is_array($name)) {
            $name = array_map(static function ($loc) use ($extension, $dir_prefix) {
                if (!Str::startsWith($loc, $dir_prefix)) {
                    $loc = Str::start($loc, $dir_prefix);
                }
                if (!Str::endsWith($loc, $extension)) {
                    $loc .= $extension;
                }
                return $loc;
            }, $name);
        } else {
            if (!Str::startsWith($name, $dir_prefix)) {
                $name = Str::start($name, $dir_prefix);
            }
            if (!Str::endsWith($name, $extension)) {
                $name .= $extension;
            }
        }

        return $name;
    }
}
