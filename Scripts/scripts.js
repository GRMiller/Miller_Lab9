$(document).ready(function() {
 console.log('hello');

	$('.toggle_btn').click(function() {
		$('.index_page').css({background:'url(images/capitol_reef_hero_color.jpg) no-repeat center center fixed'}, 1000);
	});

console.log('.index_page')

	$('#about_nav').mouseenter(function() {
		$(this).css('font-size', '2em')
	});

	$('#about_nav').mouseleave(function() {
		$(this).css('font-size', '1.7em')
	});

	$('#port_nav').mouseenter(function() {
		$(this).css('font-size', '2em')
	});

	$('#port_nav').mouseleave(function() {
		$(this).css('font-size', '1.7em')
	});

});
