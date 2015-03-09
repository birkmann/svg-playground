"use strict";

var myApp = angular.module('myApp', [
    'ngRoute'
]);

myApp.config(function ($routeProvider) {
    $routeProvider
    .when('/view1', {
        templateUrl:'templates/view1.html',
        controller: 'view1Ctrl'
    })
    .when('/view2', {
        templateUrl:'/templates/view2.html',
        controller: 'view2Ctrl'
    })
    .when('/view3', {
        templateUrl:'/templates/view3.html',
        controller: 'view3Ctrl'
    })
    .when('/view4', {
        templateUrl:'/templates/view4.html',
        controller: 'view4Ctrl'
    })
    .when('/view5', {
        templateUrl:'/templates/view5.html',
        controller: 'view5Ctrl'
    })
    .when('/view6', {
        templateUrl:'/templates/view6.html',
        controller: 'view6Ctrl'
    })
    .when('/view7', {
        templateUrl:'/templates/view7.html',
        controller: 'view7Ctrl'
    })
    .when('/view8', {
        templateUrl:'/templates/view8.html',
        controller: 'view8Ctrl'
    })
    .when('/view9', {
        templateUrl:'/templates/view9.html',
        controller: 'view9Ctrl'
    })
    .when('/view10', {
        templateUrl:'/templates/view10.html',
        controller: 'view10Ctrl'
    })
    .otherwise({
        redirectTo: '/view1'
    });
});