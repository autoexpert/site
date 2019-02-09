<?php
$content = ob_get_contents();
ob_end_clean();
$pathArr = pathinfo(__FILE__);
$file_name =  $pathArr["filename"].".html";
file_put_contents($file_name, $content);

$out = microtime(true) - $start;
if($_SERVER["DOCUMENT_ROOT"]):
	echo $content;
endif;
exit;