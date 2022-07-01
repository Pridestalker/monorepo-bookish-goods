<?php
/**
 * @version     3.6.0
 * @var array $catalog_orderby_options
 * @var $orderby
 */

defined('ABSPATH') || exit(0);

?>
<form class="woocommerce-ordering inline-block relative w-64" method="get">
    <select name="orderby" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline" aria-label="<?php esc_attr_e('Shop order', 'woocommerce'); ?>">
        <?php foreach ($catalog_orderby_options as $id => $name) : ?>
            <option value="<?php echo esc_attr($id); ?>" <?php selected($orderby, $id); ?>><?php echo esc_html($name); ?></option>
        <?php endforeach; ?>
    </select>
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
    </div>
    <input type="hidden" name="paged" value="1" />
    <?php wc_query_string_form_fields(null, ['orderby', 'submit', 'paged', 'product-page']); ?>
</form>

<style>
  .woocommerce-ordering::after {
      background-image: url("data:image/svg+xml,%3Csvg class='fill-current h-4 w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z'/%3E%3C/svg%3E");
      content: ' ';
      position: absolute;
      z-index: 10;
      width: 1rem;
      height: 1rem;
      top: 0.7rem;
      right: 0.5rem;
      background-size: contain;
  }
</style>
