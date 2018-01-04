 app.controller("ctrlPainelAdm",function ($scope, $http, admAPI) {
 	
 	
 	function _carregarSenha(){

 		admAPI.getAdm().then(function(resource){
 			$scope.senhaBanco = resource.data;
 		})
 	}

 	function _limparCampos(){
 		$scope.senha.novaSenha = "";
		$scope.senha.confirmaNovaSenha = "";
		$scope.senha.senhaAtual = "";
		$scope.painelAdmFormSenha.$setPristine();

 	}

 	$scope.trocarSenha = function(senha){ 	
 		if ( $scope.senhaBanco[0].senha == senha.senhaAtual ) {
 			if (senha.novaSenha == senha.confirmaNovaSenha ) {
 				const id = 1; 				
 				$scope.novaSenhaBanco = {"id": id, "usuario": "admin", "senha": senha.novaSenha};
 				
 				admAPI.putAdm($scope.novaSenhaBanco).then(function(){

 					swal({
				      title: "Senha alterada com sucesso",
				      icon: "success",  
				      timer: 1500     
				    });
					_limparCampos();
					_carregarSenha();

 				});
 			} else{
 				swal({
			      title: "Nova senha diferente",
			      icon: "error",  
			      timer: 2000     
			    });
				_limparCampos();
 			}
 		} else{
 			swal({
		      title: "Senha atual incorreta",
		      icon: "error",  
		      timer: 2000     
		    });
			_limparCampos();

 		} 	 	
 	}

 	// carregar função
 	_carregarSenha();



	/*
 	*	LOGIN PARA O PAINEL DE ADMINISTRAÇÃO
 	*
 	*/

	$scope.fazerLogin = function(login){
		
		if ( $scope.senhaBanco[0].usuario == login.admin  && $scope.senhaBanco[0].senha == login.senha) {
			
			swal({
		      title: "Bem vindo!",
			  icon: "success"    
		    });
			setTimeout(function(){				
				window.location.replace("../adm/administracao.html");	
			},1200);	
			return null;
		};
		
		swal({
	      title: "Usuário ou senha incorretos",
	      icon: "error",  
	      timer: 2000     
	    });
	}



	/*
 	*	DESLOGAR DA PAINEL E ENCAMINHAR PARA HOME PAGE
 	*
 	*/

 	$scope.sair = function(){
 		swal({
	        title: "Deslogado com sucesso",
	        icon: "success"      	        
	      });
 		setInterval(function(){
	    	window.location.assign("../../index.html");
	    },1200);
 	}

})