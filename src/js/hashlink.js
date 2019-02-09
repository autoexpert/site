(function ($, window, document) {
	var curentHref = window.location.origin + window.location.pathname,
		docTitle = document.title,
		hashLink = function(element, options){
			if(options.easing) {
				options.easing = (typeof $.easing[options.easing] == 'function') ? options.easing : hashLink.DEFAULTS.easing;
			}
			if(options.kofani){
				options.kofani = options.kofani < 0 ? -options.kofani : options.kofani;
			}
			this.element = element;
			this.options = $.extend({}, hashLink.DEFAULTS, options);
			
			$(element).data("ps.hashLink", this);
			
			var href = this.element.href,
				regex = /\#.+/,
				hash = false,
				m;
			if ((m = regex.exec(href)) !== null) {
				hash = m[0];
				console.log((hash == window.location.hash), hash, window.location.hash)
				if(hash == window.location.hash){
					setTimeout(function(){
						var event = new jQuery.Event( 'click' );
						event.target = element;
						hashLink.prototype.click.call(element, event);
					}, 1500);
				}
			}	
		},
		stopAnimate = function(){
			clearTimeout(timer);
			$(document).unbind("click.ps.hashLink.data-doc");
			$('html, body').stop();
			$(this).trigger("ps.hashLink.stop");
		},
		timer;
		
	hashLink.VERSION = "1.0.0";
	
	hashLink.DEFAULTS = {
		easing: (typeof $.easing.easeInOutQuint == 'function') ? 'easeInOutCirc' : 'swing',
		kofani: .7,
		delay: 200
	};
	
	
	hashLink.prototype.click = function(e){
		console.log("CLICK")
		var $this = $(this),
			href = this.href,
			regex = /\#.+/,
			hash = false,
			$el,
			scrollTop = 0,
			windowScrollTop = 0,
			dif = 0,
			options = $this.data("ps.hashLink").options;
		if ((m = regex.exec(href)) !== null) {
			hash = m[0];
			$el = $(hash);
			if($el.length){
				e.preventDefault();
				e.stopPropagation();
				windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				scrollTop = $el.offset().top;
				
				dif = windowScrollTop - scrollTop;
				
				dif = (dif < 0 ? -dif : dif) * options.kofani;
				
				$('html, body').stop();
				clearTimeout(timer);
				
				timer = setTimeout(
					function(){
						$this.trigger("ps.hashLink.start");
						$(document).on("click.ps.hashLink.data-doc", function(){
							stopAnimate.call($this[0]);
						});
						$('html, body').animate({
								scrollTop: scrollTop
							},
							dif,
							options.easing,
							function(){
								stopAnimate.call($this[0]);
								document.title = $this.text() + " | " + docTitle;
								try {
									var lock = window.location.origin + window.location.pathname;
									window.history.pushState(null, null, lock+hash);
									return !1;
								} catch(e) {
									location.hash = hash;
								}
							}
						);
					},
					options.delay
				);
				return !1;
			}
		}
	}
	
	function Plugin(option){
		return $(this).each(function(){
			var $this = $(this),
				data    = $this.data('ps.hashLink'),
				options = $.extend({}, hashLink.DEFAULTS, $this.data(), typeof option == 'object' && option);
			(!data) && (
				$this.data('ps.hashLink', (data = new hashLink(this, options))),
				$this.trigger("ps.hashLink.init")
			);
		});
	}
	
	var old = $.fn.hashLink;
	
	$.fn.hashLink             = Plugin;
	$.fn.hashLink.Constructor = hashLink;
	
	$.fn.hashLink.noConflict = function () {
		$.fn.hashLink = old;
		return this;
	}
	
	$('[data-plugin="hashLink"]').each(function () {
		var $hashLink = $(this);
		Plugin.call(this, $hashLink.data());
	});
	
	if($('[data-plugin="hashLink"]').length) {
		var arrSection = [];
		$('[data-plugin="hashLink"]').each(function(){
			var $this = $(this),
				href = this.href,
				regex = /\#.+/,
				hash = false;
			if ((m = regex.exec(href)) !== null) {
				arrSection.push("section" + m[0]);
			}
		});
		$(window).on("scroll.hashLink", function(e){
			var winTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			arrSection.forEach(function(a, b, c){
				var el = $(a);
				console.log(el.offset());
			})
		})
	}
	
	$(document).on('click.ps.hashLink.data-api', '[data-plugin="hashLink"]', function(e){
		if(!$(this).data("ps.hashLink")) {
			var $hashLink = $(this)
			Plugin.call(this, $hashLink.data())
		}
		hashLink.prototype.click.call(this, e);
	});
	
})(jQuery, window, document)