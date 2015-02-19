'use strict';

myApp.controller('view4Ctrl', function($scope, $filter) {
	
	var s = Snap("#svg4");
	var g = s.group();
	var tux = Snap.load("img/telephone118.svg", function ( loadedFragment ) {
		g.append( loadedFragment );
		g.hover( hoverover, hoverout );
	});
	
	var hoverover = function() { g.animate({ transform: 's0.5r0,150,150' }, 1000) };
	var hoverout = function() { g.animate({ transform: 's1r0,150,150' }, 1000) };

});