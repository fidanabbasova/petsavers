function active() {
    $('.collapse ul li a').click(function() {
        $('.collapse ul li a').removeAttr('class');
        $(this).addClass('active');
        // deyis

     //    var $href = $(this).attr('');

        // var $x = $('#adoption').offset();

  //       var $y = $('.navbar').height();

        // window.scrollBy(0, $x.top -$y );

  //       console.log( $x.top -$y);
        
    });
}

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

$(document).scroll(function() {
    var $z = $('#home').height() *3/4;
    if( $(this).scrollTop() > $z ) {
        $('.navbar').addClass('navbar-fixed-top');
    }else{
        $('.navbar').removeClass('navbar-fixed-top');
    }
});

$(document).ready(function() {
    imgResize();
    active();
});

$(window).resize(function() {
    imgResize();
});
