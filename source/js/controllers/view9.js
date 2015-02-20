'use strict';

myApp.controller('view9Ctrl', function($scope, $filter) {

	var n = 0;
	
	var paper = Snap('#svg9');

	var bounds= document.getElementById('svg9').getBoundingClientRect();
	var w = bounds.width;  
	var h =w*0.6,topM=0.5*(h-bounds.height)*-1;
	var topM=(h-bounds.height)/2*-1;
	var imgUrls=["http://is12.snstatic.fi/img/978/1288547341885.jpg",
	 "http://is12.snstatic.fi/img/978/1288547326522.jpg",       "http://is11.snstatic.fi/img/658/1288604769411.jpg",
	 "http://is12.snstatic.fi/img/658/1288557829648.jpg","http://is13.snstatic.fi/img/978/1288557989909.jpg"
	];
	var c1 = paper.rect(w*0.08, 0,w*0.2, h);
	var c2 = paper.rect(w*0.5, 0, w*0.3, h);
	var c3 = paper.rect(w*0.9, 0, w*0.1, h);
	
	var imgGroup = paper.g(),
	imgGroup2 = paper.g();
	
	var imgGroupHolder=paper.g(imgGroup);
	
	var g = paper.gradient("L(0, 0, "+0+", "+h+")rgba(124,240,10,0.2)-rgba(124,240,10,.7)");
	var c4 = paper.rect(0, 0, w, h).attr({fill:g});
	
	var maskGroup = paper.g(c1,c2,c3); 
	var naviGroup = paper.g();
	var states = [];
	var naviStates = [];
	
	
	for (n= 0; n < imgUrls.length; ++n) {
	  var img = paper.image(imgUrls[n], n*w, topM, w, h);
	  var img2 = paper.image(imgUrls[n], n*w, topM, w, h);
	  var state = 't'+w*-n+',0';
	  var naviState = 't'+n*40+',0';
	  var naviItem = paper.rect(20+n*40, 15,20, 10);
	  naviItem.attr({'fill':'rgba(54,104,5,1)'});
	  naviGroup.add(naviItem);  
	  states.push(state);
	  naviStates.push(naviState);
	  imgGroup.add(img);
	  imgGroup2.add(img2);
	}
	var naviIndicator = paper.rect(20, 15,20,10);
	naviIndicator.attr({'fill':'#fff'});
	naviGroup.add(naviIndicator);   
	
	function move(i){
	
	  // text.attr({'text':"--"});
	  imgGroup.animate({transform:states[i]}, 5000, mina.easeinout);
	  
	  naviIndicator.animate({transform:naviStates[i]}, 5000, mina.easeinout);
	
	imgGroup2.animate({transform:states[i]}, 5000,mina.easeinoutback, function() {
	var state= ++i in states ? i : 0;
	//text.attr({'text':(i)+'/'+imgUrls.length});
	  setTimeout(function(){move(state);}, 2000);
	});  
	}
	
	
	
	c1.attr({'fill':'white'});
	c2.attr({'fill':'white'});
	c3.attr({'fill':'white'});
	
	
	imgGroupHolder.attr({
	  mask: maskGroup
	});
	
	maskGroup.transform("skewX(-10)");
	
	
	
	
	var text = paper.text(20, 100, "");
	
	
	text.attr({
	  'font-size': 30,
	  'fill': 'rgba(256,256,256,0.6)',
	  'font-family':'Montserrat'
	});
	
	
	move(1);


});