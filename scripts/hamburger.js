$(".cross").hide();
$(".menu").hide();
$(".hamburger").click(function() {
	$(".menu").slideToggle("slow", function() {
		$(".hamburger").hide();
		$(".cross").show();
	});
});

$(".cross").click(function() {
	$(".menu").slideToggle("slow", function() {
		$(".cross").hide();
		$(".hamburger").show();
	});
});
//Created by: Glenn Smith https://codepen.io/g13nn/pen/eHGEF