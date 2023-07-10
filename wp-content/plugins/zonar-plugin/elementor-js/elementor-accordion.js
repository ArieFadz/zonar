(function($) {
    var accordionItem = function ($scope, $) {

		//   accordion ------------------
		jQuery(".accordion-el a.toggle").on("click", function (a) {
			a.preventDefault();
			jQuery(".accordion-el a.toggle").removeClass("act-accordion");
			jQuery(this).addClass("act-accordion");
			if (jQuery(this).next('div.accordion-inner').is(':visible')) {
				jQuery(this).next('div.accordion-inner').slideUp();
			} else {
				jQuery(".accordion-el a.toggle").next('div.accordion-inner').slideUp();
				jQuery(this).next('div.accordion-inner').slideToggle();
			}
		});


    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/zonar-accordion.default', accordionItem);
    });

   
})(jQuery);