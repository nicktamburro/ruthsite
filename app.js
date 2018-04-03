
$(document).ready(function(){


if ( $(window).width() > 739) {     
  $("#menu").hide(); 
  $("#close").hide();
  $("#links").show();
} 
else {
  $("#links").hide();
  $("#close").hide();

$("#menu").click(function(event){
	event.preventDefault();
		$("#menu").hide();
		$("#close").show();
		$("#links").show();
	});

$("#close").click(function(event){
	event.preventDefault();
	$("#close").hide();
	$("#menu").show();
	$("#links").hide();
})




}




});