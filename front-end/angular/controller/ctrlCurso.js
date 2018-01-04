 app.controller("ctrlCurso",function ($scope, $http, professorAPI, alunoAPI, cursoAPI, statusAPI) {
 	
	//limpar professor
	$scope.limparCurso = function(){
		$scope.curso = {"id": null, "nome": "" ,"horario":  "" ,"vagas": "" ,"conteudo":  "" ,"professor": ""};
		$scope.btnEditarUltimoCurso = false;//desabilita ng disabled para true
		$scope.painelAdmFormCurso.$setPristine();
	}	

	//traz o item do array e coloca no modal
	$scope.editarCurso = function(par){
		$scope.cursoModal = {
			id: par.id,
			nome: par.nome,
			horario: par.horario,
			vagas: par.vagas,
			conteudo: par.conteudo
		};
	}

	//GET povoar professor
	function _carregarProfessor(){
		$scope.arrayProfessor = [];

		professorAPI.getProfessor().then(function(response){
			$scope.arrayProfessor = response.data;
		})
	}

	//GET povoar curso
	function _carregarCurso(){
		$scope.arrayCurso = [];

		cursoAPI.getCurso().then(function(response){
			$scope.arrayCurso = response.data;
		});
		
	}

	//POST ou PUT - postar um novo curso ou editar algum curso
	$scope.cadastrarCurso = function(curso){

		if ($scope.curso.id == null) {
			json =  {
		        "id": null,
		        "nome": curso.nome,
		        "horario": curso.horario,
		        "vagas": curso.vagas,
		        "professor": curso.professor.nome,
		        "conteudo": curso.conteudo
		    };

			cursoAPI.postCurso(json).then(function(){
				$scope.limparCurso();
				$scope.btnEditarUltimoCurso = false;
				_carregarCurso();

				swal({
				    title: "Curso cadastrado com sucesso!",
				    icon: "success",
				    timer: 1500
			  	});
				
			});
		} else {
			json =  {
		        "id": curso.id,
		        "nome": curso.nome,
		        "horario": curso.horario,
		        "vagas": curso.vagas,
		        "professor": curso.professor.nome,
		        "conteudo": curso.conteudo
		    };

			cursoAPI.putCurso(json).then(function(){
				$scope.limparCurso();
				$scope.btnEditarUltimoCurso = false;
				_carregarCurso();
				swal({
				    title: "Curso editado com sucesso!",
				    icon: "success",
				    timer: 1500
				  });
				
			});
		}
	}

	// PUT - função que edita o curso no modal
	$scope.salvarEdicaoCurso = function(){
		json = {
	        "id": $scope.cursoModal.id,
	        "nome": $scope.cursoModal.nome,
	        "horario": $scope.cursoModal.horario,
	        "vagas": $scope.cursoModal.vagas,
	        "professor": $scope.cursoModal.professor.nome,
	        "conteudo": $scope.cursoModal.conteudo
	    }

		cursoAPI.putCurso(json).then(function(){			
			swal({
			    title: "Curso editado com sucesso!",
			    icon: "success",
			    timer: 1500
			  });
			_carregarCurso();			
		});
	}

	//DELETE - exclui o curso selecionado
	$scope.excluirCurso = function(par){

		swal({		   
		    title: "Excluir curso?",
		    icon: "warning",
		    buttons: ["Cancelar", "Excluir!"],
		    dangerMode: true
		  })
		  .then((willDelete) => {
		    if (willDelete) {
		      	swal({
				    title: "Curso excluído com sucesso!",
				    icon: "success",
				    timer: 1500
	    		});		      	
		     	cursoAPI.deleteCurso(par).then(function(){
					_carregarCurso(); //carrega a lista
					$scope.btnEditarUltimoCurso = false; //desabilita ng disabled para true			
				});
		    } 
		  });

	}

	// traz os dados do ultimo curso cadastrado para ser editado
	$scope.editarUltimoCurso = function(){
		var ultimo = $scope.arrayCurso.length - 1; //recupera ultimo item do array

		//recupera todos os ultimos dados
		var id = $scope.arrayCurso[ultimo].id;
		var nome = $scope.arrayCurso[ultimo].nome;
		var horario = $scope.arrayCurso[ultimo].horario;
		var vagas = $scope.arrayCurso[ultimo].vagas;
		var conteudo = $scope.arrayCurso[ultimo].conteudo;

		//passa todos os ultimos dados
		$scope.curso = {id: id, nome: nome, horario: horario, vagas: vagas,  conteudo: conteudo};

		$scope.btnEditarUltimoCurso = true; //valida ng disabled para true		

	}


	/*
	* IMPLEMENTAR O CONTEÚDO DO CURSO NA TELA ADM DO ALUNO
	*
	*/

	//carrega o status de quem esta logado
	function _carregarStatus(){		
		statusAPI.getStatusId(1).then(function(response){
			var armazenaStatus = response.data;	
			if (armazenaStatus.id_perfil != null) {
				_descobreCurso(armazenaStatus.id_perfil);
				_descobrirNomeProfessor(armazenaStatus.id_perfil);

			} 		
		})
	};

	//traz o aluno pra analisar qual curso
	function _descobreCurso(par){				
		alunoAPI.getAlunoId(par).then(function(response){
			$scope.painelAluno = response.data;
			_implementaCurso($scope.painelAluno.curso);

		})
	}

	//implementa qual curso levar pro front do aluno
	function _implementaCurso(par){
		for (var i = 0; i < $scope.arrayCurso.length; i++){
			if (par == $scope.arrayCurso[i].nome ) {
				$scope.conteudoCursoConteudo = $scope.arrayCurso[i].conteudo;
				$scope.conteudoCursoNome = par;
			}
		}
	}


	/*
	* IMPLEMENTAR O CONTEÚDO DO CURSO NA TELA ADM DO PROFESSOR
	* 
	*/

	//busca nome do professor (dado está contigo em outra controller)
	function _descobrirNomeProfessor(id_professor){
		professorAPI.getProfessorId(id_professor).then(function(response){
			var professor = response.data;
			_descobrirQualCursoProfessorDaAula(professor.nome);
		});
	}

	//análise de qual curso o professor da aula
	function _descobrirQualCursoProfessorDaAula(nomeProfessor){
		var tamanho = $scope.arrayCurso.length;
		for (i = 0; i < tamanho; i++){
			if (nomeProfessor == $scope.arrayCurso[i].professor) {
				$scope.dadosCursoLogado = $scope.arrayCurso[i];
				$scope.professorCadastraConteudo = $scope.dadosCursoLogado.conteudo;
			}
		}
	}

	//editar novo conteúdo do curso
	$scope.cadastrarConteudoNoBanco  = function(conteudoCurso){
		editarConteudoCurso = {
			"id": $scope.dadosCursoLogado.id,
	        "nome": $scope.dadosCursoLogado.nome,
	        "horario": $scope.dadosCursoLogado.horario,
	        "vagas": $scope.dadosCursoLogado.vagas,
	        "professor": $scope.dadosCursoLogado.professor,
	        "conteudo": conteudoCurso
		}

		cursoAPI.putCurso(editarConteudoCurso).then(function(){
			swal({
				title: "Conteúdo do curso salvo com sucesso!",
				icon: "success",       
				timer: 1500
			});
		})		
	}

	//limpa o conteúdo cadastrado
	$scope.limparConteudoCadastro = function(){
		$scope.professorCadastraConteudo = "";
		$scope.painelProfessorFormConteudo.$setPristine();
	}


	//carrega funções
	_carregarStatus();
	_carregarCurso();
	_carregarProfessor();
})