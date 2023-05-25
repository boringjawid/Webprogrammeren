<?php
$export_data = [
 'name' => $_POST['name'],
 'place' => $_POST['place']
];
header('Content-Type: application/json');
echo json_encode($export_data);
?>