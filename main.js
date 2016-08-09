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

	$(document).keydown(function(event){
		if( event.which === 39){
			var currentSlide = $('.currentSlide');
		    var nextSlide = currentSlide.next();

		    if(nextSlide.length === 0) {
		      nextSlide = $('.slide').first();
		    }
		    
		    currentSlide.fadeOut(600).removeClass('currentSlide');
		    nextSlide.fadeIn(600).addClass('currentSlide');
		}
		else if(event.which === 37){
			var currentSlide = $('.currentSlide');
		    var nextSlide = currentSlide.prev();

		    if(nextSlide.length === 0) {
		      nextSlide = $('.slide').last();
		    }
		    
		    currentSlide.fadeOut(600).removeClass('currentSlide');
		    nextSlide.fadeIn(600).addClass('currentSlide');
		}
	});	


};

$(document).ready(main);