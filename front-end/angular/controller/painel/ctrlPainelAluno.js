 app.controller("ctrlPainelAluno",function ($scope, $http, alunoAPI, statusAPI) {
 	
 	/*
 	*	ALTERAR SENHA ALUNO
 	*/

 	function _limparCampos(){
 		$scope.senha.novaSenha = "";
		$scope.senha.confirmaNovaSenha = "";
		$scope.senha.senhaAtual = "";
		$scope.painelAlunoSenhaForm.$setPristine();
 	}

 	function _carregarAluno(idAluno){

 		alunoAPI.getAlunoId(idAluno).then(function(response){
 			$scope.alunoLogado = response.data;
 		})
 	}
 	

 	function _carregarSenha(){

 		statusAPI.getStatusId(1).then(function(resource){
 			alunoLogado = resource.data;
 			_carregarAluno(alunoLogado.id_perfil);
 		});
 	}

 	function _salvarNovaSenha(salvarAluno){

 		alunoAPI.putAluno(salvarAluno).then(function(){

			swal({
		        title: "Senha alterada com sucesso!",
		        icon: "success",       
		        timer: 1500
	      	});

			_limparCampos();
			_carregarSenha();
		});
 	}

 	$scope.trocarSenha = function(aluno, senha){ 	
 		
 		if ( aluno.senha == senha.senhaAtual ) {
 			if (senha.novaSenha == senha.confirmaNovaSenha ) {
 				const id = 1;
 				salvarAluno = {
				        "id": aluno.id,
				        "email": aluno.email,
				        "senha": senha.novaSenha,
				        "nome": aluno.nome,
				        "telefone": aluno.telefone,
				        "endereco": aluno.endereco,
				        "curso": aluno.curso,
				        "nota1": aluno.nota1,
				        "nota2": aluno.nota2,
				        "nota3": aluno.nota3,
				        "nota4": aluno.nota4
				    },
 				
 				_salvarNovaSenha(salvarAluno);
 			} else{
 				
 				swal({
			        title: "Nova senha diferente!",
			        icon: "error",       
			        timer: 2000
		      	});
		    	_limparCampos();

 			}
 		} else{
 			
 			swal({
		        title: "Senha atual diferente!",
		        icon: "error",       
		        timer: 2000
	      	});
	      	_limparCampos();
		    

 		} 	
 		
 	}

 	// carregar função
 	_carregarSenha();
 	


 	/*
 	*	DESLOGAR DO ALUNO
 	*
 	*/

 	function _editarStatus(zerarStatus){

 		statusAPI.putStatus(zerarStatus).then(function(){
 			swal({
		        title: "Deslogado com sucesso",
		        icon: "success"       	        
	      	});
 		})
 	}

 	$scope.sair = function(){
 		zerarStatus = {
	        "id": 1,
	        "logado": false,
	        "id_perfil": null,
	        "tipo_perfil": null
	    };
	    _editarStatus(zerarStatus);
	    setInterval(function(){
	    	window.location.assign("../../index.html");
	    },1200);
	    
 	}

})