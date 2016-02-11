<?php
	$key = $_REQUEST['key'];
	$re = file_put_contents("CNAME", $key, FILE_APPEND);
	echo $re;
?>