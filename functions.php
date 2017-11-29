<?php

    get_template_part("allfunctions");
    add_action('wp_enqueue_scripts', 'scriptsAndStyles');
    //add_filter('script_loader_tag', 'BabelType', 10, 3);
    register_nav_menu('primary', 'Navigation in the menu');
    register_nav_menu('secondary', 'Navigation in the footer');

    function add_read_more_to_excerpt($excerpt){
        return $excerpt . '... <a href="' . get_permalink(get_the_ID()) . '">Lire la suite</a>'; 
    }
    add_filter('get_the_excerpt', 'add_read_more_to_excerpt');
?>