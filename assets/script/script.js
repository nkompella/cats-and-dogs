$(document).ready(function() {

	// jquery function number 1 (fadeIn)

	$("#golden").click(function() {
		$("#text1").fadeIn();
		$("#text2").hide();
		$("#text3").hide();
		$("#text4").hide();
		$("#text5").hide();
		$("#text6").hide();

	});

	// jquery function number 2 (hide)

	$("#pug").click(function() {
		$("#text1").hide();
		$("#text2").fadeIn();
		$("#text3").hide();
		$("#text4").hide();
		$("#text5").hide();
		$("#text6").hide();

	});

	// jquery function number 3 (fadeOut)

	$("#rott").click(function() {
		$("#text1").fadeOut();
		$("#text2").fadeOut();
		$("#text3").fadeIn();
		$("#text4").fadeOut();
		$("#text5").fadeOut();
		$("#text6").fadeOut();

	});

	// jquery function number 4 (show)

	$("#corgi").click(function() {
		$("#text1").hide();
		$("#text2").hide();
		$("#text3").hide();
		$("#text4").show();
		$("#text5").hide();
		$("#text6").hide();

	});


	$("#poodle").click(function() {
		$("#text1").hide();
		$("#text2").hide();
		$("#text3").hide();
		$("#text4").hide();
		$("#text5").fadeIn();
		$("#text6").hide();

	});


	$("#lab").click(function() {
		$("#text1").hide();
		$("#text2").hide();
		$("#text3").hide();
		$("#text4").hide();
		$("#text5").hide();
		$("#text6").fadeIn();

	});



	// $("#strip-button").click(function() {
	// 	$("#body").fadeIn();
	// 	$("#o1").fadeOut();
	// 	$("#o2").fadeOut();
	// 	$("#o3").fadeOut();
	// 	$("#o4").fadeOut();
	// 	$("#o5").fadeOut();

	// });




});