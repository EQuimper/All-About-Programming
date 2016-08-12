# Smashing WordPress Themes: Making WordPress Beautiful

## Themes

- **Stylesheet file:** Defines the appearance of your theme, and contains the WordPress-specific theme declaration at the top.
- **Template file:** Usually outputs your content to your Web site with the loop
- **Functions.php file:** Allows you to add other new features (such as plugins)
- **Other files:** Like images, Java Scripts, and so on

---

## Theme Declaration

```css
/*
Theme Name: The Theme Name Goes Here
Theme URI: http://your-theme-url.com
Description: A description of your theme (basic HTML will work).
Author: Your Name
Version: 1.0
Tags: wordpress.org compatible tags
*/
```

---

## Child Theme

In your style.css file, you can define a parent theme that makes your theme a child. I discuss this further in Chapters 3 and 4, but in short, you define the theme that you want WordPress to consider as the parent of your own theme by adding its folder as a parent in your theme’s style.css. This means that the theme will revert to its parent theme whenever it lacks something.

## Loop

When you want to loop through a child theme we can use this code

```php
<? php get_template_part( ‘loop’, ‘index’ ); ?>
```

## A loop with content

The template tags for the loop:

- `the_title()` for outputting the post title
- `the_permalink()` for linking the post title
- `the_title_attribute()` for the proper link title attribute
- `the_content()` for outputting the content
- `the_ID()` for getting the ID of the post
- `post_class()`to output the correct CSS classes for the post

Ex:

```php
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        
        <div id=”post-<?php the_ID(); ?>” <?php post_class(); ?>>
                <h2>
                        <a href=”<?php the_permalink(); ?>” title=”Permalink to <?php the_title_attribute(); ?>”>
                                <?php the_title(); ?>
                        </a>
                </h2>
                <div class=”entry”>
                        <?php the_content(); ?>
                </div>
        </div>
        
<?php endwhile; else: ?>
        <p>Whoa! There’s nothing here!</p>
<?php endif; ?>
```

---

## External loop.php file

We can put all the loop into one file and just include it into the theme

```php
<?php get_template_part(‘loop’); ?>
```

If we have specific loop we can do

```php
<?php get_template_part(‘loop’, ‘author’); ?>
```

---

## Creating a Page Template

Creating a Page template is easy. All you need to do is put the following little code snippet at the very top of your new template file, and it then appears as a Page template for your Pages:

```php
<? php
/*
Template Name: My Page Template Title
*/
?>
```

---

## Passing parameters

### Function-style parameters

We pass params like this:

```php
<?php bloginfo(‘name’); ?>
```

The params here is name.

```php
<?php the_title(‘<h1>’, ‘</h1>’); ?>
```

Here we get the title between `h1` tags

### Query-style parameters

Ex:

```php
<?php wp_tag_cloud(‘number=30&orderby=count’); ?>
```

A simple ampersand separate each query. `&`

```php
<?php $params = array(‘number’    => 30,
                      ‘orderby’   => ‘count’,
                      ‘separator’ => ‘&bull;’ );
wp_tag_cloud($params); ?>”
```

---

