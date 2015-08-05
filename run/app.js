var App = {

  init: function(libraries, apps, scripts, callback){
  	var components = ['models', 'views'];
    var requirements = [];
    localStorage.setItem("loadFitst", 0);

    //loading libraries
    for (var i = 0; i < libraries.length; i++) {
      requirements.push('order!../libraries/' + libraries[i]);
    };

    //loading apps with components
    for (var i = 0; i < components.length; i++) {
      for (var j = 0; j < apps.length; j++) {
        requirements.push('order!../' + apps[j] + '/' + components[i]);
      }
    }

    //loading scripts
    for (var i = 0; i < scripts.length; i++) {
      requirements.push('order!../main/' + scripts[i]);
    }
    console.log(requirements);
    require(requirements, callback);
  }	

}