//E Logo Color Change
$(document).ready( function() {
    $( ".sidebar" ).mouseenter(function() {
      $(".e").css("filter", "grayscale(0%)");
    });
    $( ".sidebar" ).mouseleave(function() {
      $(".e").css("filter", "grayscale(100%)");
    });
  } );
//Sidebar Icons Fade
$(document).ready(function(){
    $(".sidebar").mouseenter(function(){
        $(".github").fadeTo(500, 1);
        $(".linkedin").fadeTo(500, 1);
    });
    $(".sidebar").mouseleave(function(){
        $(".github").fadeTo(500, 0);
        $(".linkedin").fadeTo(500, 0);
    });
});
//About Section Page Layout Change
function slideAbout(){
	$(".cellAbout").css("height", "10%");
	$(".cellProjects").css("height", "10%");
	$(".cellGames").css("height", "10%");
	$(".textAbout").slideToggle("2000");
	$(".textAbout").css("height", "70%");
}

$(document).ready(function(){
    $(".about").click(function(){
        $(".cellAbout").css("height", "10%");
        $(".cellProjects").css("height", "45%");
        $(".cellGames").css("height", "45%");
    });
    $(".about").click(function(){
    	setTimeout(slideAbout, 2000);
    });
});