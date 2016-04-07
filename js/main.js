$(document).ready(function(){
	$("#gametitle").mouseover(function(){
		this.stop();
	$("#gametitle").mouseout(function(){
		this.start();
		});
	});
	$("#page").mouseover(function(){
		$("#arrows").show();
	});
	$("#page").mouseout(function(){
		$("#arrows").hide();
	});
	$("body").click(function(){
		$(".modal-wrapper").hide();
	});
	$("#question").hover(function(){
		$(".modal-wrapper").fadeIn(10000);
	});
	$(".modal-wrapper").fadeOut(9000);
			
});	



	




