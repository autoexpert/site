(function ($, window, document) {
	
	var ShrGo = function(element, options){
			this.element = element;
			this.options = $.extend({}, ShrGo.DEFAULTS, options);
			if(!this.options.title) {
				this.options.title = $('meta[name="title"]').attr("content") || $("head title").text() || "";
			}
			if(!this.options.description) {
				this.options.description = $('meta[name="description"]').attr("content") || null;
			}
			if(!this.options.image) {
				this.options.image = $('meta[name="image"]').attr("content") || null;
			}
			switch(this.options.window){
				case "svksh":
					$(element).attr({
						title: "Поделиться в VK"
					})
					break;
				case "soksh":
					$(element).attr({
						title: "Поделиться на ОДНОКЛАССНИКАХ"
					})
					break;
				case "stwsh":
					$(element).attr({
						title: "Поделиться в TWITTER"
					})
					break;
				case "sfbsh":
					$(element).attr({
						title: "Поделиться на FACEBOOK"
					})
					break;
				default:
					$(element).attr({
						title: "Поделиться на GOOGLE+"
					})
					break;
			}
			$(element).data("ps.shrgo", this);
		};
		
	ShrGo.VERSION = "1.0.0";
	
	ShrGo.DEFAULTS = {
		window: 'sgpsh',
		title: null,
		description: null,
		image: null,
		link: window.location.href
	};
	
	
	ShrGo.prototype.click = function(e){
		e.preventDefault();
		e.stopPropagation();
		var options = $(this).data("ps.shrgo").options,
			data = [],
			url = encodeURIComponent(options.link),
			stamp = "&vt=" + (new Date()).getTime(),
			str = "",
			name = document.location.hostname,
			w = Math.floor(window.screen.width / 2),
			h = Math.floor(window.screen.height / 2),
			option = "width="+w+",height="+h+",status=no,toolbar=no,menubar=no";
			
		$(this).blur();
		
		switch(options.window) {
			// VK
			case "svksh":
				str = "https://vk.com/share.php?url=" + 
						url + 
						(options.title ? "&title=" + encodeURIComponent(options.title) : "") +
						(options.description ? "&description=" + encodeURIComponent(options.description) : "") +
						(options.image ? "&image=" + encodeURIComponent(options.image) : "") +
						"&noparse=false" + 
						stamp;
				break;
			// OK
			case "soksh":
				str = "https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=" + 
					url + 
					stamp;
				break;
			// TW
			case "stwsh":
				str = "https://twitter.com/intent/tweet?url=" + 
						url + 
						(options.title ? "&title=" + encodeURIComponent(options.title) : "") +
						(options.description ? "&description=" + encodeURIComponent(options.description.substr(0, 100)) : "") +
						stamp;
				break;
			// FB
			case "sfbsh":
				str = "http://www.facebook.com/sharer.php?s=100&p[url]=" +
						url +
						(options.title ? "&p[title]=" + encodeURIComponent(options.title) : "") +
						(options.description ? "&p[summary]=" + encodeURIComponent(options.description) : "") +
						(options.image ? "&p[images][0]=" + encodeURIComponent(options.image) : "") +
						stamp;
				break;
			default:
				str = "https://plus.google.com/share?url=" + 
						url + 
						"&hl=ru" + 
						stamp;
				break;
		}
		window.open(str, name, option);
		return !1;
	}
	
	function Plugin(option){
		return $(this).each(function(){
			var $this = $(this),
				data    = $this.data('ps.shrgo'),
				options = $.extend({}, ShrGo.DEFAULTS, $this.data(), typeof option == 'object' && option);
			(!data) && (
				$this.data('ps.shrgo', (data = new ShrGo(this, options))),
				$this.trigger("ps.shrgo.init")
			);
		});
	}
	
	var old = $.fn.shrgo;
	
	$.fn.shrgo             = Plugin;
	$.fn.shrgo.Constructor = ShrGo;
	
	$.fn.shrgo.noConflict = function () {
		$.fn.shrgo = old;
		return this;
	}
	
	$('[data-plugin="shrgo"]').each(function () {
		var $shrgo = $(this)
		Plugin.call(this, $shrgo.data())
	});
	
	$(document).on('click.ps.shrgo.data-api', '[data-plugin="shrgo"]', function(e){
		if(!$(this).data("ps.shrgo")) {
			var $shrgo = $(this)
			Plugin.call(this, $shrgo.data())
		}
		ShrGo.prototype.click.call(this, e);
	});
	
})(jQuery, window, document)