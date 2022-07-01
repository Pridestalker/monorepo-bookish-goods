<?php

namespace App\Controllers\Hooks\Actions;

defined('ABSPATH') || exit(0);

class Init extends Action
{
	public function hook ()
	{
		return 'init';
	}

	public function action()
    {
        $this->remove_all_image_sizes();
    }

    protected function remove_all_image_sizes()
    {
        foreach (get_intermediate_image_sizes() as $size) {
            remove_image_size($size);
        }
    }

    public function parameterCount(): int
    {
        return 1;
    }
}
