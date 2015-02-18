'use strict';

myApp.controller('view3Ctrl', function($scope, $filter) {

	var paper = Snap("#svg3");

	var circle = paper.circle(10,10,10);
	
	var states = [{
	    fill: '#bada55',
	    cx: 10,
	    cy: 10
	}, {
	    fill: '#55bada',
	    cx: 100
	}, {
	    fill: '#ba55da',
	    cy: 100
	}, {
	    fill: '#000000',
	    cx: 10
	}];
	
	(function animateCircle(el, i) {
	    el.animate(states[i], 1000, function() {
	        animateCircle(el, ++i in states ? i : 0);
	    })
	})(circle, 0);

});