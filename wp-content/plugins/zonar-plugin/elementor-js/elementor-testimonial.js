(function($) {
    var testimonialCarousel = function ($scope, $) {

		if (jQuery(".testimonilas-carousel-el").length > 0) {
        var j2 = new Swiper(".testimonilas-carousel-el .swiper-container", {
            preloadImages: false,
            slidesPerView: 2,
            spaceBetween: 10,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
			speed: jQuery('.testimonilas-carousel-el .swiper-container').data('slider-speed'), 
			autoplay: jQuery('.testimonilas-carousel-el .swiper-container').data('slider-play'),
            pagination: {
                el: '.tc-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.tc-button-next',
                prevEl: '.tc-button-prev',
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
        elementorFrontend.hooks.addAction('frontend/element_ready/zonar-testimonials.default', testimonialCarousel);
    });

   
})(jQuery);