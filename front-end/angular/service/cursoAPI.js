app.factory("cursoAPI", function ($http) {

	const urlCurso = "http://localhost:8080/ensino/rest/curso";	

	function _getCurso(){
		return $http.get(urlCurso);
	}

	
	function _postCurso(curso){
		return $http.post(urlCurso, curso);
	}

	function _putCurso(curso){
		return $http.put(urlCurso, curso);
	}

	function _deleteCurso(id){
		return $http.delete(urlCurso + "/" + id);
	}

	return {
		getCurso: _getCurso,
		postCurso: _postCurso,
		putCurso: _putCurso,
		deleteCurso: _deleteCurso
	}
})