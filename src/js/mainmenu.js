!(function($){
	$('body').data({padding:""});
	var $body = $('body'),
		$hd = $('header.header .header-wrapper'),
		clickButton = function(e){
			e.preventDefault();
			var $this = $(this),
				$menu = $($this.attr('data-target-menu')),
				$ul = $(">ul", $menu),
				height = $ul.outerHeight(),
				w1 = $body.outerWidth(true),
				w2 = 0,
				w3 = 0;
			if($this.hasClass('open'))
			{
				$this.removeClass('open');
				$body.removeClass('openmenu');
				$body.css({
					"paddingRight": ""
				}).data({padding:0});
				$('.header-container-line, .header-container-nav').css({
					"paddingRight": ""
				});
				$menu.addClass('aniul').removeClass('open').stop().animate({
					trans: 0
				}, 800, 'linear', function(){
					$menu.removeClass('open aniul');//.css({height:''});
					$($menu.closest('.header-wrapper')).removeClass('open');
				}, 100)
			} else {
				$this.addClass('open');
				$('body').addClass('openmenu');
				w2 = $body.outerWidth(true);
				w3 = w2 - w1,
				pr = window.innerWidth > 767 ? 40 : 10;
				if(w1 != w2) {
					$body.css({
						"paddingRight": w3+'px'
					}).data({padding:w3});
					$('.header-container-line, .header-container-nav').css({
						"paddingRight": pr+w3+'px'
					});
				}
				height = $ul.outerHeight();
				$($menu.closest('.header-wrapper')).addClass('open');
				$menu/*.css({
					height: height
				})*/.addClass('open').removeClass('aniul').stop().animate({
					trans: 800
				}, 800, 'linear', function(){
					
				}, 100)
			}
			return !1;
		},
		resizeWinMenu = function(e){
			var p = $body.data('padding'),
				w = window.innerWidth;
			if(p){
				if(w < 1020){
					$body.css({
						"paddingRight": p+"px"
					}).addClass("openmenu");
					$('.header-container-line, .header-container-nav').css({
						"paddingRight": 40 + p + 'px'
					});
				}else{
					$body.css({
						"paddingRight": ""
					}).removeClass("openmenu");
					$('.header-container-line, .header-container-nav').css({
						"paddingRight": ""
					});
				}
			}
		}
	$(document).on('click.autoexpertMainMenu', '[data-target-menu]', clickButton);
	$(window).on('resize.autoexpert.menu', resizeWinMenu).trigger('resize.autoexpert.menu');
}(jQuery));