$(document).ready(function(){
	$(".hamburger").click(function(){
		var mainWrapper = $(".main-wrapper");
		if(xs || sm){
			mainWrapper.toggleClass("sidemenu-open");
		}
		else{
			if(mainWrapper.hasClass("horizontal"))
				mainWrapper.toggleClass("without-icon");
			else{
				mainWrapper.toggleClass("mini");
			}
		}
	});

	$(".navigation li").hover(function(){
		$(this).find("a").css("top",  this.getBoundingClientRect().top);
	});

	$(".boxed-layout-btn").click(function(e){
		e.preventDefault();
		$(".right-area .main-content").toggleClass("container container-fluid");
	});
	$(".sidebar-layout-btn").click(function(e){
		e.preventDefault();
		$(".main-wrapper").removeClass("mini").toggleClass("horizontal");
	});


	$(".card [fullscreen]").click(function(e){
		e.preventDefault();
		$(this).parents(".card").toggleClass("fullscreen");
	});

	$(".card [close]").click(function(e){
		e.preventDefault();
		$(this).parents(".card").remove();
	});

	$(".card [reload]").click(function(e){
		e.preventDefault();
		var card = $(this).parents(".card").get(),
			nanobar = new progressBar({
				classname: 'loading-bar',
				target: card[0],
				autoProgress: true
			});
			nanobar.go(30);
			//Simulate Loading
			setTimeout( nanobar.done, 5000);
	});
	//To prevent toggleing of already open Panel
	$('.card [data-toggle]').on('click',function(e){
		$(this).parents(".card").find("button").removeClass("active");
		$(this).addClass("active");
	    if($($(this).data("target")).hasClass("show")){
	        e.stopPropagation();
	    }
	});

});