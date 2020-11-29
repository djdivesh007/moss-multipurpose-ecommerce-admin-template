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

$(function(){
 	// Add some invisible elements with Bootstrap CSS visibile utility classes
	$( "body" ).append( "<div style='display:none;' class='breakpoint-check'><span class='xs d-block d-sm-inline'></span><span class='sm d-sm-block d-md-inline'></span><span class='md d-md-block d-lg-inline'></span><span class='lg d-lg-block d-xl-inline'></span><span class='xl d-xl-block'></span></div>" );
	checkSize();
});

// Recheck on window resize
$( window ).on("resize", function(){
	checkSize();
});