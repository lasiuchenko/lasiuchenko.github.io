
$(function () {


    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $('.header__wrap').addClass('header__wrap--fixed');
        }
        
        else {
            $('.header__wrap').removeClass('header__wrap--fixed');
        };
        
    });

    

    
    $('header a, .footer a').on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
    
    $('.slider-reviews__inner').slick({
        dots: true,
        arrows: false,
        infinite: false,
    });

    $('.burger-btn, .menu__link, .logo').on('click', function(){
        $('.menu').toggleClass('menu--active');
        $('.burger-btn').toggleClass('burger-btn--active');
    });

    $('.video, [data-fancybox="gallery"]').fancybox({
        animationEffect: "zoom",
        loop: true,
        animationEffect: "zoom",
        transitionEffect: "fade"
    });


    var mixer = mixitup('.works__content');
})