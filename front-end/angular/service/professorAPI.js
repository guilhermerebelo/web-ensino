app.factory("professorAPI", function ($http) {

	const urlProfessor = "http://localhost:8080/ensino/rest/professor";	

	function _getProfessor(){
		return $http.get(urlProfessor);
	}

	function _getProfessorId(id){
		return $http.get(urlProfessor + "/" + id);
	}

	function _postProfessor(professor){
		return $http.post(urlProfessor, professor);
	}

	function _putProfessor(professor){
		return $http.put(urlProfessor, professor);
	}

	function _deleteProfessor(id){
		return $http.delete(urlProfessor + "/" + id);
	}

	return {
		getProfessor: _getProfessor,
		getProfessorId: _getProfessorId,
		postProfessor: _postProfessor,
		putProfessor: _putProfessor,
		deleteProfessor: _deleteProfessor
	}
})