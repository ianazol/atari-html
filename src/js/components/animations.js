(function($) {

    var controller = new ScrollMagic.Controller();

    if (!Modernizr.touch) {

        if ($("video").length > 0){
            $("video").get(0).play();
        }
        
        //simple parallax
        $('.js-parallax').each(function(){
            var offset = $(this).data("offset") * 100 + "%";
            var slideParallaxScene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.9,
                //duration: '50%'
            })
            .setTween(TweenMax.from(this, 0.5, {
                autoAlpha: 0, 
                ease:Power0.easeInOut,
                y: offset
            }))
            .addTo(controller);
        });

        $('.js-opacity').each(function(){
            var slideParallaxScene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.9,
                //duration: '50%'
            })
            .setTween(TweenMax.from(this, 0.5, {
                autoAlpha: 0, 
                ease:Power0.easeInOut,
            }))
            .addTo(controller);
        });

        // dark-bg toggle
        var backgroundScene = new ScrollMagic.Scene({
            triggerElement: ".js-toggle-bg",
            triggerHook: 0.6,
        })
        .setClassToggle(".js-toggle-bg", 'dark-bg')
        .addTo(controller);
    }
    else{
        $('.js-toggle-bg').addClass("dark-bg");
    }

    //toggle header color
    $(".js-header-black").each(function() {
        var headerScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0,
            offset: -30,
            duration: this.offsetHeight
        })
        .setClassToggle('.header', 'header--dark')
        .addTo(controller);
    });

    $(".js-scroll").click(function(){
        controller.scrollTo(function (newScrollPos) {
            $("html, body").animate({scrollTop: newScrollPos});
        });
        controller.scrollTo($(window).height());
    });
    

})(jQuery);