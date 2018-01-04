app.config(function ($routeProvider) {
	$routeProvider.when("/professor", {
		templateUrl: "view-administracao/professor.html"
	});

	$routeProvider.when("/aluno", {
		templateUrl: "view-administracao/aluno.html"
	})

	$routeProvider.when("/curso", {
		templateUrl: "view-administracao/curso.html"
	})

	$routeProvider.when("/senha", {
		templateUrl: "view-administracao/senha.html"
	})

	$routeProvider.otherwise({
		redirectTo: "/professor"
	})
})