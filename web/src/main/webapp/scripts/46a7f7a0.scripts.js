"use strict";var devApp=angular.module("devApp",[]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]);"use strict",devApp.controller("MainCtrl",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Testacular"]});