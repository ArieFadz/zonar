(function($) {
    var teamCarousel = function ($scope, $) {

		if (jQuery(".grid-carousel-el ").length > 0) {
        var totalSlides2 = jQuery(".grid-carousel-el .swiper-slide").length;
        var gridCarusel = new Swiper(".grid-carousel-el .swiper-container", {
            preloadImages: true,
            loop: true,
            centeredSlides: false,
            freeMode: false,
            slidesPerView: 2,
            spaceBetween: 4,
            grabCursor: true,
            mousewheel: false,
            parallax: false,
            speed: jQuery('.grid-carousel-el .swiper-container').data('slider-speed'), 
			autoplay: jQuery('.grid-carousel-el .swiper-container').data('slider-play'),
            navigation: {
                nextEl: '.gc-slider-cont-next',
                prevEl: '.gc-slider-cont-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                640: {
                    slidesPerView: 1,
                },
				550: {
                    slidesPerView: 1,
                },
				300: {
                    slidesPerView: 1,
                },
            }
        });
    }


    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/zonar-team.default', teamCarousel);
    });

   
})(jQuery);