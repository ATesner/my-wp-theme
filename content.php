<?php 
    while(have_posts()) : the_post(); 
?>
    <article class="post">
       
        <?php if(is_single()) : ?>
            <span class="post-info"> <?php the_author(); ?> | <?php echo the_category(", "); ?> </span>
            <p> <?= the_content() ?></p>
        <?php else: ?>
            <h3> <?= the_title() ?></h3>
            <span class="post-info"> <?php the_author(); ?> | <?php echo the_category(", "); ?> </span>
            <p> <?= the_excerpt(); ?>
        <?php endif; ?>

    </article>
<?php endwhile; ?>
