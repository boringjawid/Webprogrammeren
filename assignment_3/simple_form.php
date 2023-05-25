<?php
/* Header */
$page_title = 'Webprogramming Assignment 3';
$navigation = Array(
    'active' => 'Simple Form',
    'items' => Array(
        'News' => '/WP23/assignment_3/index.php',
        'Add news item' => '/WP23/assignment_3/news_add.php',
        'Leap Year' => '/WP23/assignment_3/leapyear.php',
        'Simple Form' => '/WP23/assignment_3/simple_form.php'
    )
);
include __DIR__ . '/tpl/head.php';
include __DIR__ . '/tpl/body_start.php';
?>

<div class="row">
    <div class="col-md-12">
        <div style="display: none;" id="welcome">
            <h1 id="name-show"></h1>
            <h4 id="place-show"></h4>
        </div>
        <form>
            <div class="form-group">
                <label for="name">Name</label>
                <input required type="text" class="form-control" id="name" name="name" placeholder="Jawid Rahimi">
            </div>
            <div class="form-group">
                <label for="place">Place</label>
                <input required type="text" class="form-control" id="place" name="place" placeholder="Groningen">
            </div>
            <button name="submit" id="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</div>
<script>
function submitForm() {
    let request = $.ajax({
    url: "scripts/ajax_handler.php",
    method: "POST",
    data: {
        name: $('#name').val(),
        place: $('#place').val()
    },
    dataType: "json"
    });

    request.done(function(data) {
        console.log(data.place);
        $('#name-show').text("Welcome, " + data.name + "!");
        if (data.place == 'Groningen') {
            data.place = 'Groningen';
        }
        $('#place-show').text("You're from " + data.place + "!");
        $('#welcome').show();
    });
}

$(function() {
    $('form').submit(function(form) {
        form.preventDefault();
        submitForm();
    });
});
</script>

<?php
include __DIR__ . '/tpl/body_end.php';
?>
