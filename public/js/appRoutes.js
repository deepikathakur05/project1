angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/booking', {
			templateUrl: 'views/booking.html',
			controller: 'BookingController'
		})

		.when('/movies', {
			templateUrl: 'views/movies.html',
			controller: 'MoviesController'
		})	
			.when('/theatre', {
			templateUrl: 'views/theatre.html',
			controller: 'TheatreController'	
	        })

		.when('/city', {
			templateUrl: 'views/city.html',
			controller: 'CityController'
		});

	$locationProvider.html5Mode(true);

}]);