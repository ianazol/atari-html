function setTrenerBackground(){
	if($(".js-trener").length > 0){
		var bigImg = $(".js-trener").data("big-img");
		var minImg = $(".js-trener").data("min-img");
		if ($(window).width() >= 768)
			$(".js-trener").css({"backgroundImage": "url("+bigImg+")"});
		else
			$(".js-trener").css({"backgroundImage": "url("+minImg+")"});
	}
}

(function($) {
	setTrenerBackground();

	$(window).resize(function(){
		setTrenerBackground();
	});
})(jQuery);