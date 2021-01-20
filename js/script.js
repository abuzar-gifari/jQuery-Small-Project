
$(document).ready(function(){
    $("#International,#Crime,#Entertainment").hide();
    $("#sports_event").click(function(){
		$("#International,#Crime,#Entertainment").hide();
		$("#Sports").show();
		$("#sports_event").addClass("red");
		$("#Crime_event,#International_event,#Entertainment_event").removeClass("red");
	});
	
    $("#Crime_event").click(function(){
		$("#sports,#International,#Entertainment").hide();
		$("#Crime").show();
		$("#Crime_event").addClass("red");
		$("#sports_event,#International_event,#Entertainment_event").removeClass("red");
	});
	
    $("#Entertainment_event").click(function(){
		$("#sports,#Crime,#International").hide();
		$("#Entertainment").show();
		$("#Entertainment_event").addClass("red");
		$("#Crime_event,#International_event,#sports_event").removeClass("red");
	});
	
    $("#International_event").click(function(){
		$("#sports,#Crime,#Entertainment").hide();
		$("#International").show();
		$("#International_event").addClass("red");
		$("#Crime_event,#Entertainment_event,#sports_event").removeClass("red");
	});
});

