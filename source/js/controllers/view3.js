'use strict';

myApp.controller('view3Ctrl', function($scope, $filter) {

	var s = Snap("#svg3");
	var smallCircle = s.circle(100, 150, 70);
	
	//animation
	function animateSVG(){
	    smallCircle.animate({cy: 300}, 5000,mina.bounce);
	    smallCircle.animate({fill:"red"},200);
	}
	
	//reset function?
	function resetSVG(){
	    // something here to reset SVG??
	}
	
	smallCircle.mouseover(animateSVG,resetSVG);

});