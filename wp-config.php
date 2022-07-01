<?php

const WP_CACHE = true; // Added by WP Rocket

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
const DB_NAME = 'wordpress';

/** Database username */
const DB_USER = 'wordpress';

/** Database password */
const DB_PASSWORD = 'wordpress';

/** Database hostname */
const DB_HOST = 'database';

/** Database charset to use in creating database tables. */
const DB_CHARSET = 'utf8';

/** The database collate type. Don't change this if in doubt. */
const DB_COLLATE = '';

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '*l%3X1$#$u*)mN6x?HX2S |vHNZB/y1kz?s^rR}KDwhstB.*l=(2[-=@m:pdHy9f');
define('SECURE_AUTH_KEY', 'zL7v@B1QRFI~38oZhdUd*VrW2U5N0gj)/;b%SLF96E<5n0F-93m>0]!eAM2I4+oB');
define('LOGGED_IN_KEY', 'wpHvysmHWi-2;cMoMP-1k,7Y9tg<l{fhtKg(aau.2o>;4{())A9?D7%Y[lrA>{y ');
define('NONCE_KEY', 'z:an{Tt_Th87t4v}4/48E ]&ccD-Sogod*Qje-3d,E>+J?g=LAG?z9O{+Il`aRJM');
define('AUTH_SALT', 'UZnyW1,MNHG-!ucGL)u=~?_M0GvW/%!-=Cm#2r}U{6WVo,7nRpn21+xx+sD(IWCb');
define('SECURE_AUTH_SALT', ':#uQZ/NPZZ+Q,G-M]YPHR:2rR|a%,SpKn<2N1gb<%-)8DFqQI7T}jvf/8DLB?P_i');
define('LOGGED_IN_SALT', 'nlT- c[Y&ys|SLxuX>;zEOVWo(Z*G>mD8mGyinlsSoXw=xNF}vVEQ+?w0BRB*R$k');
define('NONCE_SALT', '.+viu3Iw$ jCvzxg<<i@OGpt^6G>~,T=LBYspbz?omI@AUQYz2X97A^}~p%_M5%5');
define('WP_CACHE_KEY_SALT', '0Phb+}7!#gq4OxIf4Xpw`<VHCVwc.Dva1FqnLN$ybN],!dEy)jCF<CFIs`1y.6#W');


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'kpm_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
const WP_DEBUG = 1;

const DISABLE_WP_CRON = 1;

/* Add any custom values between this line and the "stop editing" line. */


/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
    define('ABSPATH', __DIR__ . '/');
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
