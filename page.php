<?php get_header(); ?>

<div class="main">
    Inside Page
    <h1> <?php wp_title() ?> </h1>
    <?php get_template_part('content') ?>
</div>

<?php get_footer(); ?>