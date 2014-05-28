console.log("ckDjs.js starting");
var i = 0;

// ***** Deep Linking *****
$(document).ready(function(){
/*
	var a = $.address.path();
	alert(a);

	$('a.galThumb').address(function() {  
		return $(this).attr('href').replace(/^#/, '');  
	});*/
});	
	


// ***** Lazy Loading Images *****

         
    $("article.fancy-article img").lazyload({
        event : "fancyReady"
    });

// ***** Pop It Up *****	
function popitup(url) {
	newwindow=window.open(url,'name','height=520,width=380,scrollbars=1');
	if (window.focus) {newwindow.focus()}
	return false;
}
function popitup2(url) {
	newwindow=window.open(url,'name','height=800,width=1050,scrollbars=1');
	if (window.focus) {newwindow.focus()}
	return false;
} 


$(document).ready(function(){
	var pageW = $(window).width();
	if ( pageW <= 767 ) {
		$('body').addClass("m");
	} else {
		$('body').addClass("d");
	}
	
	// ***** Nav Scripts *****
	// doc ready add or remove class stickToTop
	var topDist = $(document).scrollTop();
	if ( topDist >= 536 ) {
		$('div#deskNav').addClass("stickToTop");
	} else {
		$('div#deskNav').removeClass("stickToTop");
	}
	
	// nav scrollTo functions
	$('a#stt-logo').bind({click: function(){
		//scroll to top of page
		$('html, body').animate({
			scrollTop: 0
		}, 250);
		return false;
	}});
	$('div#deskNav li a.about').bind({click: function(){
		var topDist = $(document).scrollTop();
		var dist = $('#pitch-container').offset().top;
		//if stt nav is not present, compensate stt nav for scroll animation
		if ( topDist <= 536 ) {
			var dist = dist - 131;
		}	
		//scroll animation
		$('html, body').animate({
			scrollTop: dist
		}, 250);
		return false;
	}});
	$('div#deskNav li a.projects').bind({click: function(){
		var topDist = $(document).scrollTop();
		var dist = $('#gallery-container').offset().top - 55;
		if ( topDist < 536 ) {
			var dist = dist - 131;
		}
		$('html, body').animate({
			scrollTop: dist
		}, 250);
		return false;
	}});
	$('div#deskNav li a.contact').bind({click: function(){
		var topDist = $(document).scrollTop();
		var dist = $('#contact-container').offset().top - 125;
		if ( topDist < 536 ) {
			var dist = dist - 131;
		}
		$('html, body').animate({
			scrollTop: dist
		}, 250);
		return false;
	}});

	
	
	// ***** Gallery thumb click *****

var pageW = $(window).width();
if ( pageW >= 768 ) {

	$('.fancy-gallery-filmstrip ol.flex-control-nav li img').bind({click: function(){
		
		if ( $(this).parents('.fancy-gallery-filmstrip').hasClass('collapsed') ) {
		
				$(this).parents('article.fancy-article').children('span.area').slideToggle();
				$(this).parents('.fancy-gallery-filmstrip').toggleClass('collapsed').toggleClass('open');
				$(this).parent('a').parent('li').addClass('current');
				
				var listItem = $('ol li.current');
				var curIndex = $(this).parents('ol.thumbs').children('li').index(listItem);
				$('div.fancy-gallery-filmstrip.open ul.slides').children('li').eq(curIndex).addClass('current');
					
		} else {
			
			if ( $(this).parent('a').parent('li').hasClass('current') ) {
			
				$(this).parents('article.fancy-article').children('span.area').slideToggle();
				$(this).parents('.fancy-gallery-filmstrip').toggleClass('collapsed').toggleClass('open');
				$('ol.thumbs li.current').removeClass('current');	
				$('ul.slides li.current').removeClass('current');
				
			} else {
			
				$('li.current').removeClass('current');
				$(this).parent('a').parent('li').addClass('current');
				
				var listItem = $('ol li.current');
				var curIndex = $(this).parents('ol.thumbs').children('li').index(listItem);
				$('ul.slides li.current').removeClass('current');
				$('div.fancy-gallery-filmstrip.open ul.slides').children('li').eq(curIndex).addClass('current');

			}
		}
		return false;
	}
	});
}	
	// ***** Fancy afterLoad Functions *****
	
	function thumbListResize(){
		// counts thumbnails
		var ii = 0;
		$('.fancy-article.active ol.thumbs li').each(function(){
			ii++;
		});
		// for 5+ thumbnails
		if (ii > 5){
			// defines new width of ol.thumbs
			if ( 960 > pageW >= 768) {
				var newWidth = (ii * 124) + 10;
			} else {
				var newWidth = (ii * 170) + 10;
			}
			// applies new width to ol.thumbs
			$('.fancy-article.active ol.thumbs').css('width', newWidth + 'px');
			
			// show nav button right
			$('.fancy-article.active a.scrollThumbsBut.Right').toggle();
			// find difference between ol.thumbs and container
			var widthDiff = (newWidth - 940) + 10;
			
		}
		// gallery nav click function
		$('.fancy-article.active a.scrollThumbsBut').bind({click: function(){
			// hide clicked button
			$(this).toggle();
			if ( $(this).hasClass('Right') ) {
				// show Left button and position ol.thumbs with css3 and left
				$('.fancy-article.active a.scrollThumbsBut.Left').toggle();
				$('.fancy-article.active ol.thumbs').css('left', "-" + widthDiff + "px");
			} else {
				// show Right button and position ol.thumbs with css3 and left
				$('.fancy-article.active a.scrollThumbsBut.Right').toggle();
				$('.fancy-article.active ol.thumbs').css('left', "0px");
			}
			return false;
		}});
	}
	
	
	
	// ***** Fancy Trigger *****
	
	$("body.d a.galThumb").fancybox({
		fitToView	: false,
		width		: '95%',
		height		: '100%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		afterClose	: function(){
    		$('ol.thumbs li.current').removeClass('current');	
			$('ul.slides li.current').removeClass('current');
			$('.fancy-gallery-filmstrip.open').parents('article.fancy-article').children('span.area').toggle();
			$('.fancy-gallery-filmstrip.open').toggleClass('collapsed').toggleClass('open');
			$('.fancy-article.active').toggleClass('active');
			
			$.address.value('/');
			var topDist = $(document).scrollTop();
			var dist = $('#gallery-container').offset().top - 55;
			if ( topDist < 536 ) {
				var dist = dist - 131;
			}
			$('html, body').scrollTop(dist);
    	},
		afterShow	: function(){ 
			$("article.fancy-article.active img").trigger("fancyReady");
			$('div.fancybox-opened article.fancy-article').addClass('active');
			thumbListResize();		
		}
	});
	
	$("body.m a.galThumb").fancybox({
		type		: 'inline'
	});

/*	
	if ( $.address.queryString() ) {
		var q = $.address.queryString();
	}
	var a = $.address.path();
	var b = a.replace("/","");
	if ( !$('article#' + b).hasClass('active') ) {
		$('a[href=#' + b + ']').click();
	}
	if ( q ) {
		$.address.queryString(q);
	}
*/
	
	
	/* ***** Star Paralax ***** */
	
	
	var scroll = $(window).scrollTop();
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var pageHeight = $('html').height();
	var starsHeight = $('img#stars').height();
	var constHeight = $('img#const').height();
	
	// distances between bottom of window and other elements
	var starDistance = starsHeight - windowHeight;
	var constDistance = constHeight - windowHeight;
	var pageDistance = pageHeight - windowHeight;
	// rates
	var starRate = starDistance / pageDistance;
	var constRate = constDistance / pageDistance;
	var scrollPos = ( scroll / pageHeight ) * pageHeight;
	var starTopDist = starRate * scrollPos;
	var constTopDist = constRate * scrollPos;
	
	$('img#stars').css('top', "-" + starTopDist + "px");
	$('img#const').css('top', "-" + constTopDist + "px");
	
	
});
$(document).scroll(function() {
	i++;
	var topDist = $(document).scrollTop();
	if ( topDist >= 536 ) {
		$('div#deskNav').addClass("stickToTop");
	} else {
		$('div#deskNav').removeClass("stickToTop");
	}
	
	/* ***** Star Paralax ***** */
	
	
	var scroll = $(window).scrollTop();
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var pageHeight = $('html').height();
	var starsHeight = $('img#stars').height();
	var constHeight = $('img#const').height();
	
	// distances between bottom of window and other elements
	var starDistance = starsHeight - windowHeight;
	var constDistance = constHeight - windowHeight;
	var pageDistance = pageHeight - windowHeight;
	// rates
	var starRate = starDistance / pageDistance;
	var constRate = constDistance / pageDistance;
	var scrollPos = ( scroll / pageHeight ) * pageHeight;
	var starTopDist = starRate * scrollPos;
	var constTopDist = constRate * scrollPos;
	
	$('img#stars').css('top', "-" + starTopDist + "px");
	$('img#const').css('top', "-" + constTopDist + "px");
	
});
console.log("ckDjs.js ending");