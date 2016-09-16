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
		//key down to get to new folder
        else if(event.which === 40){
            var currentFolder = $(".currentFolder");
            var nextFolder = currentFolder.next();
            if(nextFolder.length != 0){
                currentFolder.removeClass('currentFolder');
                nextFolder.addClass('currentFolder');
                var newId = nextFolder.attr('id');
                if(newId === 'footballButton'){
                    footballAppear(currentFolder);
                }
                else if(newId === 'basketballButton'){
                    basketballAppear(currentFolder);
                }
                else if(newId === 'natureButton'){
                    natureAppear(currentFolder);
                }
                else if(newId === 'peopleButton'){
                    peopleAppear(currentFolder);
                }
            }
        }
        else if(event.which === 38){
            var currentFolder = $(".currentFolder");
            var prevFolder = currentFolder.prev();
            if(prevFolder.attr('id') != 'categories'){
                currentFolder.removeClass('currentFolder');
                prevFolder.addClass('currentFolder');
                var newId = prevFolder.attr('id');
                if(newId === 'footballButton'){
                    footballAppear(currentFolder);
                }
                else if(newId === 'basketballButton'){
                    basketballAppear(currentFolder);
                }
                else if(newId === 'natureButton'){
                    natureAppear(currentFolder);
                }
                else if(newId === 'studyAbroadButton'){
                    studyAppear(currentFolder);
                }
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

var footballAppear = function(curFolder){
    $('#studyAbroad').hide();
    $('#basketball').hide();
    $('#football').show();
    $('#studyAbroad').removeClass('currentContainer');
    $('#basketball').removeClass('currentContainer');
    $('#football').addClass('currentContainer');
   
    var image = curFolder.children("img");
	image.remove();
    $("#footballButton").prepend(image);
}

var basketballAppear = function(curFolder){
    $('#football').hide();
    $('#nature').hide();
    $('#basketball').show();
    $('#football').removeClass('currentContainer');
    $('#nature').removeClass('currentContainer');
    $('#basketball').addClass('currentContainer');

    var image = curFolder.children("img");
	image.remove();
    $("#basketballButton").prepend(image);
    $('#basketballButton').addClass('currentFolder');
}

var natureAppear = function(curFolder){
    $('#basketball').hide();
    $('#people').hide();
    $('#nature').show();
    $('#basketball').removeClass('currentContainer');
    $('#people').removeClass('currentContainer');
    $('#nature').addClass('currentContainer');

    var image = curFolder.children("img");
	image.remove();
    $("#natureButton").prepend(image);
    $('#natureButton').addClass('currentFolder');
}

var peopleAppear = function(curFolder){
    $('#nature').hide();
    $('#people').show();
    $('#nature').removeClass('currentContainer');
    $('#people').addClass('currentContainer');

    var image = curFolder.children("img");
	image.remove();
    $("#peopleButton").prepend(image);
    $('#peopleButton').addClass('currentFolder');
}

var studyAppear = function(curFolder){
    $('#football').hide();
    $('#studyAbroad').show();
    $('#football').removeClass('currentContainer');
    $('#studyAbroad').addClass('currentContainer');

    var image = curFolder.children("img");
	image.remove();
    $("#studyAbroadButton").prepend(image);
    $('#studyAbroadButton').addClass('currentFolder');
}
 
var ar=new Array(33,34,35,36,37,38,39,40);
 
$(document).keydown(function(e) {
    var key = e.which;
    if($.inArray(key,ar) > -1) {
        e.preventDefault();
        return false;
    }
    return true;
});

$(document).ready(main);

