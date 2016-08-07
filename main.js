var main = function(){
    
	$('.slider').click(function(){
		var currentSlide = $('.currentSlide');
	    var nextSlide = currentSlide.next();

	    if(nextSlide.length === 0) {
	      nextSlide = $('.slide').first();
	    }
	    
	    currentSlide.fadeOut(600).removeClass('currentSlide');
	    nextSlide.fadeIn(600).addClass('currentSlide');

	});

	

};

$(document).ready(main);