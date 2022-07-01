<?php

namespace App\Mail;

defined('ABSPATH') || exit(0);

use Timber\Timber;
use App\Helpers\WP;
use Symfony\Component\Mime\Email;
use Symfony\Component\Mime\Address;

abstract class Mailable
{
    /**
     * @var Email
     */
    protected $mail;
    /**
     * @var Address|string|null
     */
    protected $from = null;
    /**
     * @var Address|string|null
     */
    protected $to = null;
    /**
     * @var Address|string|null
     */
    protected $cc = null;
    /**
     * @var Address|string|null
     */
    protected $bcc = null;
    /**
     * @var Address|string|null
     */
    protected $replyTo = null;
    protected $priority = Email::PRIORITY_NORMAL;
    protected $subject = null;
    protected $template = null;
    protected $data = [];

    public function __construct(Email $mail)
    {
        $this->mail = $mail;
        $this->data = Timber::get_context();
        $this->css_location = WP::getStylesheetDir() . '/dist/styles/mail.css';
    }

    abstract public function build();

    public function __set($name, $value)
    {
        $this->data[$name] = $value;
    }

    public function __get($name)
    {
        return $this->data[$name];
    }

    public function __isset($name)
    {
        return isset($this->data[$name]);
    }

    /**
     * @param string $from
     */
    public function setFrom(string $from): void
    {
        $this->from = $from;
    }

	/**
	 * @param string      $to
	 * @param string|null $name
	 */
    public function setTo(string $to, string $name = null): void
    {
        if ($name) {
            $this->to = new Address($to, $name);
        } else {
            $this->to = $to;
        }
    }

    /**
     * @param string $cc
     */
    public function setCc(string $cc): void
    {
        $this->cc = $cc;
    }

    /**
     * @param string $bcc
     */
    public function setBcc(string $bcc): void
    {
        $this->bcc = $bcc;
    }

    /**
     * @param string $replyTo
     */
    public function setReplyTo(string $replyTo): void
    {
        $this->replyTo = $replyTo;
    }

    /**
     * @param int $priority
     */
    public function setPriority(int $priority): void
    {
        $this->priority = $priority;
    }

    /**
     * @param string $subject
     */
    public function setSubject(string $subject): void
    {
        $this->subject = $subject;
    }

    /**
     * @param null $template
     */
    public function setTemplate($template): void
    {
        $this->template = $template;
    }
}
