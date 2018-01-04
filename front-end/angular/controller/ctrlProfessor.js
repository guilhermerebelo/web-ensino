app.controller("ctrlProfessor",function ($scope, $http, professorAPI, cursoAPI, statusAPI) {
	
	//limpar professor
	$scope.limparProfessor = function(){
		$scope.professor = {"id": null, "email": "" ,"senha":  "" ,"nome": "" ,"telefone":  "" ,"endereco": ""};
		$scope.btnEditarUltimoProfessor = false; //desabilita ng disabled para true
		$scope.painelAdmFormProfessor.$setPristine();
	}	

	//traz o item do array e coloca no modal de edição
	$scope.editarProfessor = function(par){
		$scope.professorModal = {
			id: par.id, 
			email: par.email, 
			senha: par.senha, 
			nome: par.nome, 
			telefone: par.telefone, 
			endereco: par.endereco
		};
	}

	//GET - Buscar todos professores do banco
	function _carregarProfessor(){
		$scope.arrayProfessor = [];

		professorAPI.getProfessor().then(function(response){
			$scope.arrayProfessor = response.data;
		})

	}	
	
	//POST e PUT - editar ultimo e postar novo
	$scope.cadastrarProfessor = function(professor){

		if ($scope.professor.id == null) {//postar novo
			professorAPI.postProfessor(professor).then(function(){
				$scope.limparProfessor();
				$scope.btnEditarUltimoProfessor = false;//desabilita ng disabled para true

				swal({
			        title: "Professor cadastrado com sucesso!",
			        icon: "success",
			        timer: 1500
			      });

				_carregarProfessor(); //carrega a lista
				
			});
		} else {//editar ultimo

			professorAPI.putProfessor($scope.professor).then(function(){

				$scope.limparProfessor();
				$scope.btnEditarUltimoProfessor = false;//desabilita ng disabled para true
				_carregarProfessor(); //carrega a lista

				swal({
			        title: "Professor editado com sucesso!",
			        icon: "success",
			        timer: 1500
			      });
			});			
		}				
	}



	// PUT - editar no modal de professores
	$scope.salvarEdicaoProfessor = function(par){
		_buscarCursos(par.nome, par.id);

		professorAPI.putProfessor(par).then(function(){			
			swal({
		        title: "Professor editado com sucesso!",
		        icon: "success",
		        timer: 1500
			});
			_carregarProfessor(); //carrega a lista			
		});

	}

	//DELETE
	$scope.excluirProfessor = function(par){
		swal({		
		  title: "Excluir o professor?",
		  icon: "warning",
		  buttons: ["Cancelar", "Excluir!"],
		  dangerMode: true		  
		})
		.then((willDelete) => {
		  if (willDelete) {
		    swal({
			    title: "Professor excluído com sucesso!",
			    icon: "success",
			    timer: 1500
		    });
		    
		    professorAPI.deleteProfessor(par).then(function(){
				_carregarProfessor(); //carrega a lista
				$scope.btnEditarUltimoProfessor = false;//desabilita ng disabled para true
			});	
		  } 
		});

		
	}


	//editar ultimo
	$scope.editarUltimoProfessor = function(){
		var ultimo = $scope.arrayProfessor.length - 1; //recupera ultimo item do array

		//recupera todos os ultimos dados
		var id = $scope.arrayProfessor[ultimo].id;
		var email = $scope.arrayProfessor[ultimo].email;
		var senha = $scope.arrayProfessor[ultimo].senha;
		var nome = $scope.arrayProfessor[ultimo].nome;
		var telefone = $scope.arrayProfessor[ultimo].telefone;
		var endereco = $scope.arrayProfessor[ultimo].endereco;

		//passa todos os ultimos dados pra professor
		$scope.professor = {id: id, email: email, senha: senha, nome: nome, telefone: telefone, endereco: endereco};

		$scope.btnEditarUltimoProfessor = true; //valida ng disabled para true		

	}


	/*
	* IMPLEMENTAÇÕES DE LOGIN
	*
	*/

	//salvar status de um novo login no banco de dados 
	function _salvarStatus(par){
		
		const id = 1;
		salvarStatus = {"id": id, "logado": true, "id_perfil": par.id, "tipo_perfil": 'professor'};

		statusAPI.putStatus(salvarStatus).then(function(){
			swal({
		        title: "Bem vindo!",
		        icon: "success"     
		      });
		});
	}


	//buscar usuario e senha pra fazer login
	$scope.fazerLogin = function(login){
		var tamanhoArray = $scope.arrayProfessor.length;
		for(i = 0; i < tamanhoArray; i++){
			if ( $scope.arrayProfessor[i].email == login.email  && $scope.arrayProfessor[i].senha == login.senha) {
				
				_salvarStatus($scope.arrayProfessor[i]);
				setTimeout(function(){
					window.location.replace("../adm/professor.html");	
				},1200);				
				return null;
			};
		}
		swal({
	      title: "Usuário ou senha incorretos",
	      icon: "error",  
	      timer: 2000     
	    });
	}


	//carrega o status do bando de dados e chama a função pra popular o front
	function _carregarStatus(){
		statusAPI.getStatusId(1).then(function(response){
			var armazenaStatus = response.data;	
			if (armazenaStatus.id_perfil != null) {
				_popularPainelProfessor(armazenaStatus.id_perfil);
			} 		
		})
	};

	//popular painel do professor no admin do professor
	function _popularPainelProfessor(par){
		professorAPI.getProfessorId(par).then(function(response){
			$scope.painelProfessor = response.data;
		})
	}


	/////////////////////////////////////
	/*
	* IMPLEMENTAÇÕES DE EDIÇÃO DO ALUNO NA TELA
	*
	*/

	$scope.editarPainelProfessor = function(par){
		professor = {
			"id": par.id,
			"email": par.email,
			"nome": par.nome,
			"telefone": par.telefone,
			"endereco": par.endereco,
			"senha": $scope.painelProfessor.senha
		};
		_buscarCursos(par.nome);
		$scope.salvarEdicaoProfessor(professor);
	}

	$scope.restaurarProfessor = function(){
		_carregarStatus();
	}

	
	/*
	* IMPLEMENTAÇÕES DE CORREÇÃO DE BUG
	* QUANDO ALTERAR O NOME DO PROFESSOR, ELE TEM QUE MUDAR NO NOME PRO PROFESSOR DA TABELA CURSO
	*/

	function _buscarCursos(nomeProfessor, idPerfilProfessor){
		
		cursoAPI.getCurso().then(function(response){
			var cursos = response.data;
			_relacionaProfessorComSeuCurso(nomeProfessor, idPerfilProfessor, cursos);
		})
	}


	//relaciona e altera o professor em todos os cursos que ele da aula
	function _relacionaProfessorComSeuCurso(novoNomeProfessor, idPerfilProfessor, cursos){

		statusAPI.getStatusId(1).then(function(response){
			var armazenaStatus = response.data;	
			if (armazenaStatus.id_perfil != null) {	// CASO O PROFESSOR ESTEJA LOGADO ENTRA NESSA CONDIÇÃO
				for (i = 0; i < $scope.arrayProfessor.length; i++){
					if (armazenaStatus.id_perfil == $scope.arrayProfessor[i].id) {
						var nomeAntigo = $scope.arrayProfessor[i].nome;
						for (x = 0; x < cursos.length; x++){
							if (nomeAntigo == cursos[x].professor) {
								_alterarNomeProfessorCurso(cursos[x], novoNomeProfessor);
							}
						}
					}
				}
			} else {
				for (i = 0; i < $scope.arrayProfessor.length; i++){ // CASO UM PROFESSOR NÃO ESTEJA LOGADO ENTRA NESSA CONDIÇÃO
					if (idPerfilProfessor == $scope.arrayProfessor[i].id) {
						var nomeAntigo = $scope.arrayProfessor[i].nome;
						for (x = 0; x < cursos.length; x++){
							if (nomeAntigo == cursos[x].professor) {
								_alterarNomeProfessorCurso(cursos[x], novoNomeProfessor);
							}
						}
					}
				}
			}
		})
	}


	// PUT - altera o nome do professor no curso em que ele da aula
	function _alterarNomeProfessorCurso(curso, novoNomeProfessor){
		jsonNovoNome = {
	        "id": curso.id,
	        "nome": curso.nome,
	        "horario": curso.horario,
	        "vagas": curso.vagas,
	        "professor": novoNomeProfessor,
	        "conteudo": curso.conteudo
	    };

		cursoAPI.putCurso(jsonNovoNome).then(function(){

			swal({
				title: "Dados alterados com sucesso!",
				icon: "success",
				timer: 1500
			});
			
		})
	}
	
	_carregarStatus();
	_carregarProfessor();
})