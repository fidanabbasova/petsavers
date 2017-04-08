
	function imgResize() {
		$('.square').each(function() {  
	    	$aWidth = $(this).width();
	    	$(this).height($aWidth);
		// });	
	 //    $('.square > img').each(function() {
	    	$width = $(this).children('img').width();
	    	$height = $(this).children('img').height();


	    	if( $width > $height ){

	        	$(this).children('img').height($aWidth);
	        	// $left = -($width - $aWidth) / 2;
	        	// $(this).css('left', $left);
	        }else{
    			$(this).children('img').width($aWidth);
	        	// $top = -($height - $aWidth) / 2;
	        	// $(this).css('top', $top );
	    	 } 
	    });
	}

	$(document).ready(function() {
	    imgResize();
	});

	$(window).resize(function() {
	    imgResize();
	});

