<!DOCTYPE html>
<html>
    <head>
        <title>MyTheme</title>
        <meta charset="utf8" />
        <?php wp_head(); ?>
    </head>
    <body>
    <headers>
        <nav class="menu-header">
            <?php 
                $args = array(
                    'theme_location' => 'primary',
                    'container_class' => 'nav-links'
                );

                wp_nav_menu($args); 
            ?>
            <div class="search-form">
                <form action="/wordpress/" method="get">
                    <input type="text" name="s" id="search" />
                    <button type="submit" >Rechercher</button>
                    <input type="hidden" name="post_type" id="post_type" value="post" />
                </form>
            </div>
        </nav>
    </headers>




