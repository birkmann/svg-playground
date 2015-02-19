'use strict';

myApp.controller('view7Ctrl', function($scope, $filter) {
		
	var globals = {
		'letters': [],
		'masks': []
	};
	
	// Animates a cursive section mask of the 'Relish' SVG
	function animateSectionMask(index) {
		// If current section exists show it and animate mask
		if(index >= 0 && index < globals.masks.length) {
	
			$(globals.letters[index]).css({"opacity": 1});
	
			var pathLength = parseInt($(globals.masks[index]).css("stroke-dasharray"));
	
			$(globals.masks[index])
				.css({"opacity": 1})
				.velocity({
					"stroke-dashoffset": pathLength * 2
				}, {
					"duration": pathLength,
					// "duration": 2000,
					"easing": "linear",
				})
				.velocity({
					"opacity": 0
				}, {
					// "duration": 250,
					"duration": pathLength / 3,
					"delay": 50,
					"easing": "ease-in",
					"queue": false
				}
			);
	
			setTimeout(function() {
				animateSectionMask(index-1); // Animate next section
			}, pathLength / 4);
		}
		// If section does not exist finish by animating in tittle above the letter 'i' in 'Relish'
		else {
			$("#Tittle_Mask").velocity({
				"opacity": 0,
			}, {
				"duration": 600,
				"easing": "ease-in-out",
				"delay": 2500
			});
			$('#bulb').velocity({opacity: 1}, {duration: 1000});
			$('#idea').velocity('transition.bounceIn', {
				duration: 1000, 
				delay: 250,
				complete: function() {
					$('#lightDashes path').velocity('transition.shrinkIn', {
						duration: 500,
						stagger: 50,
						complete: function() {
								$('#arrow').velocity('callout.bounce', { duration: 2000, delay: 2000 });
						}
					});
				}
			});
		}
	}
	
	function initAnimation() {
		/* Store non-mask section paths (i.e. the letters themselves) */
		globals.letters = $('path:not([id$="_Mask"])');
	
		/* Store section mask paths and set stroke dash array to path length */
		globals.masks = $('path[id$="_Mask"]');
	
		/* Set stroke dash array length to path length */
		globals.masks.each(function(i, el) {
			var pathLength = el.getTotalLength();
			$(el).css({
				"stroke-dasharray": pathLength
			});
		});
	
		/* Trigger relish SVG animation */
		animateSectionMask(globals.masks.length - 1);
	}
	
	$(function() {
	
		initAnimation();
		setInterval(initAnimation, 10000); // Repeat every 10 seconds
	
	});

});