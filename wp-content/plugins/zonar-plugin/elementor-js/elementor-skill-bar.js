(function($) {
    var skillBar = function ($scope, $) {

		jQuery(".skillbar-box-el").appear(function () {
        jQuery(this).find("div.skillbar-bg").each(function () {
            jQuery(this).find(".custom-skillbar").delay(600).animate({
                width: jQuery(this).attr("data-percent")
            }, 1500);
        });
		});


    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/zonar-skill-bar.default', skillBar);
    });

   
})(jQuery);