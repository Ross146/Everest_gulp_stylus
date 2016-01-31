$(document).ready(function() {
	console.log('document ready event');
	$("header h1").animated("fadeInDown", "fadeInUp");
	$("header .cloud-left").animated("fadeInLeftBig", "fadeOutLeftBig");
	$("header .actors").animated("flipInX", "flipOutX");
	$("header .cloud-left").animated("fadeInLeftBig", "fadeOutLeftBig");
	$("header .cloud-right").animated("fadeInRightBig", "fadeOutRightBig");
	$(".characters .alpinist-left").animated("fadeInLeft", "fadeOutLeft");
	$(".characters .title").animated("fadeInRight", "fadeOutRight");
	$(".characters .alpinist-list").animated("fadeInUp", "fadeOutDown");
	$(".story .mountain-left").animated("fadeInLeft", "fadeOutLeft");
	$(".story .story-text").animated("fadeInRight", "fadeOutRight");
	$("footer .footer-header").animated("zoomInDown", "zoomOutDown");
	$("footer .gallery").animated("tada", "");
	$("footer .videos").animated("tada", "");
})

$(function() {


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

