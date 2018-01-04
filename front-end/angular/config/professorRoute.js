app.config(function ($routeProvider) {
	$routeProvider.when("/curso",{
		templateUrl: "view-professor/curso"
	})

	$routeProvider.when("/dados",{
		templateUrl: "view-professor/dados"
	})

	$routeProvider.when("/senha",{
		templateUrl: "view-professor/senha"
	})

	$routeProvider.otherwise({
		redirectTo: "/curso"
	})
})