<?php
function getFileTime($path){
	$dir = 
	$file = "/".trim(trim($path),"\t .&?\\/");
	$server = dirname(__FILE__);
	if(is_file($server.$file)){
		$file = $path."?".filemtime($server.$file);
	}else{
		$file = $path."?".time();
	}
	return trim($file,"\t .&?\\/");
}
function getFileContent($path, $type="html"){
	$return = "";
	$file = "/".trim(trim($path),"\t .&?\\/");
	$server = dirname(__FILE__);
	if(is_file($server.$file)){
		$return = file_get_contents($server.$file);
		$re = '/((?:\/\*.+\*\/)(?:(?:\s)+)?)/Us';
		$return = trim(preg_replace($re, "", $return));
		$re = '/\/assets\//m';
		$return = trim(preg_replace($re, "assets/", $return));
		switch($type){
			case "js":
				$return = "\n\t<script>\n\t\t".$return."\n\t</script>\n";
				break;
			case "css":
				$return = "\n\t<style>\n\t\t".$return."\n\t</style>\n";
				break;
		}
	}
	return $return;
}
function last_number ($num) {
	$text = '';
	$now_date = date("Y");
	$diff = $now_date - $num;
	$diff = intval($diff / 5) * 5;
	$last_num = ($diff % 10);
	if ($diff < 21) {
		switch ($diff) {
			case 0:
				$god_goda_let = 'лет';
				break;
			case 1:
				$god_goda_let = 'год';
				break;
			case 2:
			case 3:
			case 4:
				$god_goda_let = 'года';
				break;
			default:
				$god_goda_let = 'лет';
				break;
		}
	} else {
		if ($last_num == 1) {
			$god_goda_let = 'год';
		}elseif ($last_num == 2 or $last_num == 3 or $last_num == 4) {
			$god_goda_let = 'года';
		}else{
			$god_goda_let = 'лет';
		}
	}
	$total = "$diff $god_goda_let";
	return $total;
}

?>