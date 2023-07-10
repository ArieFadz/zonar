(function($) {
    var pieChart = function ($scope, $) {

		jQuery(".piechart-holder-el").appear(function () {
        jQuery(this).find(".chart").each(function () {
            var cbc = jQuery(".piechart-holder").attr("data-skcolor");
            jQuery(".chart").easyPieChart({
                barColor: cbc,
                trackColor: "#eee",
                scaleColor: "#eee",
                size: "70",
                lineWidth: "12",
                lineCap: "butt",
                animate: 3500,
                easing: "easeInBounce",
                onStep: function (a, b, c) {
                    jQuery(this.el).find(".percent").text(Math.round(c));
                }
            });
        });
    });


    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/zonar-piechart.default', pieChart);
    });

   
})(jQuery);