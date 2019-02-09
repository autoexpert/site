
<script>
	<!--include ../js/home.js-->		
		yepnope('https://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js', undefined, function() {
			if(typeof WebFont == 'object') {
				WebFont.load({
					google: {
						families: [
							"Roboto:100,100italic,300,300italic,regular,italic,400,400italic,regular,italic,500,500italic,700,700italic,900,900italic:latin,cyrillic,cyrillic-ext",
						]
					}
				});
			}
			yepnope.injectCss({
				href: '<?php echo getFileTime("/assets/templates/autoexpert/css/animate.css");?>'
			});
			yepnope('<?php echo getFileTime("/assets/templates/autoexpert/js/app.js");?>', undefined, function() {
				yepnope('<?php echo getFileTime("/assets/templates/autoexpert/js/hypher.js");?>', undefined, function() {
					yepnope('<?php echo getFileTime("/assets/templates/autoexpert/js/main.js");?>', undefined, function(){

					})
				})
			})
		});
</script>