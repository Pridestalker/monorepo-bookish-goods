<?php

namespace App\Providers;

defined('ABSPATH') || exit(0);

use App\Bootstrap\Container;
use App\Controllers\Hooks\Actions\Action;
use App\Controllers\Hooks\Actions\Init;
use App\Controllers\Hooks\Actions\Layouts\InjectFooter;
use App\Controllers\Hooks\Actions\Layouts\InjectHeader;
use App\Controllers\Hooks\Actions\Layouts\InjectMiniCart;
use App\Controllers\Hooks\Actions\Layouts\InjectNavigation;
use App\Controllers\Hooks\Actions\Layouts\InjectSearchForm;
use App\Controllers\Hooks\Actions\Layouts\Product\InjectProductHeader;
use App\Controllers\Hooks\Actions\Layouts\RenderProductCard;
use App\Controllers\Hooks\Actions\WooCommerce\ApplyCookieCouponCode;
use App\Controllers\Hooks\Actions\WooCommerce\CheckForCouponCookie;
use App\Controllers\Hooks\Actions\WooCommerce\OrderStatusPaymentReceived;
use App\Controllers\Hooks\Actions\WooCommerce\PaymentReceivedCustomNotification;
use App\Controllers\Hooks\Actions\WooCommerce\RemoveCouponCookieWhenCouponRemoved;
use App\Controllers\Hooks\Filters\Content\AddBodyClasses;
use App\Controllers\Hooks\Filters\Content\DisableGutenberg;
use App\Controllers\Hooks\Filters\Content\UpscaleProductHeadingsToWC;
use App\Controllers\Hooks\Filters\Filter;
use App\Controllers\Hooks\Filters\Twig\AddTwigExtensions;
use App\Controllers\Hooks\Filters\WooCommerce\ChangeCheckoutClass;
use App\Controllers\Hooks\Filters\WooCommerce\CustomOrderAction;
use App\Controllers\Hooks\Filters\WooCommerce\CustomSingleOrderStatus;
use App\Controllers\Hooks\Filters\WooCommerce\CustomStockStatus;
use App\Controllers\Hooks\Filters\WooCommerce\HideKlarnaForPreOrders;
use App\Controllers\Hooks\Filters\WooCommerce\ProductFromProductId;
use App\Controllers\Hooks\Filters\WooCommerce\StoreClassToBody;
use App\Controllers\Hooks\Filters\WooCommerce\WooCommerceAccountPage;

class HookServiceProvider extends ServiceProvider
{
    /**
     * @var Action[]
     */
    protected array $actions = [];

    /**
     * @var Filter[]
     */
    protected array $filters = [];
    protected array $actions_unhook = [];
    protected array $filters_unhook = [];

    public function boot(): void
    {
        $this->filters = apply_filters('bookish/providers/filters', [
            ProductFromProductId::class,
            ChangeCheckoutClass::class,
            AddTwigExtensions::class,
            CustomSingleOrderStatus::class,
            CustomOrderAction::class,
            StoreClassToBody::class,
            CustomStockStatus::class,
            UpscaleProductHeadingsToWC::class,
            WooCommerceAccountPage::class,
            HideKlarnaForPreOrders::class,
            AddBodyClasses::class,
            DisableGutenberg::class,
        ]);

        $this->actions = apply_filters('bookish/providers/actions', [
            Init::class,
            [
                'hook' => 'woocommerce_review_order_before_payment',
                'callback' => 'woocommerce_checkout_coupon_form',
            ],
            OrderStatusPaymentReceived::class,
            PaymentReceivedCustomNotification::class,
            CheckForCouponCookie::class,
            ApplyCookieCouponCode::class,
            RemoveCouponCookieWhenCouponRemoved::class,
            InjectHeader::class,
            InjectMiniCart::class,
            InjectSearchForm::class,
            InjectNavigation::class,
            InjectFooter::class,
            RenderProductCard::class,
            InjectProductHeader::class,
        ]);

        $this->filters_unhook = apply_filters('bookish/providers/filters/unhook', []);

        $this->actions_unhook = apply_filters('bookish/providers/actions/unhook', [
            'woocommerce_before_checkout_form' => [
                'name' => 'woocommerce_checkout_coupon_form',
                'priority' => 10,
            ],
        ]);
    }

    public function register(): void
    {
        foreach ($this->actions as $key => $action) {
            if (is_array($action)) {
                add_action($action['hook'], $action['callback']);
            } elseif (class_exists($action) && is_subclass_of($action, Action::class)) {
                $called = Container::get($action);
                add_action($called->hook(), [$called, 'action'], $called->priority(), $called->parameterCount());
            }
        }

        foreach ($this->filters as $key => $filter) {
            if (is_array($filter)) {
                add_filter($filter['hook'], $filter['callback']);
            } elseif (class_exists($filter) && is_subclass_of($filter, Filter::class)) {
                $called = Container::get($filter);
                add_filter($called->hook(), [$called, 'filter'], $called->priority(), $called->parameterCount());
            }
        }

        foreach ($this->actions_unhook as $hook => $item) {
            remove_action($hook, $item['name'], $item['priority']);
        }

        foreach ($this->filters_unhook as $hook => $item) {
            remove_filter($hook, $item['name'], $item['priority']);
        }
    }
}
