!(function($){
	var defaultOptions = {
			scaleKof: 0.14,
			scale: 1,
			speed: 500,
			ease: 'easeOutCirc'
		},
		
		methods = {
			init: function(options){
				var option = $.extend(defaultOptions, options);
				return this.each(function(){
					var $this = $(this),
						$parent = $($this.parent()),
						kof = option.scaleKof,
						speed = option.speed,
						ease = option.ease,
						scale = option.scale;
					$(window).on('resize.background scroll.background initBackground.background', function(){

						//if(window.)
						var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
							offset = $parent.offset(),
							height = $parent.outerHeight(),
							top = scrollTop - offset.top,
							topHeight = offset.top + height;
						if((top >= 0) && (scrollTop <= topHeight)){
							!$this.hasClass('will') && $this.addClass('will');
							var t = top / height,
								t1 = (kof * t * scale) + 1,
								ty = top * kof * 2;
							$this.css({
								transition: ""
							}).stop().animate({
								transform: 'translateY('+ty+'px)',//scaleX('+t1+') scaleY('+t1+') 
							}, speed, ease)
						}else{
							$this.hasClass('will') && $this.stop().css({
								transform : ""
							}).removeClass('will');
						}
						if(scrollTop >= topHeight *.5 - 140) {
							!$('body').hasClass('scroling') && $('body').addClass('scroling')
						}else{
							$('body').hasClass('scroling') && $('body').removeClass('scroling')
						}
					}).trigger('initBackground.background');
				});
			},
			destroy: function(){
				return this.each(function(){
					var $this = $(this);
					$(window).unbind('resize.background scroll.background initBackground.background');
					$this.stop().removeClass('will').css({
						transform: ""
					});
				});
			}
		};
	$.fn.backgroundEffect = function( method ) {
		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Метод с именем ' +  method + ' не существует для jQuery.backgroundEffect' );
		}
	};
}(jQuery))
