<?php

/*
Plugin Name: Custom Related Products
Description: Generate Related Products lists based on custom metadata fields (rather than category/tags), sorting by simularity.
Version: 1.0
*/


/** Use custom query for related products */
function custom_related_products_query($query, $product_id)
{
	global $wpdb;
	$posts_table = $wpdb->prefix . 'posts';
    $weights = [
        'stof' => 6,
        'materiaal' => 1,
    ];

    $subexpressions = []
    ;
    foreach ($weights as $field => $weight) {
        $taxonomy                    = esc_sql('pa_' . $field);
        $weight                      = (float) ( $weight );
        $subexpressions[ $taxonomy ] = "WHEN '$taxonomy' THEN $weight";
    }
    $sql       = 'SELECT p2.ID AS score_id,
   SUM(CASE tt1.`taxonomy` ' . implode(' ', $subexpressions) . ' ELSE 0 END) AS score
    FROM ' . $posts_table .' p1
        INNER JOIN ' .$wpdb->prefix . 'term_relationships tr1 ON (tr1.object_id = p1.ID)
        INNER JOIN ' .$wpdb->prefix . 'term_taxonomy tt1 ON (tt1.term_taxonomy_id = tr1.term_taxonomy_id)
        INNER JOIN ' .$wpdb->prefix . 'terms t1 ON (t1.term_id = tt1.term_id)
        INNER JOIN ' .$wpdb->prefix . 'term_relationships tr2 ON tr2.term_taxonomy_id = tt1.term_taxonomy_id
        INNER JOIN ' .$wpdb->prefix . 'posts p2 ON p2.ID=tr2.object_id
    WHERE p1.ID=' . (int) $product_id . '
        AND p2.ID !=' . (int) $product_id . '
    GROUP BY score_id
    ORDER BY `score` DESC';

    $query['join'] = ' INNER JOIN (' . $sql . ') AS `score` ON `score`.score_id = p.ID';

    $query['limits'] = ' LIMIT 4';
    $query['where'] = str_replace(' AND exclude_join.object_id IS NULL ', '', $query['where']);

    return $query;
}

add_filter('woocommerce_product_related_posts_query', 'custom_related_products_query', 10, 2);
add_filter('woocommerce_product_related_posts_relate_by_category', '__return_empty_array');
add_filter('woocommerce_product_related_posts_force_display', '__return_true');
