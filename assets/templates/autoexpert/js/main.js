!function(a){a("body").data({padding:""});var b=a("body"),c=(a("header.header .header-wrapper"),function(c){c.preventDefault();var d=a(this),e=a(d.attr("data-target-menu")),f=a(">ul",e),g=(f.outerHeight(),b.outerWidth(!0)),h=0,i=0;return d.hasClass("open")?(d.removeClass("open"),b.removeClass("openmenu"),b.css({paddingRight:""}).data({padding:0}),a(".header-container-line, .header-container-nav").css({paddingRight:""}),e.addClass("aniul").removeClass("open").stop().animate({trans:0},800,"linear",function(){e.removeClass("open aniul"),a(e.closest(".header-wrapper")).removeClass("open")},100)):(d.addClass("open"),a("body").addClass("openmenu"),h=b.outerWidth(!0),i=h-g,pr=window.innerWidth>767?40:10,g!=h&&(b.css({paddingRight:i+"px"}).data({padding:i}),a(".header-container-line, .header-container-nav").css({paddingRight:pr+i+"px"})),f.outerHeight(),a(e.closest(".header-wrapper")).addClass("open"),e.addClass("open").removeClass("aniul").stop().animate({trans:800},800,"linear",function(){},100)),!1}),d=function(c){var d=b.data("padding"),e=window.innerWidth;d&&(e<1020?(b.css({paddingRight:d+"px"}).addClass("openmenu"),a(".header-container-line, .header-container-nav").css({paddingRight:40+d+"px"})):(b.css({paddingRight:""}).removeClass("openmenu"),a(".header-container-line, .header-container-nav").css({paddingRight:""})))};a(document).on("click.autoexpertMainMenu","[data-target-menu]",c),a(window).on("resize.autoexpert.menu",d).trigger("resize.autoexpert.menu")}(jQuery),function(a){var b={scaleKof:.14,scale:1,speed:500,ease:"easeOutCirc"},c={init:function(c){var d=a.extend(b,c);return this.each(function(){var b=a(this),c=a(b.parent()),e=d.scaleKof,f=d.speed,g=d.ease;d.scale;a(window).on("resize.background scroll.background initBackground.background",function(){var d=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,h=c.offset(),i=c.outerHeight(),j=d-h.top,k=h.top+i;if(j>=0&&d<=k){!b.hasClass("will")&&b.addClass("will");var l=j*e*2;b.css({transition:""}).stop().animate({transform:"translateY("+l+"px)"},f,g)}else b.hasClass("will")&&b.stop().css({transform:""}).removeClass("will");d>=.5*k-140?!a("body").hasClass("scroling")&&a("body").addClass("scroling"):a("body").hasClass("scroling")&&a("body").removeClass("scroling")}).trigger("initBackground.background")})},destroy:function(){return this.each(function(){var b=a(this);a(window).unbind("resize.background scroll.background initBackground.background"),b.stop().removeClass("will").css({transform:""})})}};a.fn.backgroundEffect=function(b){return c[b]?c[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?void a.error("\u041c\u0435\u0442\u043e\u0434 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c "+b+" \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u043b\u044f jQuery.backgroundEffect"):c.init.apply(this,arguments)}}(jQuery),function(a,b,c){function d(b){return a(this).each(function(){var c=a(this),d=c.data("googlemap"),e=a.extend({},f.DEFAULTS,c.data(),"object"==typeof b&&b);"string"==typeof e.center&&(e.center=JSON.parse(e.center)),"string"==typeof e.latlong&&(e.latlong=JSON.parse(e.latlong)),!d&&(c.data("googlemap",d=new f(this,e)),c.trigger("ps.googlemap.init"))})}var e=function(b){var c=a("<div />",{class:"page-contact-detail-control-ui-wrapper"}).append(a("<span />",{class:"page-contact-detail-control-ui-link"}).text("\u041f\u0440\u043e\u043b\u043e\u0436\u0438\u0442\u044c \u043c\u0430\u0440\u0448\u0440\u0443\u0442"));return a(b).append(c)},f=function(b,c){var d=this;this.infoWindow=[],this.element=b,this.options=a.extend({},f.DEFAULTS,c),this.gmap=new google.maps.Map(this.element,{zoom:this.options.zoom,center:this.options.center}),this.q=!!this.options.route&&"https://www.google.com/maps?z="+this.options.zoom+"&daddr="+this.options.route;var g=a("<span />",{class:"page-contact-detail-control-ui"}).on("click",function(a){d.openRoute.call(d,a)}),h=new e(g);this.gmap.controls[google.maps.ControlPosition.TOP_LEFT].push(h[0]),this.gmap.addListener("click",function(a){d.infoWindow.forEach(function(a,b,c){d.infoWindow[b].close()})}),h.targetWG=this};f.VERSION="1.0.0",f.DEFAULTS={latlong:{lat:-25.363,lng:131.044},zoom:4,center:{lat:-25.363,lng:131.044},marker:"assets/templates/autoexpert/images/marker.png",title:"",address:"",work:"",phone:"",route:""},f.infoWindow=[],f.prototype.openRoute=function(a){"object"==typeof a&&"function"==typeof a.preventDefault&&a.preventDefault();var c=this;return c.infoWindow.forEach(function(a,b,d){c.infoWindow[b].close()}),c.q&&setTimeout(function(){b.open(c.q)},100),!1};var g=a.fn.googlemap;a.fn.googlemap=d,a.fn.googlemap.Constructor=f,a.fn.googlemap.noConflict=function(){return a.fn.googlemap=g,this},b.callbackGoogleMap=function(){a('[data-plugin="googlemap"]').each(function(){var b=a(this);d.call(this,b.data())}),delete b.callbackGoogleMap},a(b).on("load",function(){a("head").append('<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAqObB5jDzWbLoN0_oDxajFw9IsCYrcAjc&callback=callbackGoogleMap"><\/script>')})}(jQuery,window,document),function(a,b,c){function d(b){return a(this).each(function(){var c=a(this),d=c.data("ps.shrgo"),f=a.extend({},e.DEFAULTS,c.data(),"object"==typeof b&&b);!d&&(c.data("ps.shrgo",d=new e(this,f)),c.trigger("ps.shrgo.init"))})}var e=function(b,c){switch(this.element=b,this.options=a.extend({},e.DEFAULTS,c),this.options.title||(this.options.title=a('meta[name="title"]').attr("content")||a("head title").text()||""),this.options.description||(this.options.description=a('meta[name="description"]').attr("content")||null),this.options.image||(this.options.image=a('meta[name="image"]').attr("content")||null),this.options.window){case"svksh":a(b).attr({title:"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0432 VK"});break;case"soksh":a(b).attr({title:"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u041e\u0414\u041d\u041e\u041a\u041b\u0410\u0421\u0421\u041d\u0418\u041a\u0410\u0425"});break;case"stwsh":a(b).attr({title:"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0432 TWITTER"});break;case"sfbsh":a(b).attr({title:"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u043d\u0430 FACEBOOK"});break;default:a(b).attr({title:"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u043d\u0430 GOOGLE+"})}a(b).data("ps.shrgo",this)};e.VERSION="1.0.0",e.DEFAULTS={window:"sgpsh",title:null,description:null,image:null,link:b.location.href},e.prototype.click=function(d){d.preventDefault(),d.stopPropagation();var e=a(this).data("ps.shrgo").options,f=encodeURIComponent(e.link),g="&vt="+(new Date).getTime(),h="",i=c.location.hostname,j=Math.floor(b.screen.width/2),k=Math.floor(b.screen.height/2),l="width="+j+",height="+k+",status=no,toolbar=no,menubar=no";switch(a(this).blur(),e.window){case"svksh":h="https://vk.com/share.php?url="+f+(e.title?"&title="+encodeURIComponent(e.title):"")+(e.description?"&description="+encodeURIComponent(e.description):"")+(e.image?"&image="+encodeURIComponent(e.image):"")+"&noparse=false"+g;break;case"soksh":h="https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl="+f+g;break;case"stwsh":h="https://twitter.com/intent/tweet?url="+f+(e.title?"&title="+encodeURIComponent(e.title):"")+(e.description?"&description="+encodeURIComponent(e.description.substr(0,100)):"")+g;break;case"sfbsh":h="http://www.facebook.com/sharer.php?s=100&p[url]="+f+(e.title?"&p[title]="+encodeURIComponent(e.title):"")+(e.description?"&p[summary]="+encodeURIComponent(e.description):"")+(e.image?"&p[images][0]="+encodeURIComponent(e.image):"")+g;break;default:h="https://plus.google.com/share?url="+f+"&hl=ru"+g}return b.open(h,i,l),!1};var f=a.fn.shrgo;a.fn.shrgo=d,a.fn.shrgo.Constructor=e,a.fn.shrgo.noConflict=function(){return a.fn.shrgo=f,this},a('[data-plugin="shrgo"]').each(function(){var b=a(this);d.call(this,b.data())}),a(c).on("click.ps.shrgo.data-api",'[data-plugin="shrgo"]',function(b){if(!a(this).data("ps.shrgo")){var c=a(this);d.call(this,c.data())}e.prototype.click.call(this,b)})}(jQuery,window,document),function(a,b,c){function d(b){return a(this).each(function(){var c=a(this),d=c.data("ps.hashLink"),e=a.extend({},g.DEFAULTS,c.data(),"object"==typeof b&&b);!d&&(c.data("ps.hashLink",d=new g(this,e)),c.trigger("ps.hashLink.init"))})}var e,f=(b.location.origin,b.location.pathname,c.title),g=function(c,d){d.easing&&(d.easing="function"==typeof a.easing[d.easing]?d.easing:g.DEFAULTS.easing),d.kofani&&(d.kofani=d.kofani<0?-d.kofani:d.kofani),this.element=c,this.options=a.extend({},g.DEFAULTS,d),a(c).data("ps.hashLink",this);var e,f=this.element.href,h=/\#.+/,i=!1;null!==(e=h.exec(f))&&(i=e[0],console.log(i==b.location.hash,i,b.location.hash),i==b.location.hash&&setTimeout(function(){var a=new jQuery.Event("click");a.target=c,g.prototype.click.call(c,a)},1500))},h=function(){clearTimeout(e),a(c).unbind("click.ps.hashLink.data-doc"),a("html, body").stop(),a(this).trigger("ps.hashLink.stop")};g.VERSION="1.0.0",g.DEFAULTS={easing:"function"==typeof a.easing.easeInOutQuint?"easeInOutCirc":"swing",kofani:.7,delay:200},g.prototype.click=function(d){console.log("CLICK");var g,i=a(this),j=this.href,k=/\#.+/,l=!1,n=0,o=0,p=0,q=i.data("ps.hashLink").options;if(null!==(m=k.exec(j))&&(l=m[0],g=a(l),g.length))return d.preventDefault(),d.stopPropagation(),o=b.pageYOffset||c.documentElement.scrollTop||c.body.scrollTop,n=g.offset().top,p=o-n,p=(p<0?-p:p)*q.kofani,a("html, body").stop(),clearTimeout(e),e=setTimeout(function(){i.trigger("ps.hashLink.start"),a(c).on("click.ps.hashLink.data-doc",function(){h.call(i[0])}),a("html, body").animate({scrollTop:n},p,q.easing,function(){h.call(i[0]),c.title=i.text()+" | "+f;try{var a=b.location.origin+b.location.pathname;return b.history.pushState(null,null,a+l),!1}catch(a){location.hash=l}})},q.delay),!1};var i=a.fn.hashLink;if(a.fn.hashLink=d,a.fn.hashLink.Constructor=g,a.fn.hashLink.noConflict=function(){return a.fn.hashLink=i,this},a('[data-plugin="hashLink"]').each(function(){var b=a(this);d.call(this,b.data())}),a('[data-plugin="hashLink"]').length){var j=[];a('[data-plugin="hashLink"]').each(function(){var b=(a(this),this.href),c=/\#.+/;null!==(m=c.exec(b))&&j.push("section"+m[0])}),a(b).on("scroll.hashLink",function(d){b.pageYOffset||c.documentElement.scrollTop||c.body.scrollTop;j.forEach(function(b,c,d){var e=a(b);console.log(e.offset())})})}a(c).on("click.ps.hashLink.data-api",'[data-plugin="hashLink"]',function(b){if(!a(this).data("ps.hashLink")){var c=a(this);d.call(this,c.data())}g.prototype.click.call(this,b)})}(jQuery,window,document),function(a){Array.prototype.max=function(){return Math.max.apply(null,this)},Array.prototype.in_array=function(a){for(var b=0,c=this.length;b<c;b++)if(this[b]==a)return!0;return!1};var b=a(".header"),c=0,d=0,e=["formcallbackabout","formcallbacktime","formcallbackfree","formcallbackgray","formcallbacksubscribe","formcallbackpopup","formcallbackreviews"],f=function(){a(".header-container",b).css({"margin-right":a("body").css("margin-right")})},g=function(){a(".header-container",b).css({"margin-right":""})};a(window).on("load.px.parallax",function(b){setTimeout(function(){a("html").addClass("showing")},500)}).on("load",function(b){a("html").removeClass("loading"),setTimeout(function(){a("html").addClass("initmenu").removeClass("complete startmenu"),a(".freecons .paralax").parallax({imageSrc:"assets/templates/autoexpert/images/highway.jpg",positionX:"center",positionY:"top",naturalWidth:1280,naturalHeight:853}),h.call()},500),setTimeout(function(){a("html").removeClass("initmenu")},1e3)}),a('[data-plugin="googlemap"]').each(function(){var b=a(this),c={icon:a.trim(a(this).data("marker")).length?a(this).data("marker"):"assets/templates/autoexpert/images/marker.png",title:a.trim(a(this).data("title")).length?a(this).data("title"):"\u042e\u0420\u0410\u0412\u0422\u041e\u042d\u041a\u0421\u041f\u0415\u0420\u0422"};b.on("ps.googlemap.init",function(){var d=a(this).data("googlemap"),e=b.data(),f=e.phone,g=a('<div class="page-contact-detail-infowindow">'+(a.trim(e.title).length?'<h5 class="page-contact-detail-infowindow-title">'+e.title+"</h5>":"")+'<div class="page-contact-detail-infowindow-content"><dl>'+(a.trim(e.address).length?"<dt>\u0410\u0434\u0440\u0435\u0441:</dt><dd>"+e.address+"</dd>":"")+(a.trim(e.work).length?"<dt>\u0420\u0435\u0436\u0438\u043c \u0440\u0430\u0431\u043e\u0442\u044b:</dt><dd>"+e.work+"</dd>":"")+(a.trim(e.phone).length?'<dt>\u0422\u0435\u043b\u0435\u0444\u043e\u043d:</dt><dd><a href="tel:'+f.replace(/(\s+|\(|\)|-)/g,"")+'">'+e.phone+"</a></dd>":"")+"</dl>"+(a.trim(e.route).length?'<div class="page-contact-detail-infowindow-content-link"><span>\u041f\u0440\u043e\u043b\u043e\u0436\u0438\u0442\u044c&nbsp;\u043c\u0430\u0440\u0448\u0440\u0443\u0442&nbsp;\u2192</span></div>':"")+"</div></div>").on("click",".page-contact-detail-infowindow-content-link span",function(a){d.openRoute.call(d,a)}).on("contextmenu",function(a){return a.preventDefault(),!1})[0],h=new google.maps.Marker(c),i=new google.maps.InfoWindow({content:g}),j=new google.maps.LatLng(e.latlong.lat,e.latlong.lng);d.infoWindow.push(i),h.setPosition(j),h.setMap(d.gmap),d.gmap.setClickableIcons(!1),google.maps.event.addListener(h,"click",function(){i.open(d.gmap,h)})})});var h=function(){a(".homeslider .slider-slick").each(function(){var b=a(this),c=b.parent().parent(),d=a(".slider-slick-arrows",c),e=a(".slider-slick-dotted",c);b.slick({dots:!0,infinite:!0,speed:600,fade:!0,autoplaySpeed:3e3,cssEase:"ease",appendArrows:d,appendDots:e,prevArrow:'<div class="slider-slick-arrows-prev"><div class="arrow-icon"></div></div>',nextArrow:'<div class="slider-slick-arrows-next"><div class="arrow-icon"></div></div>',customPaging:function(b,c){return a('<span class="dot" role="button" tabindex="0" />').text("")}}).on("mouseenter",function(){b.slick("slickSetOption","autoplay",!0,!0)})}),a(".blogpage .slick").each(function(){var b=a(this),c=b.parent().parent(),d=a(".slider-slick-arrows-wrapper",c),e=a(".slider-slick-dotted",c);b.slick({dots:!0,arrows:!0,slidesToShow:4,slidesToScroll:1,centerMode:!0,variableWidth:!0,appendArrows:d,appendDots:e,prevArrow:'<div class="slider-slick-arrows-prev"><div class="arrow-icon"></div></div>',nextArrow:'<div class="slider-slick-arrows-next"><div class="arrow-icon"></div></div>',customPaging:function(b,c){return a('<span class="dot" role="button" tabindex="0" />').text("")}})}),new WOW({boxClass:"wow",animateClass:"animated",offset:parseInt(window.innerHeight/5),callback:function(b){a(b).removeClass("no-animation").addClass("animationPush"),setTimeout(function(){a(b).removeClass("animationPush")},1500)}}).init(),a(window).on("scroll.autoexpert resize.autoexpert",function(e){var f=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,b.outerHeight(!0),d<f&&!b.hasClass("modetop")&&(c=setTimeout(function(){!b.hasClass("modetop")&&b.addClass("modetop"),clearTimeout(c)},200)),d>f&&b.hasClass("modetop")&&(c=setTimeout(function(){b.hasClass("modetop")&&b.removeClass("modetop"),clearTimeout(c)},200));var g=a(".hero.headblock");if(g.length){var h=g.height();if(d<310||0==d&&d<h){var i=100*d/310/100+.2;i=i>1?1:i<0?0:i,a("header.header .header-wrapper").attr({style:"background-color: rgba(30, 30, 44,"+i+")"})}else a("header.header .header-wrapper").attr({style:"background-color: rgba(30, 30, 44, 1)"})}d=f}).trigger("scroll.autoexpert").trigger("resize.autoexpert")};a(document).on("submit","#formcallbacktime form, #formcallbacksubscribe form, #formcallbackfree form, #formcallbackgray form, #formcallbackpopup form, #formcallbackabout form, #formcallbackreviews form",function(b){var c=a(this),d=a('[name="formid"]',c).val();if(e.in_array(d)){b.preventDefault();var f=c.parent(),g=new FormData(this);return f.addClass("submit"),a.ajax({type:"post",url:window.location.origin+window.location.pathname,data:g,processData:!1,contentType:!1,type:"POST",success:function(b){if("string"==typeof b&&(b=JSON.parse(b)),1==b.error)alert(b.alert);else{if(b.form&&f.empty().append(b.form.output),b.form.messages.length){var c=b.form.messages.join("<br>"),d=a("<div></div>",{class:"messages_list"}).html(c);f.prepend(d)}f.removeClass("submit"),setTimeout(function(){a("input[name=phone]",f).mask("+7(999)999-99-99"),a(".reyting.score",f).raty({number:5,starType:"i",hints:["1","2","3","4","5"],scoreName:"raiting",click:function(a,b){}}),a(window).trigger("resize")},200)}},error:function(){f.removeClass("submit"),setTimeout(function(){a(window).trigger("resize")},200)}}),!1}}),a("input[name=phone]").mask("+7(999)999-99-99",{completed:function(){a(this).trigger("input").trigger("change")}}),a(document).on("click",'[data-form="send-reviews"]',function(b){b.preventDefault();var c=a("#send-reviews"),d=a(".block-form-reviews",c),e=a('<div class="box-modal" />');return e.append(d),e.prepend('<div class="box-modal_close arcticmodal-close">X</div>'),a.arcticmodal({content:e,container:{tpl:'<div class="arcticmodal-container arcticmodal-reviews"><table class="arcticmodal-container_i"><tr><td class="arcticmodal-container_i2"></td></tr></table></div>'},beforeClose:function(){c.empty().append(d)},articClose:g,articOpen:f,closeOnEsc:!1,closeOnOverlayClick:!1}),!1}),a(document).on("click",'[data-form="send-popup"]',function(b){b.preventDefault();var c=a("#send-popup"),d=a(".block-form-popup",c),e=a('<div class="box-modal" />');return e.append(d),e.prepend('<div class="box-modal_close arcticmodal-close">X</div>'),a.arcticmodal({content:e,container:{tpl:'<div class="arcticmodal-container arcticmodal-reviews"><table class="arcticmodal-container_i"><tr><td class="arcticmodal-container_i2"></td></tr></table></div>'},beforeClose:function(){c.empty().append(d)},articClose:g,articOpen:f,closeOnEsc:!1,closeOnOverlayClick:!1}),!1}),a(".reyting.score").raty({number:5,starType:"i",hints:["1","2","3","4","5"],scoreName:"raiting",click:function(a,b){}}),a(".reyting.readonly").raty({number:5,starType:"i",hints:["1","2","3","4","5"],readOnly:!0}),a(document).on("input change",'[type="file"]',function(b){this.files.length?a(".text > span",a(this).parent()).text(this.files[0].name):a(".text > span",a(this).parent()).text("\u0424\u0430\u0439\u043b \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d")}),a(document).on("input change input.mask paste.mask",".form-control-block.required input, .form-control-block.required textarea",function(b){var c=a(this),d=c.parent(),e=c.attr("name"),f=a(this).val(),g=!1;switch(e){case"first_name":g=f.length>3;break;case"email":var h=/^([\w-._]+@[\w-._]+\.[\w-]{2,})$/i;g=h.test(f);break;case"phone":var h=/^(\+7\(\d{3}\)\d{3}-\d{2}-\d{2})$/;g=h.test(f);break;case"message":g=f.length>20}g?!d.hasClass("required-success")&&d.addClass("required-success"):d.hasClass("required-success")&&d.removeClass("required-success")}),a("input, textarea").trigger("change")}(jQuery);