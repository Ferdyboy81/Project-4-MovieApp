movieStubApp.config(function ($routeProvider){
  $routeProvider
         .when('/', {
            templateUrl: 'template/home.html',
            controller: 'movieStubController'
        })
         .when('/movie/:id', {
            templateUrl: 'template/movie.html',
            controller: 'movieDetailsController'
        })
         .when('/bookTickets/:id', {
            templateUrl: 'template/bookTickets.html',
            controller: 'bookTicketsController'
        })
         .otherwise({
            redirectTo: '/'
        });
});



