var main = function(){
    
	$(function() {
	    var div = $('.tennis');
	    var newHeight = (1/div.width()) * 100000 + 70;

	    div.css('height', newHeight);
	    $('.swim').css('height', newHeight - 20);
	    $('.photography').css('height', newHeight);
	    $('.camping').css('height', newHeight);
	    $('.intramural').css('height', newHeight + 25);

	});

};

$(document).ready(main);

$(window).resize(main);