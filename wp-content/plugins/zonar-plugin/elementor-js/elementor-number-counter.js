(function($) {
    var numberCounter = function ($scope, $) {

		//   appear------------------
		jQuery(".stats-el").appear(function () {
			jQuery(".num").countTo();
		});


    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/zonar-number-counter.default', numberCounter);
    });

   
})(jQuery);