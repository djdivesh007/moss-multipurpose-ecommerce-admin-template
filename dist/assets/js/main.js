(function (root) {
	function calcStep(currentWidth){
		if(currentWidth < 30)
			return 5;
		if(currentWidth < 60)
			return 1;
		if(currentWidth < 85)
			return 0.8;
		if(currentWidth < 90)
			return 0.7;
		if(currentWidth < 95)
			return 0.3;
		return 0.01;
	};
	function removeElement(elementId) {
	    // Removes an element from the document
	    var element = document.getElementById(elementId);
	    element.parentNode.removeChild(element);
	};


	function addClass (el, cls) {
		if (el.classList) el.classList.add(cls)
		else el.className += ' ' + cls
	}

	function progressBar(options){
    	options = options || {}
		var nanobar = new Nanobar(options);
		nanobar.el.classList.remove("loaded");
		addClass(nanobar.el, "loading");
		nanobar.loaded = false;
		nanobar.autoProgress = function() {
			var apTimer = setInterval(function() {
				nanobar.stepup();
				if(nanobar.loaded){
					clearInterval(apTimer);
					nanobar.go(100);
				}
			}, 200);
		};
		nanobar.stepup = function() {
			var me = this;
			width = parseFloat(me.el.children[0].style.width) || 0;
			width = width + calcStep(width);
			if(width >= 100) width = 99.9;
			nanobar.go(width);
		};
		nanobar.done = function() {
			var me = this;
			nanobar.loaded = true;
			addClass(nanobar.el, "loaded");
			nanobar.el.classList.remove("loading");
			setTimeout(function() {
				nanobar.el.remove()
			}, 300);
		};
		if(options.autoProgress){
			nanobar.autoProgress();
		};
		return nanobar;
	};

	if (typeof exports === 'object') {
		// CommonJS
		module.exports = progressBar
	} else if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define([], function () { return progressBar })
	} else {
		// Browser globals
		root.progressBar = progressBar
	}
}(this));
// Create global variables that can be used elsewhere

// set variables  
var xs;
var sm;
var md;
var lg;
var xl;
var breakpoint;

// Checks if the span is set to display lock via CSS
function checkIfBlock (target) {
    var target = $(target).css('display') == 'block';
    return target;
}

// function to check the sizes
function checkSize (){
	// Set some variables to use with the if checks below
	xs = checkIfBlock('.breakpoint-check .xs');
	sm = checkIfBlock('.breakpoint-check .sm');
	md = checkIfBlock('.breakpoint-check .md');
	lg = checkIfBlock('.breakpoint-check .lg');
	xl = checkIfBlock('.breakpoint-check .xl');
	// add the breakpoint to the console
	if( xs == true) {
		breakpoint = "xs";
		$("body").removeClass('xs sm md lg xl').addClass( "xs" );
	} 
	if( sm == true) {
		breakpoint = "sm";
		$("body").removeClass('xs sm md lg xl').addClass( "sm" );
	} 
	if( md == true) {
		breakpoint = "md";
		$("body").removeClass('xs sm md lg xl').addClass( "md" );
	} 
	if( lg == true) {
		breakpoint = "lg";
		$("body").removeClass('xs sm md lg xl').addClass( "lg" );
	} 
	if( xl == true) {
		breakpoint = "xl";
		$("body").removeClass('xs sm md lg xl').addClass( "xl" );
	}
}

$(document).ready(function(){
 	// Add some invisible elements with Bootstrap CSS visibile utility classes
	$( "body" ).append( "<div style='display:none;' class='breakpoint-check'><span class='xs d-block d-sm-inline'></span><span class='sm d-sm-block d-md-inline'></span><span class='md d-md-block d-lg-inline'></span><span class='lg d-lg-block d-xl-inline'></span><span class='xl d-xl-block'></span></div>" );
	checkSize();
});

// Recheck on window resize
$( window ).resize( function(){
	checkSize();
});
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