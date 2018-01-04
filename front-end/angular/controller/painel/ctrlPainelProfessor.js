 app.controller("ctrlPainelProfessor",function ($scope, $http, professorAPI, statusAPI) {
 	
 	/*
 	*	ALTERAR SENHA DO ALUNO
 	*/

 	function _limparCampos(){
 		$scope.senha.novaSenha = "";
		$scope.senha.confirmaNovaSenha = "";
		$scope.senha.senhaAtual = "";
		$scope.painelProfessorFormSenha.$setPristine();
 	}

 	function _carregarProfessor(idProfessor){

 		professorAPI.getProfessorId(idProfessor).then(function(response){
 			$scope.professorLogado = response.data;
 		})
 	}
 	

 	function _carregarSenha(){

 		statusAPI.getStatusId(1).then(function(resource){
 			professorLogado = resource.data;
 			_carregarProfessor(professorLogado.id_perfil);
 		});
 	}

 	function _salvarNovaSenha(salvarProfessor){
 		
 		professorAPI.putProfessor(salvarProfessor).then(function(){

			swal({
		        title: "Senha alterada com sucesso!",
		        icon: "success",       
		        timer: 1500
	      	});

		    _limparCampos();			
			_carregarSenha();
		});
 	}

 	$scope.trocarSenha = function(professor, senha){ 	
 		
 		if ( professor.senha == senha.senhaAtual ) {
 			if (senha.novaSenha == senha.confirmaNovaSenha ) {
 				const id = 1;
 				salvarProfessor = {
				        "id": professor.id,
				        "email": professor.email,
				        "senha": senha.novaSenha,
				        "nome": professor.nome,
				        "telefone": professor.telefone,
				        "endereco": professor.endereco				        
				    },
 				
 				_salvarNovaSenha(salvarProfessor);
 			} else{
			swal({
		        title: "Senha senha diferente!",
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

 	//carregar função
 	_carregarSenha(); 
 		

 	/*
 	*	DESLOGAR E VOLTAR PRA HOME PAGE
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