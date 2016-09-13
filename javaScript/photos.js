var main = function(){
	$('.rightArrowPhoto').click(function(){
		var currentImage = $(".currentContainer").find(".currentImage");
	    var nextImage = currentImage.next();
	    if(nextImage.attr('class') != "rightArrowPhoto") {
	    	currentImage.removeClass('currentImage');
			nextImage.addClass('currentImage');	
			$(".currentContainer").find(".mainImage").children('img').attr('src', nextImage.attr('src'));
	    }
	});
	
	$('.leftArrowPhoto').click(function(){
		var currentImage = $(".currentContainer").find(".currentImage");
	    var prevImage = currentImage.prev();

	    if(prevImage.attr('class') != "leftArrowPhoto") {
	    	currentImage.removeClass('currentImage');
			prevImage.addClass('currentImage');	
			$(".currentContainer").find(".mainImage").children('img').attr('src', prevImage.attr('src'));
	    }
	});

	$(document).keydown(function(event){
		if( event.which === 39){
			var currentImage = $(".currentContainer").find(".currentImage");
		    var nextImage = currentImage.next();
		    if(nextImage.attr('class') != "rightArrowPhoto") {
		    	currentImage.removeClass('currentImage');
				nextImage.addClass('currentImage');	
				$(".currentContainer").find(".mainImage").children('img').attr('src', nextImage.attr('src'));
		    }
		}
		else if(event.which === 37){
			var currentImage = $(".currentContainer").find(".currentImage");
		    var prevImage = currentImage.prev();

		    if(prevImage.attr('class') != "leftArrowPhoto") {
		    	currentImage.removeClass('currentImage');
				prevImage.addClass('currentImage');	
				$(".currentContainer").find(".mainImage").children('img').attr('src', prevImage.attr('src'));
		    }
		}
	});	

	$('.imageNav').on('click', 'img', function(image){
		var currentImage = $(".currentContainer").find(".currentImage");
		var newImage = $(image.target);

		if(newImage.attr('class') != "leftArrowPhoto" && newImage.attr('class') != "rightArrowPhoto"){
			currentImage.removeClass('currentImage');
			newImage.addClass('currentImage');
			$(".currentContainer").find(".mainImage").children('img').attr('src', newImage.attr('src'));
		}
	});

	$('#footballButton').click(function(){
		$('#studyAbroad').hide();
		$('#basketball').hide();
		$('#nature').hide();
		$('#people').hide();
		$('#football').show();
		$('#studyAbroad').removeClass('currentContainer');
		$('#basketball').removeClass('currentContainer');
		$('#nature').removeClass('currentContainer');
		$('#people').removeClass('currentContainer');
		$('#football').addClass('currentContainer');
		
		var image = $('.currentFolder').children("img");
        image.remove();
		$("#footballButton").prepend(image);
		$('#studyAbroadButton').removeClass('currentFolder');
		$('#basketballButton').removeClass('currentFolder');
		$('#natureButton').removeClass('currentFolder');
		$('#peopleButton').removeClass('currentFolder');
		$('#footballButton').addClass('currentFolder');

	});

	$('#studyAbroadButton').click(function(){
		$('#football').hide();
		$('#basketball').hide();
		$('#nature').hide();
		$('#people').hide();
		$('#studyAbroad').show();
		$('#football').removeClass('currentContainer');
		$('#basketball').removeClass('currentContainer');
		$('#nature').removeClass('currentContainer');
		$('#people').removeClass('currentContainer');
		$('#studyAbroad').addClass('currentContainer');

		var image = $('.currentFolder').children("img");
        image.remove();
		$("#studyAbroadButton").prepend(image);
		$('#footballButton').removeClass('currentFolder');
		$('#basketballButton').removeClass('currentFolder');
		$('#natureButton').removeClass('currentFolder');
		$('#peopleButton').removeClass('currentFolder');
		$('#studyAbroadButton').addClass('currentFolder');
	});

	$('#basketballButton').click(function(){
		$('#football').hide();
		$('#studyAbroad').hide();
		$('#nature').hide();
		$('#people').hide();
		$('#basketball').show();
		$('#football').removeClass('currentContainer');
		$('#studyAbroad').removeClass('currentContainer');
		$('#nature').removeClass('currentContainer');
		$('#people').removeClass('currentContainer');
		$('#basketball').addClass('currentContainer');

		var image = $('.currentFolder').children("img");
        image.remove();
		$("#basketballButton").prepend(image);
		$('#footballButton').removeClass('currentFolder');
		$('#studyAbroadButton').removeClass('currentFolder');
		$('#natureButton').removeClass('currentFolder');
		$('#peopleButton').removeClass('currentFolder');
		$('#basketballButton').addClass('currentFolder');
	});

	$('#natureButton').click(function(){
		$('#football').hide();
		$('#studyAbroad').hide();
		$('#basketball').hide();
		$('#people').hide();
		$('#nature').show();
		$('#football').removeClass('currentContainer');
		$('#studyAbroad').removeClass('currentContainer');
		$('#basketball').removeClass('currentContainer');
		$('#people').removeClass('currentContainer');
		$('#nature').addClass('currentContainer');

		var image = $('.currentFolder').children("img");
        image.remove();
		$("#natureButton").prepend(image);
		$('#footballButton').removeClass('currentFolder');
		$('#studyAbroadButton').removeClass('currentFolder');
		$('#basketballButton').removeClass('currentFolder');
		$('#peopleButton').removeClass('currentFolder');
		$('#natureButton').addClass('currentFolder');
	});

	$('#peopleButton').click(function(){
		$('#football').hide();
		$('#studyAbroad').hide();
		$('#basketball').hide();		
		$('#nature').hide();
		$('#people').show();
		$('#football').removeClass('currentContainer');
		$('#studyAbroad').removeClass('currentContainer');
		$('#basketball').removeClass('currentContainer');
		$('#nature').removeClass('currentContainer');
		$('#people').addClass('currentContainer');

		var image = $('.currentFolder').children("img");
        image.remove();
		$("#peopleButton").prepend(image);
		$('#footballButton').removeClass('currentFolder');
		$('#studyAbroadButton').removeClass('currentFolder');
		$('#basketballButton').removeClass('currentFolder');
		$('#natureButton').removeClass('currentFolder');
		$('#peopleButton').addClass('currentFolder');
	});


};

$(document).ready(main);

