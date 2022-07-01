<?php

namespace App\Mail\Order\Status;

defined('ABSPATH') || exit(0);

use Timber\Timber;
use App\Mail\Mailable;
use App\Helpers\Template;

class PaymentReceived extends Mailable
{
    protected $from = 'info@bookishgoods.nl';
    protected $template = 'customer/payment-received';
    protected $subject = 'Jouw betaling bij Bookish Goods is ontvangen!';

    public function build()
    {
        $this->mail->from($this->from);
        $this->mail->subject($this->subject);
        $this->mail->to($this->to);
        $data = Timber::compile(Template::emailHtmlTwigFile($this->template), $this->data);
        $this->mail->html($data);

        return $this->mail;
    }
}
