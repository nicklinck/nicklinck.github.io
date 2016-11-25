var main = function(){
    
	$(function() {
	    var div = $('.tennis');
	    var newHeight = (1/div.width()) * 100000 + 70;

	    div.css('height', newHeight - 30);
	    $('.swim').css('height', newHeight);
	    $('.photography').css('height', newHeight);
	    $('.camping').css('height', newHeight);
	    $('.intramural').css('height', newHeight + 25);

	});


};

$(document).ready(main);

$(window).resize(main);