$(document).ready(function(){

$("div#contact_but").live('click', function (){
	contactSlideRight();
});

function contactSlideRight (){	
		if ($("div#contact_but").hasClass("slideRight_closed")){
			$("ul#contact").animate({
				"left" : '-5px'}, 800, function(){
					$("div#contact_but").addClass("slideRight_opened")
					$("div#contact_but").removeClass("slideRight_closed")
				}
			);
		}
		
		if ($("div#contact_but").hasClass("slideRight_opened")){
			$("ul#contact").animate({
				"left" : '-1025px'}, 800, function(){
					$("div#contact_but").addClass("slideRight_closed")
					$("div#contact_but").removeClass("slideRight_opened")
				}
			);
		}
}




});