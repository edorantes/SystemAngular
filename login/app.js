   window.appGlobal.verifySessionLogin();
  'use strict';
   var Login = angular.module("Login",["ngRoute"]);
   Login.config(function($routeProvider){
        $routeProvider
        .when("/",{
        	controller: "LoginController",
            templateUrl: "index.html"
        });         
   });

   Login.controller("LoginController",function($scope,$http){
   	//obtenemos los datos json
   	$http.get('../run/settings.json').success(function (data) {
        $scope.settings = data;
        $scope.logo = "http://i.imgur.com/RcmcLv4.png"
        console.log(data);
        if(data.settings.imgLogo != ""){
        	$scope.logo = data.settings.imgLogo
        }
    });
   	console.log($scope.logo);
  	//contollar el inicio de sessión
     $scope.startSession = function(){
   	 	
   	 };
   	 
   	 
   });

   Login.directive('imgLogo', function() {
    return {
      template: '<img src="{{ logo }}" class="img-responsive" alt="" />'
    }
})


 



