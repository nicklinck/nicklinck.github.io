var main = function(){
    
	$('.rightArrow').click(function(){
		var currentSlide = $('.currentSlide');
	    var nextSlide = currentSlide.next();

	    if(nextSlide.length === 0) {
	      nextSlide = $('.slide').first();
	    }
	    
	    currentSlide.fadeOut(600).removeClass('currentSlide');
	    nextSlide.fadeIn(600).addClass('currentSlide');

	});

	$('.leftArrow').click(function(){
		var currentSlide = $('.currentSlide');
	    var nextSlide = currentSlide.prev();

	    if(nextSlide.length === 0) {
	      nextSlide = $('.slide').last();
	    }
	    
	    currentSlide.fadeOut(600).removeClass('currentSlide');
	    nextSlide.fadeIn(600).addClass('currentSlide');

	});	



};

$(document).ready(main);