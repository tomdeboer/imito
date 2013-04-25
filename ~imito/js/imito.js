


var Imito = ( function( $, undefined ){

	var $container, $slides, $active_slide;

	$( function(){
		
		$container	= $('#slides_container');
		$slides		= $container.children();

		$active_slide = $slides.first();
	} );

	function next(){

		$next = $active_slide.next();
		if( ! $next.length ) $next = $slides.first();

		focus( $next );

		$active_slide = $next;
	}
	function previous(){
		$next = $active_slide.prev();
		if( ! $next.length ) $next = $slides.last();

		focus( $next );
		
	}

	function focus( $el ){

		var index = $.inArray( $el[ 0 ], $slides );

		$container.transition( { x: ( index * -100 ) + '%', y: 0 } );

		$active_slide = $el;

	};

	$( this ).on('keydown', function( e ){

		switch( e.keyCode ){
			case 13: // Enter
			case 39: // Right
			case 40: // Down
			case 190:// Period
			case 32: // Space
				next();
			break;

			case 8: // Backspace
			case 37: // Left
			case 38: // Up
			case 188: // Comma
				previous();
			break;

		}

	} )


} )( jQuery );