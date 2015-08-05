$(function() {
 $.get("run/settings.json").done(function(settings){
  //optenemos las ruta de las app de angular
  var applications = settings.applications;
   //optenemos las app js
  var applicationsApp = [];

  window.settings = settings.settings;

  applications.forEach(function(application){
    applicationsApp.push("../"+application + "/app" );
  });
   requirejs(applicationsApp, function(app) {
  });
 }).fail(function(err){
  console.log("error" ,err);
 }).always(function(){

 }); 
});