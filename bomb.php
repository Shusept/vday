<?php
	$key = $_REQUEST['key'];
	$re = file_put_contents("1.txt", $key, FILE_APPEND);
	echo $re;
?>