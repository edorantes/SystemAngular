(function(){
	window.appGlobal = {

		verifySessionHome: function(){
			console.log("entro");
			if(typeof(Storage) !== "undefined") {
			    var user = this.getUser();
			    if(!user.id || !user.name || !user.token){
			    	console.log("entro 2");
			    	location.href = window.location.href+"/login";

			    }
			} else {
			    alert("Navegador no soportado");
			}
		},
		verifySessionLogin: function(){
			if(typeof(Storage) !== "undefined") {
			    var user = this.getUser();
			    console.log(user);
			    if(typeof user.id != undefined && typeof user.name != undefined && typeof user.token != undefined){
			    	console.log("sssss");
			    	//location.href = window.location.href.replace("login/","");
			    }
			    return false;
			} else {
			    alert("Navegador no soportado");
			}
		},
		encode: function(user){
		  string = btoa(JSON.stringify(stringify));
		  return string;
		},
		decode: function(string){
			if(!string){
				return "";
			}
			return atob(JSON.parse(string));
		},
		getUser: function(){
		 return this.decode(sessionStorage.user);
		}
	}
})();