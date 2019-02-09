!(function($){
	Array.prototype.max = function() {
		return Math.max.apply(null, this);
	};
	Array.prototype.in_array = function(needle) {
		for(var i = 0, l = this.length; i < l; i++)  {
			if(this[i] == needle) {
				return true;
			}
		}
		return false;
	}
	
	var $header = $(".header"),
		intMenu = 0,
		wnScroll = 0,
		timePuls = 200,
		ajaxForms = [
						'formcallbackabout',
						'formcallbacktime',
						'formcallbackfree',
						'formcallbackgray',
						'formcallbacksubscribe',
						'formcallbackpopup',
						'formcallbackreviews'
					],
		openPopup = function(){
			$('.header-container', $header).css({
				'margin-right': $("body").css("margin-right")
			});
		},
		closePopup = function(){
			$('.header-container', $header).css({
				'margin-right': ""
			})
		};
	/*$('.headblock-bg').backgroundEffect(
		{
			scale: 0,
			speed: 300
		}
	);*/
	$(window).on("load.px.parallax", function(e){
		setTimeout(function(){
			$('html').addClass('showing');
		}, 500);
	}).on('load', function(e){
		$('html').removeClass('loading');
		setTimeout(function(){
			$('html').addClass('initmenu').removeClass('complete startmenu');
			$('.freecons .paralax').parallax(
				{
					imageSrc: 'assets/templates/autoexpert/images/highway.jpg',
					positionX: 'center',
					positionY: 'top',
					naturalWidth: 1280,
					naturalHeight: 853,
				}
			);
			initPlgIn.call();
		}, 500);
		setTimeout(function(){
			$('html').removeClass('initmenu');
		}, 1000);
	});
	$('[data-plugin="googlemap"]').each(function(){
		var $this = $(this),
			markerOptions = {
				icon: ($.trim($(this).data("marker")).length ? $(this).data("marker") : "assets/templates/autoexpert/images/marker.png"),
				title: ($.trim($(this).data("title")).length ? $(this).data("title") : "ЮРАВТОЭКСПЕРТ")
			};
		$this.on("ps.googlemap.init", function(){
			var gmp_data = $(this).data('googlemap'),
				data = $this.data(),
				phone = data.phone,
				infoContent = $("<div class=\"page-contact-detail-infowindow\">"+
					($.trim(data.title).length ? "<h5 class=\"page-contact-detail-infowindow-title\">" + data.title + "</h5>" : "")+
					"<div class=\"page-contact-detail-infowindow-content\">"+
						"<dl>"+
							($.trim(data.address).length ? "<dt>Адрес:</dt><dd>" + data.address + "</dd>" : "") +
							($.trim(data.work).length ? "<dt>Режим работы:</dt><dd>" + data.work + "</dd>" : "") +
							($.trim(data.phone).length ? "<dt>Телефон:</dt><dd><a href=\"tel:" + phone.replace(/(\s+|\(|\)|-)/g, '') + "\">" + data.phone + "</a></dd>" : "") +
						"</dl>"+
						($.trim(data.route).length ? "<div class=\"page-contact-detail-infowindow-content-link\"><span>Проложить&nbsp;маршрут&nbsp;→</span></div>" : "") +
					"</div>"+
				"</div>").on('click', '.page-contact-detail-infowindow-content-link span',
					function(e){
						gmp_data.openRoute.call(gmp_data, e);
					}
				).on('contextmenu', function(e){
					e.preventDefault();
					return !1;
				})[0],
				marker = new google.maps.Marker(markerOptions),
				infoWindow = new google.maps.InfoWindow({
					content: infoContent
				}),
				//latlong = JSON.parse($(this).data("latlong")),
				LatLng = new google.maps.LatLng(data.latlong.lat, data.latlong.lng);
				gmp_data.infoWindow.push(infoWindow);
			marker.setPosition(LatLng);
			marker.setMap(gmp_data.gmap);
			gmp_data.gmap.setClickableIcons(false);
			google.maps.event.addListener(marker, 'click', function() {
				infoWindow.open(gmp_data.gmap, marker);
			});
		})
	});
	var initPlgIn = function(){
		// slick home
		$('.homeslider .slider-slick').each(function(){
			var $this = $(this),
				$parent = $this.parent().parent(),
				$arrows = $(".slider-slick-arrows", $parent),
				$dotteds = $(".slider-slick-dotted", $parent);
			$this.slick({
				dots: true,
				infinite: true,
				speed: 600,
				fade: true,
				autoplaySpeed: 3000,
				cssEase: 'ease',
				appendArrows: $arrows,
				appendDots: $dotteds,
				prevArrow: '<div class="slider-slick-arrows-prev"><div class="arrow-icon"></div></div>',
				nextArrow: '<div class="slider-slick-arrows-next"><div class="arrow-icon"></div></div>',
				customPaging: function(slider, i){
					return $('<span class="dot" role="button" tabindex="0" />').text("");
				}
			}).on("mouseenter", function(){
				$this.slick("slickSetOption", "autoplay", true, true);
			});
		});
		$('.blogpage .slick').each(function(){
			var $this = $(this),
				$parent = $this.parent().parent(),
				$arrows = $(".slider-slick-arrows-wrapper", $parent),
				$dotteds = $(".slider-slick-dotted", $parent);
			$this.slick({
				dots: true,
				arrows: true,
				slidesToShow: 4,
				slidesToScroll: 1,
				centerMode: true,
				variableWidth: true,
				appendArrows: $arrows,
				appendDots: $dotteds,
				prevArrow: '<div class="slider-slick-arrows-prev"><div class="arrow-icon"></div></div>',
				nextArrow: '<div class="slider-slick-arrows-next"><div class="arrow-icon"></div></div>',
				customPaging: function(slider, i){
					return $('<span class="dot" role="button" tabindex="0" />').text("");
				}
			})
		});
		// WOW
		var wow = new WOW(
			{
				boxClass:     'wow',
				animateClass: 'animated',
				offset: parseInt(window.innerHeight / 5),
				callback:     function(box) {
					$(box).removeClass("no-animation").addClass('animationPush');
					setTimeout(function(){
						$(box).removeClass("animationPush");
					}, 1500);
				}
			}
		);
		wow.init();
		$(window).on('scroll.autoexpert resize.autoexpert', function(e){
			var cScr = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
				xScr = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
				hHeader = $header.outerHeight(true);
			if(wnScroll < cScr){
				!$header.hasClass('modetop') && (
					//clearTimeout(intMenu),
					intMenu = setTimeout(
						function(){
							!$header.hasClass('modetop') && $header.addClass('modetop');
							clearTimeout(intMenu);
						},
						timePuls
					)
				);
			}
			if(wnScroll > cScr){
				$header.hasClass('modetop') && (
					//clearTimeout(intMenu),
					intMenu = setTimeout(
						function(){
							$header.hasClass('modetop') && $header.removeClass('modetop');
							clearTimeout(intMenu);
						},
						timePuls
					)
				);
			}
			var $hero = $(".hero.headblock");
			if($hero.length){
				var _h = $hero.height(),
					_pt = 310;
				if(wnScroll < _pt || wnScroll==0 && wnScroll < _h){
					var a = ((wnScroll * 100 / _pt) / 100) + .2;
					a = a > 1 ? 1 : (a < 0 ? 0 : a);
					$("header.header .header-wrapper").attr({
						style: 'background-color: rgba(30, 30, 44,' + a + ')'
					})
				}else {
					$("header.header .header-wrapper").attr({
						style: 'background-color: rgba(30, 30, 44, 1)'
					})
				}
			}
			wnScroll = cScr;
		}).trigger("scroll.autoexpert").trigger("resize.autoexpert");
	}
	$(document).on("submit", "#formcallbacktime form, #formcallbacksubscribe form, #formcallbackfree form, #formcallbackgray form, #formcallbackpopup form, #formcallbackabout form, #formcallbackreviews form", function(e){
		var $this = $(this),
			formid = $('[name="formid"]', $this).val();
		
		if(ajaxForms.in_array(formid)){
			e.preventDefault();
			var $parent = $this.parent(),
				fd = new FormData(this);
			$parent.addClass("submit");
			$.ajax({
				type: 'post',
				url: window.location.origin + window.location.pathname,
				data: fd,
				processData: false,
				contentType: false,
				type: 'POST',
				success: function(data){
					if(typeof data == 'string'){
						data = JSON.parse(data);
					}
					if(data.error==1){
						alert(data.alert)
					}else{
						if(data.form){
							$parent.empty().append(data.form["output"]);
						}
						if(data.form.messages.length){
							var str = data.form.messages.join("<br>"),
								msgs = $("<div></div>", {
									'class': 'messages_list'
								}).html(str);
							$parent.prepend(msgs);
						}
						$parent.removeClass("submit");
						setTimeout(function(){
							$("input[name=phone]", $parent).mask("+7(999)999-99-99");
							$('.reyting.score', $parent).raty({
								'number'	: 5,
								'starType'	: 'i',
								'hints'		: [
									'1',
									'2',
									'3',
									'4',
									'5'
								],
								'scoreName'	: 'raiting',
								'click': function(score, evt){
									
								}
							});
							$(window).trigger("resize");
						}, 200);
					}
				},
				error: function(){
					$parent.removeClass("submit");
					setTimeout(function(){
						$(window).trigger("resize");
					}, 200);
				}
			});
			return !1;
		}
	});
	$("input[name=phone]").mask("+7(999)999-99-99", {
		completed: function(){
			$(this).trigger("input").trigger('change');
		}
	});
	$(document).on("click", '[data-form="send-reviews"]', function(e) {
		e.preventDefault();
		var $formblock = $("#send-reviews"),
			$block = $(".block-form-reviews", $formblock),
			c = $('<div class="box-modal" />');
			c.append($block);
			c.prepend('<div class="box-modal_close arcticmodal-close">X</div>');
		$.arcticmodal({
			content: c,
			container: {
				tpl: '<div class="arcticmodal-container arcticmodal-reviews"><table class="arcticmodal-container_i"><tr><td class="arcticmodal-container_i2"></td></tr></table></div>'
			},
			beforeClose: function(){
				$formblock.empty().append($block);
			},
			articClose: closePopup,
			articOpen: openPopup,
			closeOnEsc: false,
			closeOnOverlayClick: false
		});
		return !1;
	});
	$(document).on("click", '[data-form="send-popup"]', function(e) {
		e.preventDefault();
		var $formblock = $("#send-popup"),
			$block = $(".block-form-popup", $formblock),
			c = $('<div class="box-modal" />');
			c.append($block);
			c.prepend('<div class="box-modal_close arcticmodal-close">X</div>');
		$.arcticmodal({
			content: c,
			container: {
				tpl: '<div class="arcticmodal-container arcticmodal-reviews"><table class="arcticmodal-container_i"><tr><td class="arcticmodal-container_i2"></td></tr></table></div>'
			},
			beforeClose: function(){
				$formblock.empty().append($block);
			},
			articClose: closePopup,
			articOpen: openPopup,
			closeOnEsc: false,
			closeOnOverlayClick: false
		});
		return !1;
	});
	$('.reyting.score').raty({
		'number'	: 5,
		'starType'	: 'i',
		'hints'		: [
			'1',
			'2',
			'3',
			'4',
			'5'
		],
		'scoreName'	: 'raiting',
		'click': function(score, evt){
			
		}
	});
	$(".reyting.readonly").raty({
		'number'	: 5,
		'starType'	: 'i',
		'hints'		: [
			'1',
			'2',
			'3',
			'4',
			'5'
		],
		'readOnly': true
	});
	$(document).on("input change", '[type="file"]', function(e){
		if(this.files.length){
			$('.text > span', $(this).parent()).text(this.files[0].name);
		}else{
			$('.text > span', $(this).parent()).text("Файл не выбран");
		}
	});
	$(document).on("input change input.mask paste.mask", '.form-control-block.required input, .form-control-block.required textarea', function(e){
		var $this = $(this),
			$parent = $this.parent(),
			name = $this.attr("name"),
			val = $(this).val(),
			flag = false;
		switch(name){
			case "first_name":
				flag = (val.length > 3)
				break;
			case "email":
				var reg = /^([\w-._]+@[\w-._]+\.[\w-]{2,})$/i;
				flag = reg.test(val);
				break;
			case "phone":
				var reg = /^(\+7\(\d{3}\)\d{3}-\d{2}-\d{2})$/;
				flag = reg.test(val);
				break;
			case "message":
				flag = (val.length > 20);
				break;
		}
		
		if(!flag){
			$parent.hasClass('required-success') && $parent.removeClass('required-success');
		}else{
			!$parent.hasClass('required-success') && $parent.addClass('required-success');
		}
	});
	$("input, textarea").trigger("change");
})(jQuery);