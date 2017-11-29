

    <?php 
        $args = array(
            'theme_location' => 'secondary',
            'container_class' => 'menu-footer'
        );

        wp_nav_menu($args); 
    ?>

<div id="theme_footer">
        <?php wp_footer(); ?>
    </div>
    </body>
</html>