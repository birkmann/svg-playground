'use strict';

myApp.controller('view1Ctrl', function($scope, $filter) {

	var s = Snap("#svg1");

	var circle_1 = s.circle(300, 200, 140);
	var circle_2 = s.circle(250, 200, 140);
	 
	// Group circles together
	 
	var circles = s.group(circle_1, circle_2);
	 
	var ellipse = s.ellipse(275, 220, 170, 90);
	 
	// Add fill color and opacity to circle and apply
	// the mask
	circles.attr({
	  fill: 'coral',
	  fillOpacity: .6,
	  mask: ellipse
	});
	 
	ellipse.attr({
	  fill: '#fff',
	  opacity: .8
	});
	 
	// Create a blink effect by modifying the rx value
	// for ellipse from 90px to 1px and backwards
	 
	function blink(){
	  ellipse.animate({ry:1}, 220, function(){
	    ellipse.animate({ry: 90}, 300);
	  });
	};
	 
	// Recall blink method once every 3 seconds
	 
	setInterval(blink, 3000);

});