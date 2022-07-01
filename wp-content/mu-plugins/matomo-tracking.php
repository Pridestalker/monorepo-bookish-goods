<?php
/**
 * Plugin Name: Matomo Tracking
 * Plugin URI: https://analytics.mitchhijlkema.nl/
 * Description: Easy tracking injected into the head via Matomo
 * version: 1.0.0
 * Author: Mitch Hijlkema
 */
add_action('wp_head', 'pwk_tracking');

function pwk_tracking()
{
    if (defined('WP_DEBUG') && WP_DEBUG) {
        return;
    }
    ?>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M4M2BBG');</script>
<!-- End Google Tag Manager -->
    <?php
}
