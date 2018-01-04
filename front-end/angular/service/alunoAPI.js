app.factory("alunoAPI", function ($http) {

	const urlAluno = "http://localhost:8080/ensino/rest/aluno";	

	function _getAluno(){
		return $http.get(urlAluno);
	}

	function _getAlunoId(id){
		return $http.get(urlAluno + "/" + id);
	}

	function _postAluno(aluno){
		return $http.post(urlAluno, aluno);
	}

	function _putAluno(aluno){
		return $http.put(urlAluno, aluno);
	}

	function _deleteAluno(id){
		return $http.delete(urlAluno + "/" + id);
	}

	return {
		getAluno: _getAluno,
		getAlunoId: _getAlunoId,
		postAluno: _postAluno,
		putAluno: _putAluno,
		deleteAluno: _deleteAluno
	}
})