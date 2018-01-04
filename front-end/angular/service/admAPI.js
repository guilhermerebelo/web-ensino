app.factory("admAPI", function ($http) {

	const urlAdm = "http://localhost:8080/ensino/rest/administrador";	

	function _getAdm(){
		return $http.get(urlAdm);
	}

	function _putAdm(adm){
		return $http.put(urlAdm, adm);
	}

	return {
		getAdm: _getAdm,
		putAdm: _putAdm
	}
})