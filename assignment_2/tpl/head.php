<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title><?php echo $page_title; ?></title>
    <link rel="stylesheet" href="bootstrap.min.css">
    <link rel="stylesheet" href="css/styles.css">
    <script src="https://code.jquery.com/jquery-latest.min.js"></script>
    <script type="application/javascript" src="js/main.js"></script>
    <script type="application/javascript" src="js/links.js"></script>
  </head>
  <body>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">Webprogramming</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <?php foreach ($navigation['items'] as $name => $url) { ?>
                <li class="nav-item <?php echo ($navigation['active'] === $name) ? 'active' : ''; ?>">
                  <a class="nav-link" href="<?php echo $url; ?>"><?php echo $name; ?></a>
                </li>
              <?php } ?>
            </ul>
          </div>
        </div>
      </nav>
    </header>
