app.controller("ctrlAluno", function ($scope, $http, professorAPI, alunoAPI, cursoAPI, statusAPI) {

	//limpar aluno
	$scope.limparAluno = function(){
		$scope.aluno = {"id": null, "email": "" ,"senha":  "" ,"nome": "" ,"telefone":  "" ,"endereco": "" ,"curso": ""};
		$scope.btnEditarUltimoAluno = false;//desabilita ng disabled para true
		$scope.painelAdmFormAluno.$setPristine();
	}

	//traz o ultimo item do array e coloca no modal de edição
	$scope.editarAluno = function(par){
		_carregarAlunoId(par.id);
	}

	//GET - aluno por id
	function _carregarAlunoId(id_aluno){
		alunoAPI.getAlunoId(id_aluno).then(function(response){
			var alunoModal = response.data;
			$scope.alunoModal = alunoModal;
		})
	}

	//GET - carregar curso
	function _carregarCurso(){
		$scope.arrayCurso = [];
		cursoAPI.getCurso().then(function(response){
			$scope.arrayCurso = response.data;
	        $scope.lengthCursos = $scope.arrayCurso.length;
		})
	}

	//GET - carregar aluno
	function _carregarAluno(){
		$scope.arrayAluno = [];
		alunoAPI.getAluno().then(function(response){
			$scope.arrayAluno = response.data;
		})

	}


	//POST - aluno se cadastra na pagina cadastro
	$scope.cadastroAlunoHome = function(aluno){
		json = {
	        "id": null,
	        "email": aluno.email,
	        "senha": aluno.senha,
	        "nome": aluno.nome,
	        "telefone": aluno.telefone,
	        "endereco": aluno.endereco,
	        "curso": aluno.curso.nome,
	        "nota1": aluno.nota1,
	        "nota2": aluno.nota2,
	        "nota3": aluno.nota3,
	        "nota4": aluno.nota4
	    };
		
		alunoAPI.postAluno(json).then(function(){			
			swal({
			  title: "Cadastro concluído!",
			  icon: "success"			  
			});
			setTimeout(function(){
				window.location.replace("login/login-alunos.html");	
			},2500)
		});
	}


	//POST e PUT - cadastro e edição de aluno
	$scope.cadastrarAluno = function(aluno){

		if ($scope.aluno.id == null) {
			json = {
		        "id": null,
		        "email": aluno.email,
		        "senha": aluno.senha,
		        "nome": aluno.nome,
		        "telefone": aluno.telefone,
		        "endereco": aluno.endereco,
		        "curso": aluno.curso.nome,
		        "nota1": aluno.nota1,
		        "nota2": aluno.nota2,
		        "nota3": aluno.nota3,
		        "nota4": aluno.nota4
		    };
		    
			alunoAPI.postAluno(json).then(function(){
				$scope.btnEditarUltimoAluno = false;
				$scope.limparAluno();
				_carregarAluno();
				
				swal({
				    title: "Aluno cadastrado com sucesso!",
				    icon: "success",
				    timer: 1500
			  	});
				
			});
		} else {
			json = {
		        "id": aluno.id,
		        "email": aluno.email,
		        "senha": aluno.senha,
		        "nome": aluno.nome,
		        "telefone": aluno.telefone,
		        "endereco": aluno.endereco,
		        "curso": aluno.curso.nome,
		        "nota1": aluno.nota1,
		        "nota2": aluno.nota2,
		        "nota3": aluno.nota3,
		        "nota4": aluno.nota4
		    };

			alunoAPI.putAluno(json).then(function(){
				$scope.btnEditarUltimoAluno = false;				
				$scope.limparAluno();
				_carregarAluno();

				swal({
				    title: "Aluno editado com sucesso!",
				    icon: "success",
				    timer: 1500
				  });
			});
		}
	}


	// PUT - editar no modal aluno
	$scope.salvarEdicaoAluno = function(par){
		json = {
	        "id": par.id,
	        "email": par.email,
	        "senha": par.senha,
	        "nome": par.nome,
	        "telefone": par.telefone,
	        "endereco": par.endereco,
	        "curso": par.curso.nome,
	        "nota1": par.nota1,
	        "nota2": par.nota2,
	        "nota3": par.nota3,
	        "nota4": par.nota4
	    };

		alunoAPI.putAluno(json).then(function(){
			
			_carregarAluno();

			swal({
			    title: "Aluno editado com sucesso!",
			    icon: "success",
			    timer: 1500
			});
			
		});
	}


	//DELETE
	$scope.excluirAluno = function(par){		

		swal({		   
		    title: "Excluir aluno?",
		    icon: "warning",
		    buttons: ["Cancelar", "Excluir!"],
		    dangerMode: true
		  })
		  .then((willDelete) => {
		    if (willDelete) {
		      	swal({
				    title: "Aluno excluído com sucesso!",
				    icon: "success",
				    timer: 1500
			   	 });

			     alunoAPI.deleteAluno(par).then(function(){
					_carregarAluno(); //carrega a lista
					$scope.btnEditarUltimoAluno = false;//desabilita ng disabled para true			
				});

		    } 
		  });

	}

	// adicionar dados do ultimo aluno para serem editados
	$scope.editarUltimoAluno = function(){
		var ultimo = $scope.arrayAluno.length - 1; //recupera ultimo item do array

		//recupera todos os ultimos dados
		var id = $scope.arrayAluno[ultimo].id;
		var email = $scope.arrayAluno[ultimo].email;
		var senha = $scope.arrayAluno[ultimo].senha;
		var nome = $scope.arrayAluno[ultimo].nome;
		var telefone = $scope.arrayAluno[ultimo].telefone;
		var endereco = $scope.arrayAluno[ultimo].endereco;
		var nota1 = $scope.arrayAluno[ultimo].nota1;
		var nota2 = $scope.arrayAluno[ultimo].nota2;
		var nota3 = $scope.arrayAluno[ultimo].nota3;
		var nota4 = $scope.arrayAluno[ultimo].nota4;
		

		//passa todos os ultimos dados para aluno
		$scope.aluno = {
			id: id,
			email: email,
			senha: senha,
			nome: nome,
			endereco: endereco,
			telefone: telefone,
			nota1:  nota1,
			nota2: nota2,
			nota3: nota3,
			nota4: nota4
		};

		$scope.btnEditarUltimoAluno = true; //valida ng disabled para true

	}

	/*
	* IMPLEMENTAÇÕES DE LOGIN DO ALUNO
	*
	*/


	//salvar status de um novo login no banco de dados 
	function _salvarStatus(par){
		const id = 1;
		salvarStatus = {"id": id, "logado": true, "id_perfil": par.id, "tipo_perfil": 'aluno'};

		statusAPI.putStatus(salvarStatus).then(function(){
			
			swal({
			  title: "Bem vindo!",
			  icon: "success"		 
			});

		});

	}

	//buscar usuario e senha pra fazer login
	$scope.fazerLogin = function(login){
		var tamanhoArray = $scope.arrayAluno.length;
		for(i = 0; i < tamanhoArray; i++){
			if ( $scope.arrayAluno[i].email == login.email  && $scope.arrayAluno[i].senha == login.senha) {
				_salvarStatus($scope.arrayAluno[i]);
				setTimeout(function(){
					window.location.replace("../adm/aluno.html");	
				},1200)
				
				return null;
			};
		}
		
		swal({
		  title: "Usuário ou senha incorretos!",
		  icon: "error",
		  timer: 2000		 
		});

	}

	//carrega o status do bando de dados e chama a função pra popular o front
	function _carregarStatus(){
		statusAPI.getStatusId(1).then(function(response){
			var armazenaStatus = response.data;
			if (armazenaStatus.id_perfil != null) {
				_popularPainelAluno(armazenaStatus.id_perfil);
				_getNomeProfessorLogado(armazenaStatus.id_perfil);
			} 			
		})
	};


	//traz o status pro front end
	function _popularPainelAluno(par){	
		alunoAPI.getAlunoId(par).then(function(response){
			$scope.painelAluno = response.data;
			_dividirNota($scope.painelAluno);
		})
	}


	//Calcula a média da nota no painel do aluno
	function _dividirNota(notas){
		var numero = 0;
	    if (notas.nota1 != undefined ) {
	      numero = 1;
	    }

	    if (notas.nota2 != undefined ) {
	      numero = numero + 1;
	    }

	    if (notas.nota3 != undefined ) {
	      numero = numero + 1;
	    }

	    if (notas.nota4 != undefined ) {
	      numero = numero + 1;
	    }

	    if (numero == 0) {
	    	//corrige NaN
	    	 $scope.dividirNota = 1;
	    } else{
	    	$scope.dividirNota = numero;
	    }
	   
	    
  	}


	/*
	* IMPLEMENTAÇÕES DE EDIÇÃO DO ALUNO NA TELA DO ALUNO
	*
	*/

	//aluno editando seus dados
	$scope.editarPainelAluno = function(par){
		aluno = {
			"id": par.id,
			"email": par.email,
			"nome": par.nome,
			"telefone": par.telefone,
			"endereco": par.endereco,
			"curso": $scope.painelAluno.curso,
			"senha":$scope.painelAluno.senha,
			"nota1":$scope.painelAluno.nota1,
			"nota2":$scope.painelAluno.nota2,
			"nota3":$scope.painelAluno.nota3,
			"nota4":$scope.painelAluno.nota4
		};

		alunoAPI.putAluno(aluno).then(function(){
			
			swal({
				title: "Aluno editado com sucesso",
				icon: "success",       
				timer: 1500
			});
		    _carregarAluno(); //carrega a lista

		});
	}

	$scope.restaurarAluno = function(){
		_carregarStatus();
	}


	/*
	* IMPLEMENTAÇÕES DE NOTAS NO PAINEL DO PROFESSOR INSERIR NOTA NO ALUNO
	*
	*/
	
	// GET - descobre qual o curso do professor l
	function _getNomeProfessorLogado(id_professor_logado){

		professorAPI.getProfessorId(id_professor_logado).then(function(response){
			var professor = response.data;
			_cursoProfessorLogado(professor.nome);
		});
	}

	// curso professor logado
	function _cursoProfessorLogado(nomeProfessor){
		var tamanhoArray = $scope.arrayCurso.length;
		for (i = 0; i < tamanhoArray; i++){
			if (nomeProfessor == $scope.arrayCurso[i].professor) {
				_descobrirAlunosProfessorLogado($scope.arrayCurso[i].nome);
			}
		}
	}

	// descobri quais os alunos do professor logado
	function _descobrirAlunosProfessorLogado(curso){
		$scope.arrayAlunosCursoProfessorLogado = [];
		var tamanhoArray = $scope.arrayAluno.length;
		for (i = 0; i < tamanhoArray; i++){
			if (curso == $scope.arrayAluno[i].curso) {
				$scope.arrayAlunosCursoProfessorLogado.push($scope.arrayAluno[i]);	//ALUNOS DO CURSO DO PROFESSOR
			}
		}
	}

	//prepara json para adicionar nota aos alunos
	$scope.adicionarNotaAlunos = function(notas){		

		$scope.notaAluno = {
	        id: notas.id,
	        email: notas.email,
	        senha: notas.senha,
	        nome: notas.nome,
	        telefone: notas.telefone,
	        endereco: notas.endereco,
	        curso: notas.curso,
	        nota1: notas.nota1,
	        nota2: notas.nota2,
	        nota3: notas.nota3,
	        nota4: notas.nota4
	    }   
		
	}

	//PUT - salvar nota dos alunos
	$scope.salvarNotas = function(aluno){	

		alunoAPI.putAluno(aluno).then(function(){
			swal({
				title: "Nota Editada com sucesso!",
				icon: "success",
				timer: 1500
			});

			var i = 0;
			var recarregarLista = setInterval(function(){
				i++;
				_carregarAluno();
				_carregarCurso();
				_carregarStatus();
				if (i==3) {
					clearInterval(recarregarLista);
				}
			},300);

		});

	}


	//carregar funções
	_carregarAluno();
	_carregarCurso();
	_carregarStatus();

})