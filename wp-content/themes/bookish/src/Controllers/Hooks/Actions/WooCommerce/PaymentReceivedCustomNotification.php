<?php

namespace App\Controllers\Hooks\Actions\WooCommerce;

defined('ABSPATH') || exit(0);

use App\Mail\Mailer;
use App\Helpers\Log;
use App\Mail\Mailable;
use App\Bootstrap\Container;
use App\Controllers\Hooks\Actions\Action;
use App\Mail\Order\Status\PaymentReceived;

class PaymentReceivedCustomNotification extends Action
{

    /**
     * @param null|int       $order_id
     * @param null|\WC_Order $order
     *
     * @throws \DI\DependencyException
     * @throws \DI\NotFoundException
     */
    public function action($order_id = null, $order = null)
    {
        /** @var Mailable $mail */
        $mail = Container::get(PaymentReceived::class);
        $mail->setTo($order->get_billing_email(), $order->get_billing_first_name() . ' ' . $order->get_billing_last_name());
        $mail->setSubject("Jouw betaling voor bestelling $order_id bij Bookish Goods is ontvangen!");
        $mail->order_id = $order_id;
        $mail->order    = $order;

        Mailer::send($mail);
    }

    public function hook()
    {
        return 'woocommerce_order_status_payment-received';
    }

    public function priority(): int
    {
        return 20;
    }

    public function parameterCount (): int {
	    return 2;
    }
}
