<?php

namespace App\Controllers\Services\Postcode;

class PostcodeBridge
{
    protected static string $base_url = 'https://postcode.tech/api/v1/postcode?postcode=%s&number=%d';
    protected static string $full_url = 'https://postcode.tech/api/v1/postcode/full?postcode=%s&number=%d';

    protected ?string $url = null;
    protected ?string $postcode = null;
    protected ?int $number = null;
    protected string $type = 'base';

    private ?string $token = null;

    public function __construct()
    {
        $this->setToken();
    }

    public function get()
    {
        if (!$this->url || !$this->token) {
            return false;
        }

        $client = \Symfony\Component\HttpClient\HttpClient::createForBaseUri($this->url);

        $response = $client->request('GET', '', [
            'auth_bearer' => $this->token,
        ]);

        return $response->toArray();
    }

    public function build(?string $postcode = null, ?int $number = null): self
    {
        if (!$this->postcode && !$postcode) {
            return false;
        }

        if (!$this->number && !$number) {
            return false;
        }

        if (!$this->postcode) {
            $this->postcode = $postcode;
        }

        if (!$this->number) {
            $this->number = $number;
        }

        $this->url = sprintf(
            $this->type === 'base' ? static::$base_url : static::$full_url,
            $this->postcode,
            $this->number
        );


        return $this;
    }

    public function buildPostcode(string $postCode): self
    {
        $this->postcode = $postCode;

        return $this;
    }

    public function buildNumber(int $number): self
    {
        $this->number = $number;

        return $this;
    }

    private function setToken()
    {
        $this->token = \App\Bootstrap\Env::get('POSTCODE_API_KEY');
    }
}
