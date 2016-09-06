var main = function(){
    
	$(function() {
	    var div = $('.tennis');
	    var width = (1/div.width()) * 100000 + 70;

	    div.css('height', width);


/*	    $("p.tennisText").css("width", "100px");

	    var paragraph = $("p.tennisText");
	    var pWidth = '100px';
	    paragraph.style.width = pWidth;
	    /*paragraph.css('width', pWidth);
	    
	    document.getElementById("myBtn").style.width*/

	});

};

$(document).ready(main);

$(window).resize(main);