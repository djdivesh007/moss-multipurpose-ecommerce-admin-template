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
});