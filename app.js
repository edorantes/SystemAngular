  window.appGlobal.verifySessionHome();

'use strict';
var App = angular.module("App",["ngRoute"]);
  App.config(function($routeProvider){
        $routeProvider
        .when("/",{
        	controller: "HomeController",
          templateUrl: "home.html"
        });         
  });
  App.controller('HomeController',  function(){
    
  });