'use strict';

myApp.controller('view5Ctrl', function($scope, $filter) {
		
	var s = Snap("#svg5");
	
	var innerCircle = s.circle(150, 150, 80).attr({
	    fill: "none",
	    stroke: '#202020',
	    strokeWidth: 30,
	    strokeDasharray: "10 10 10",
	    strokeDashoffset: 5
	});
	
	Snap.animate(0,4000, function( value ){
	       innerCircle.attr({ 'strokeDashoffset': value })
	
	},50000 );

/*


	var animating = true;
	
	//animation
	function animOn(){
	  if( animating ) {
	    innerCircle.animate({
			opacity: '1',  
	        r: 70,
	        fill: 'none'
	    }, 1000, mina.elastic, animOut);
	  };
	}
	
	function animOut() {
	  innerCircle.animate({
	      opacity: '0.3',  
	      r: 20,
	      fill: 'none'
	   }, 1000, mina.elastic, animOn);
	};
	
	innerCircle.hover(function() { animating=true; animOn() },      
	    function() { animating=false });


*/	



});