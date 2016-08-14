(function($) {
    function Menu(){
        this.menuTL = new TimelineLite();
        this.timer = null;
        this.obOverlay = $(".overlay");
        this.scrollTop = 0;
    }

    Menu.prototype.init = function(){
        var self = this;

        $(".js-menu-open").click(function(event){
            event.preventDefault();
            self.open();
        });

        $(".js-menu-close, .overlay").click(function(event){
            event.preventDefault();
            self.close();
        });
    }

    Menu.prototype.open = function(){
        if(!$("body").hasClass("menu_open")) {
            $("body").addClass("menu_open");

            var links = $(".js-menu-item");
            this.obOverlay.removeClass("overlay--hidden");
            clearTimeout(this.timer);

            this.menuTL
                .staggerFrom(links, 0.2, {
                    x: "-=50",
                    opacity:0,
                    ease:Power0.easeNone
                }, 0.03, "+=0.2");
        }
    }

    Menu.prototype.close = function(){
        var self = this;

        if($("body").hasClass("menu_open")){
            $("body").removeClass("menu_open");

            this.timer = setTimeout(function() {
                self.obOverlay.addClass("overlay--hidden");
            }, 300);
        }
    }

    var menu = new Menu();
    menu.init();

})(jQuery);