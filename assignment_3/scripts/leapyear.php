<?php
$export_data = [
 'name' => $_POST['name'],
 'age' => $_POST['age'],
 'address' => $_POST['address'],
 'place' => $_POST['place']
];
header('Content-Type: application/json');
echo json_encode($export_data);
?>