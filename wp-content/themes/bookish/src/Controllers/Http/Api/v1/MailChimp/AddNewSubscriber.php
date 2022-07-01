<?php

namespace App\Controllers\Http\Api\v1\MailChimp;

defined('ABSPATH') || exit(0);

use App\Bootstrap\Env;
use App\Controllers\Http\Api\RestController;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\HttpClient\Exception\ClientException;

class AddNewSubscriber extends RestController
{
    public function endpoint(): string
    {
        return 'mailchimp';
    }

    public function methods(): array
    {
        return [
            [
                'methods' => \WP_REST_Server::CREATABLE,
                'callback' => [$this, 'create_new_user'],
                'permission_callback' => [$this, 'create_new_user_permission_callback']
            ]
        ];
    }

    /**
     * @param \WP_REST_Request $request
     *
     * @return \WP_Error|\WP_REST_Response
     */
    public function create_new_user(\WP_REST_Request $request)
    {
        if (Env::get('MAILCHIMP_API_KEY', false)) {
            $mc_key = Env::get('MAILCHIMP_API_KEY');
        } else {
            return new \WP_Error('NO_MC_KEY', 'Mailchimp key not set.', ['status' => 500]);
        }

        $datacenter = explode('-', $mc_key)[1];

        $params = $request->get_body_params();

        if (!isset($params['email'])) {
            return new \WP_Error('NO_EMAIL_PASSED', 'No e-mail address passed', ['status' => 400]);
        }

        $response = new \WP_REST_Response();
        $data = [
            'merge_fields' => []
        ];
        if (isset($params['first_name'])) {
            $data['merge_fields'] ['FNAME']= $params['first_name'];
        }

        if (isset($params['last_name'])) {
            $data['merge_fields'] ['LNAME']= $params['last_name'];
        }

        $data['email_address'] = $params['email'];
        $data['status'] = 'subscribed';

        $client = HttpClient::create();
        try {
            $req = $client->request(
                'POST',
                "https://{$datacenter}.api.mailchimp.com/3.0/lists/2bc0aa7573/members",
                [
                    'auth_basic' => ['anystring', $mc_key],
                    'json' => $data
                ]
            );

            $req->getContent();

            $response->set_data([
                'message' => 'success'
            ]);

            return $response;
        } catch (ClientException $e) {
            return new \WP_Error('MC_ERROR', $e->getMessage());
        }
    }

    public function create_new_user_permission_callback()
    {
        return true;
    }
}
