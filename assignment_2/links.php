<?php
/* Header */
$page_title = 'Webprogramming Assignment 2 - Home';
$navigation = Array(
    'active' => 'Home',
    'items' => Array(
        'Home' => '/WP23/assignment_2/index.php',
        'Links' => '/WP23/assignment_2/links.php',
        'News' => '/WP23/assignment_2/news.php',
        'Future' => '/WP23/assignment_2/future.php'
    )
);
include __DIR__ . '/tpl/head.php';
/* Body */
include __DIR__ . '/tpl/body-start.php';
?>
<div class="col-md-12">
    <h1>Welcome to my site!</h1>
    <p>This is the home page.</p>
</div>
<?php
include __DIR__ . '/tpl/body-end.php';
/* Footer */
include __DIR__ . '/tpl/footer.php';
?>


<div class="col-md-12">
    <h1>Links</h1>

    <button id="fade-toggle">Fade Toggle</button>

    <ul id="link-list">
        <li><a href="https://www.google.com" target="_blank">Google</a></li>
        <li><a href="https://www.github.com" target="_blank">Github</a></li>
        <li><a href="https://www.facebook.com" target="_blank">Facebook</a></li>
    </ul>

    <div>
        <input type="text" id="link-name" placeholder="Link name">
        <input type="text" id="link-url" placeholder="Link URL">
        <button id="add-link">Add Link</button>
    </div>

    <button id="delete-mode">Delete Mode</button>

</div>

<?php
include __DIR__ . '/tpl/body-end.php';
/* Footer */
include __DIR__ . '/tpl/footer.php';
?>
