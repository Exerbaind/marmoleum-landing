<?php 
$name = $_POST['userName'];
$tel = $_POST['userTel'];

$name = htmlspecialchars($name);
$tel = htmlspecialchars($tel);

$name = urldecode($name);
$tel = urldecode($tel);

$name = trim($name);
$tel = trim($tel);

mail("digr98@gmail.com", "Заявка с сайта", "Имя: ".$name.", Телефон: ".$tel);

header('Location: https://gelster.ru/new/marmoleum-landing/index.html');
exit;

?>