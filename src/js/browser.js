(function ($, window, document) {
	$.browser = {};
	$.platform = {};
	$.browser.android = /android/i.test(navigator.userAgent.toLowerCase());
	$.browser.blackBerry = /blackberry/i.test(navigator.userAgent.toLowerCase());
	$.browser.webOs = /webos/i.test(navigator.userAgent.toLowerCase());
	$.browser.windowsPhone = /windows phone/i.test(navigator.userAgent.toLowerCase());
	$.browser.iDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
	$.browser.iPad = /ipad/i.test(navigator.userAgent.toLowerCase());
	$.browser.iPhone = /iphone/i.test(navigator.userAgent.toLowerCase());
	$.browser.iPod = /ipod/i.test(navigator.userAgent.toLowerCase());
	$.browser.mobile = $.browser.android ||
							$.browser.blackBerry ||
							$.browser.webOs ||
							$.browser.windowsPhone ||
							$.browser.iDevice;
	$.browser.nonMobile = !$.browser.mobile;


	// This script sets OSName variable as follows:
	// "Windows"    for all versions of Windows
	// "MacOS"      for all versions of Macintosh OS
	// "Linux"      for all versions of Linux
	// "UNIX"       for all other UNIX flavors 
	// "Unknown OS" indicates failure to detect the OS

	$.platform = {};
	$.platform.windows = navigator.appVersion.indexOf("Win")!=-1;
	$.platform.macOs = navigator.appVersion.indexOf("Mac")!=-1;
	$.platform.unix = navigator.appVersion.indexOf("X11")!=-1;
	$.platform.linux = navigator.appVersion.indexOf("Linux")!=-1;
	$.platform.unknown = !($.platform.windows ||
								$.platform.macOs || 
								$.platform.unix || 
								$.platform.linux);
})(jQuery, window, document)