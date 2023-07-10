(function($) {
    var imgCarousel = function ($scope, $) {

		if (jQuery(".center-carousel.center-carousel-el").length > 0) {
        var j2 = new Swiper(".center-carousel.center-carousel-el .swiper-container", {
            preloadImages: true,
            slidesPerView: 'auto',
            spaceBetween: 10,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            autoHeight: false,
            pagination: {
                el: '.ss-slider-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.ccsw-next',
                prevEl: '.ccsw-prev',
            },
        });
    }


    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/zonar-image-carousel.default', imgCarousel);
    });

   
})(jQuery);