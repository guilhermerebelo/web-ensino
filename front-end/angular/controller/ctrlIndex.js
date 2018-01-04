app.controller("ctrlIndex",function ($scope, $http, cursoAPI) {

	// busca os cursos para listar na home
	function _buscarCursos(){		
		cursoAPI.getCurso().then(function(response){
			$scope.cursos = response.data;
		})
	}

	_buscarCursos();
})