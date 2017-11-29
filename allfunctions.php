<?php

 //load scripts and styles
 function scriptsAndStyles() {
     //react, react-dom, jquery, bootstrap
     //wp_enqueue_style('style', get_stylesheet_uri());
     wp_enqueue_style('home-style', get_theme_file_uri("/css/style.min.css"));
     wp_enqueue_style('bootstrap', "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
     wp_enqueue_script('jquery', "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.js");
    /* wp_enqueue_script('react', "https://fb.me/react-0.14.3.js");
     wp_enqueue_script('react-dom', "https://fb.me/react-dom-0.14.3.js", array('react'));
     wp_enqueue_script('babel', "https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.js");*/
 wp_enqueue_script('home-scripts', get_template_directory_uri() . '/minjs/main.bundle.js', array(), false, true);
    // wp_enqueue_script('resources', get_template_directory_uri() . '/scripts/resources.js', array());
 }

 function BabelType($tag, $handle, $src) {
    if($handle != 'main'){
        return $tag;
    }
    return '<script src="' . $src . '" type="text/babel"></script>' . "\n";
 }
?>