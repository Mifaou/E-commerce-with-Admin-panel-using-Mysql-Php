(function ($) {
    "use strict";

    
    
 
    /*-------------------------------------
    Vegas Slider
    -------------------------------------*/
    if ($.fn.vegas !== undefined && $("#vegas-slide").length) {
        var target_slider = $("#vegas-slide"),
            vegas_options = target_slider.data('vegas-options');
        if (typeof vegas_options === "object") {
            target_slider.vegas(vegas_options);
        }
    }

    /*-------------------------------------
    Animated Headline
    -------------------------------------*/

    if ($.fn.animatedHeadline !== undefined && $(".ah-animate").length) {
        var target_slider = $(".ah-animate"),
            ah_options = target_slider.data('line-options');
        if (typeof ah_options === "object") {
            target_slider.animatedHeadline(ah_options);
        }
    }

    /*-------------------------------------
    Section background image
    -------------------------------------*/
    $("[data-bg-image]").each(function () {
        var img = $(this).data("bg-image");
        $(this).css({
            backgroundImage: "url(" + img + ")"
        });
    });

    $(function () {
        /*-------------------------------------
        Ripples activation code
        -------------------------------------*/
        if ($.fn.ripples !== undefined) {
            $('#wrapper').ripples({
                resolution: 356,
                dropRadius: 20,
                perturbance: 0.04,
            });
        }
        /*-------------------------------------
        Countdown activation code
        -------------------------------------*/
        var eventCounter = $(".countdown");
        if (eventCounter.length) {
            eventCounter.countdown("2021/02/20", function (e) {
                $(this).html(
                    e.strftime(
                        "<div class='countdown-section'><div><div class='countdown-number'>%D</div> <div class='countdown-unit'>Day%!D</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%H</div> <div class='countdown-unit'>Hour%!H</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%M</div> <div class='countdown-unit'>Minutes</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%S</div> <div class='countdown-unit'>Second</div> </div></div>"
                    )
                );
            });
        }
    });

})(jQuery);