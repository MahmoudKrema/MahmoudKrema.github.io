$(function(){
    'use strict';
    var winH   = $(window).height(),
    //innerHeight not height, to include the padding in the calculations
        upperH = $('.upper-bar').innerHeight(),
        navH   = $('.navbar').innerHeight();

    $('.slide .carousel-item').height( winH - ( upperH + navH ));


    //feature work shuffle
    $(".featuredWork ul li").on("click", function(){
        $(this).addClass('active').siblings().removeClass('active');
        // console.log($(this).data('class'));
        if($(this).data('class')==='all')
        {
            $(".featuredWork .shuffleImages .images .col-sm").css('opacity',1);
        }
        else
        {
            $(".featuredWork .shuffleImages .images .col-sm").css('opacity','0.3');
            $($(this).data('class')).parent().css('opacity', 1);
        }


    });

});


