<?php

namespace App\Controllers\Hooks\Filters\Content;

use App\Controllers\Hooks\Filters\Filter;

class DisableGutenberg extends Filter
{
	public function filter($current_status = false, $post_type = 'post')
	{
		if ($post_type === 'page') {
			return false;
		}

		return $current_status;
	}

	public function hook()
	{
		return 'use_block_editor_for_post_type';
	}

	public function parameterCount(): int
	{
		return 2;
	}
}
