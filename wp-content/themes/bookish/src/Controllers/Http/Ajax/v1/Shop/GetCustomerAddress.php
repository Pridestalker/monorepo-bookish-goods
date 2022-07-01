<?php

namespace App\Controllers\Http\Ajax\v1\Shop;

use App\Controllers\Http\Ajax\AjaxController;
use App\Controllers\Services\Postcode\PostcodeBridge;
use Timber\Helper;

class GetCustomerAddress extends AjaxController
{
    public function isPrivate(): bool
    {
        return false;
    }

    public function actionName(): string
    {
        return 'get_user_shipping_address';
    }

    public function hookName(): string
    {
        return 'getShippingAddress';
    }

    public function getShippingAddress()
    {
        $request = $this->getRequestWithJson();

        $postcode = $this->setAndOrGetDataFromCache(
            $request->get('postcode'),
            $request->get('number')
        );

        wp_send_json_success($postcode);
    }

    private function setAndOrGetDataFromCache(string $postcode, int $number): array
    {
        return Helper::transient(
            "postcode_data_{$postcode}_{$number}",
            function () use ($postcode, $number) {
                $postcodeBridge = new PostcodeBridge();
                return $postcodeBridge->buildNumber($number)
                    ->buildPostcode($postcode)
                    ->build()->get();
            }
        );
    }
}
