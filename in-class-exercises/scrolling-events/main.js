$(function() {
	console.log('hello');
	console.log( $( "#header" ) );

	$( "#header" ).click(function() {
		console.log('i clicked');
		console.log('p elements', $('p'));
			$("p").toggle();
	});
});


$(function() {
	$( "p" ).click(function() {
		$("#header").toggle();
	});
});