$(document).ready(function(){
	
	// Show the first image
	$("#slider img").eq(0).show();

	// Set up our index variable
	var index = 0;

	// setInterval(function(){

	// 	// Hide the current image
	// 	$("#slider img").eq(index).hide();

	// 	// Increment our index variable
	// 	// index++;

	// 	// Reset index
	// 	// if(index >= $("#slider img").length){
	// 	// 	index = 0;
	// 	// }

	// 	index = (index + 1) % $("#slider img").length;

	// 	// Show the next image
	// 	$("#slider img").eq(index).show();

	// }, 3000);

	$("#next").click(function(){
		$("#slider img").eq(index).hide();
		index = (index + 1) % $("#slider img").length;
		$("#slider img").eq(index).show();
	});

	$("#prev").click(function(){
		// Hide the current image
		$("#slider img").eq(index).hide();
		index = (index - 1) % $("#slider img").length;
		$("#slider img").eq(index).show();
	});

});