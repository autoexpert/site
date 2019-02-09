(function ($, window, document) {
	var ControlGetDirections = function(controlUI){
		var control = this,
			container = $('<div />', {
				'class': 'page-contact-detail-control-ui-wrapper'
			}).append($('<span />', {
				'class': 'page-contact-detail-control-ui-link'
			}).text("Проложить маршрут"));
		return $(controlUI).append(container);
	}
	var apikey= 'AIzaSyAqObB5jDzWbLoN0_oDxajFw9IsCYrcAjc',
		GoogleMapWidget = function(element, options){
			//console.log("GoogleMapWidget ", options);
			var gmw = this;
			this.infoWindow = [];
			this.element = element;
			this.options = $.extend({}, GoogleMapWidget.DEFAULTS, options);
			this.gmap = new google.maps.Map(this.element, {
				zoom: this.options.zoom,
				center: this.options.center
			});
			this.q = (this.options.route ? "https://www.google.com/maps?z="+this.options.zoom+"&daddr="+this.options.route : false)
			var controlContainer = $('<span />', {
					'class': 'page-contact-detail-control-ui'
				}).on('click', function(e){
					gmw.openRoute.call(gmw, e)
				}),
				controlUI = new ControlGetDirections(controlContainer);
			this.gmap.controls[google.maps.ControlPosition.TOP_LEFT].push(controlUI[0]);
			this.gmap.addListener('click', function(e){
				gmw.infoWindow.forEach(function(a, b, c){
					gmw.infoWindow[b].close();
				});
			});
			
			controlUI.targetWG = this;
		};
		
	GoogleMapWidget.VERSION = "1.0.0";
	
	GoogleMapWidget.DEFAULTS = {
		latlong: {
			lat: -25.363,
			lng: 131.044
		},
		zoom: 4,
		center: {
			lat: -25.363,
			lng: 131.044
		},
		marker: 'assets/templates/autoexpert/images/marker.png',
		title: "",
		address: "",
		work: "",
		phone: "",
		route: ""
	};
	GoogleMapWidget.infoWindow = [];
	
	GoogleMapWidget.prototype.openRoute = function(e){
		if(typeof e == "object"){
			(typeof e.preventDefault == "function") && e.preventDefault();
		}
		var gmw = this;
		gmw.infoWindow.forEach(function(a, b, c){
			gmw.infoWindow[b].close();
		});
		gmw.q && setTimeout(function(){
			window.open(gmw.q);
		}, 100);
		return !1
	}
	
	
	function Plugin(option){
		return $(this).each(function(){
			var $this = $(this),
				data    = $this.data('googlemap'),
				options = $.extend({}, GoogleMapWidget.DEFAULTS, $this.data(), typeof option == 'object' && option);
			if(typeof options.center == 'string') {
				options.center = JSON.parse(options.center);
			}
			if(typeof options.latlong == 'string') {
				options.latlong = JSON.parse(options.latlong);
			}
			//console.log("OPTIONS", options)
			(!data) && (
				$this.data('googlemap', (data = new GoogleMapWidget(this, options))),
				$this.trigger("ps.googlemap.init")
			);
			
		});
	}
	
	var old = $.fn.googlemap;
	
	$.fn.googlemap             = Plugin;
	$.fn.googlemap.Constructor = GoogleMapWidget;
	
	$.fn.googlemap.noConflict = function () {
		$.fn.googlemap = old;
		return this;
	}
	
	window.callbackGoogleMap = function(){
		$('[data-plugin="googlemap"]').each(function () {
			var $googlemap = $(this)
			Plugin.call(this, $googlemap.data())
		});
		delete window.callbackGoogleMap;
	}
	
	$(window).on('load', function () {
		//apikey
		var $head = $("head"),
			script = '<script async defer src="https://maps.googleapis.com/maps/api/js?key=' + apikey + '&callback=callbackGoogleMap"></script>'
		$head.append(script);
	})
})(jQuery, window, document)