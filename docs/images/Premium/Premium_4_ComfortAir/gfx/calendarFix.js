// AT&T form calendar fix
// Author: Joshua Brittin - jb553x@att.com
// Build date 1/26/2012
// Version - 0.3

$(document).ready(function() {
	
	$('img[src$="/js/jscalendar/img.gif"]').click(function(){ // The icon image source is used as the selector
		
		 if ( $.browser.msie ) { // Check to see if browser is Internet Expore. If true, apply fix.  If false, do nothing.
			var position = $(this).offset(); // Find position of Icon
			$('.calendar').css({
				"top" : position.top + 18, // Dynamically calculated top position with an 18px to push the calendar below the icon.
				"left" : position.left // Dynamically calculated left position.
			});
		 }
		
	});

});