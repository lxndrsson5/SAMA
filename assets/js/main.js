(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$header = $('#header'),
		$banner = $('#banner');

		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

		$('#nav > ul').dropotron({
			alignment: 'right',
			hideDelay: 350,
			noOpenerFade: true
		});

			$(
				'<a href="#navPanel" class="navToggle">' +
					'<span></span>' +
					'<span></span>' +
					'<span></span>' +
				'</a>' +
				'<a href="#navPanel" class="navToggle2">Menu</a>'
			)
				.appendTo($header);

			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>' +
			'</p>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnCanvasClick: true,
					hideOnEscape: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

	
		$('.scrolly').scrolly({
			speed: 1000,
			offset: $header.outerHeight() - 1
		});

})(jQuery);