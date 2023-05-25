<?php
/* Header */
$page_title = 'Webprogramming Assignment 3';
$navigation = Array(
    'active' => 'Leap Year',
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
            <p>The next 5 leap years this will be your age:</p>
            <p id="place-show"></p>
            <div id="table-container">
                <table id="leapYearTable" class="table table-dark">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                </table>

            </div>
        </div>
        <form class="needs-validation">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" name="name" placeholder="Jawid Rahimi" required>
                <div class="invalid-feedback">Please enter your name.</div>
            </div>
            <div class="form-group">
                <label for="age">Age</label>
                <input type="text" class="form-control" id="age" name="age" placeholder="20" value="20" required>
                <div class="invalid-feedback">Please enter your age.</div>
            </div>
            <div class="form-group">
                <label for="address">Address</label>
                <input type="text" class="form-control" id="address" name="address" placeholder="Vondellaan" value="Vondellaan" required>
                <div class="invalid-feedback">Please enter your address.</div>
            </div>
            <div class="form-group">
                <label for="place">Place</label>
                <input type="text" class="form-control" id="place" name="place" placeholder="Groningen" value="Groningen" required>
                <div class="invalid-feedback">Please enter your place.</div>
            </div>
            <button name="submit" id="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</div>
<script src="scripts/leapyear.js"></script>
<?php
include __DIR__ . '/tpl/body_end.php';
?>
