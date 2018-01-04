app.config(function($routeProvider){
	$routeProvider.when("/curso", {
		templateUrl: "view-aluno/curso.html"
	})

	$routeProvider.when("/dados", {
		templateUrl: "view-aluno/dados.html"
	})

	$routeProvider.when("/senha", {
		templateUrl: "view-aluno/senha.html"
	})

	$routeProvider.otherwise({
		redirectTo: "/curso"
	})
})