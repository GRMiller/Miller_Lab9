$(document).ready(function() {
 console.log('hello');

	$('.toggle_btn').click(function() {
		$('.index_page').css('background-image','url(images/capitol_reef_hero_color.jpg)');
		$('.toggle_btn').text('Revert to GrayScale').addClass('toggle_bw');
	});

	$('.toggle_bw').click(function(){
		$('.index_page').css('background-image','url(images/capitol_reef_hero_bw.jpg');
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
