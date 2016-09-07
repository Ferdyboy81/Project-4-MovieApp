window.movieStubApp = angular.module('movieStubApp', ['ngRoute', 'ngResource']);

movieStubApp.controller("movieStubController", function ($scope, movieStubFactory) {
    $scope.headerSrc = "template/header.html";
    $scope.movies = movieStubFactory.query();

    $scope.currMovie = null;
    $scope.getMovieById = function (id) {
        var movies = $scope.movies;
        for (var i = 0; i < movies.length; i++) {
            var movie = $scope.movies[i];
            if (movie.id == id) {
                $scope.currMovie = movie;
            }
        }
    };
    // A simple back function, that will navigate between views
    $scope.back = function () {
        window.history.back();
    };
    $scope.getCount = function (n) {
        return new Array(n);
    };
});
// movie details controller
movieStubApp.controller("movieDetailsController", function ($scope, $routeParams) {
    $scope.getMovieById($routeParams.id);
});

// ticket booking controller
movieStubApp.controller("bookTicketsController", function ($scope, $http, $location, $routeParams) {
    $scope.getMovieById(routeParams.id);
    $scope.onlyNumbers = /^\d+$/;
    $scope.formData = {};
    $scope.formData.movie_id = $scope.currMovie.id;
    $scope.formData.movie_name = $scope.currMovie.name;
    $scope.formData.date = "Today"

    $scope.processForm = function () {
        $http({
            method: 'POST',
            url: '/book',
            data: $.param($scope.formData), // pass in data as strings
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            } // set the headers so angular passing info as form data (not request payload)
        })
            .success(function (data) {
                //$location.path("/bookings");
                console.log(data);
            });
    };
});





// window.movieStubApp = angular.module('movieStubApp', ['ngRoute']);

// movieStubApp.controller("movieStubController", function ($scope) {
//     $scope.headerSrc = "template/header.html";
//     $scope.movies = [
//         {
//             "id": 0,
//             "name": "Iron Man",
//             "rating": 5,
//             "availability": 9,
//             "review": "Tony Stark is a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity. When he uncovers a nefarious plot with global implications, he dons his powerful armor and vows to protect the world as Iron Man. (Paramount Pictures, Marvel Studios)",
//             "thumb": "http://upload.wikimedia.org/wikipedia/en/e/e0/Iron_Man_bleeding_edge.jpg"
//         },
//         {
//             "id": 1,
//             "name": "Jurassic Park",
//             "rating": 5,
//             "availability": 3,
//             "review": "Featuring incredible special effects and action - packed drama, Jurassic Park takes you to a remote island where an amazing theme park with living dinosaurs is about to turn deadly, as five people must battle to survive among the prehistoric predators.(Universal Pictures)",
//             "thumb": "http://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg"
//         },
//         {
//             "id": 2,
//             "name": "Transformers",
//             "rating": 5,
//             "availability": 5,
//             "review": "Transformers: Dark of the Moon features Sam Witwicky taking his first tenuous steps into adulthood while remaining a reluctant human ally of Optimus Prime. The film centers around the space race between the U.S.S.R. and the USA, suggesting there was a hidden Transformers role in it all that remains one of the planet's most dangerous secrets. The villain of the third film will be Shockwave. (DreamWorks Pictures)",
//             "thumb": "http://upload.wikimedia.org/wikipedia/en/6/66/Transformers07.jpg"
//         }
// ];

//   $scope.currMovie = null;
//   $scope.getMovieById = function (id) {
//     var movies = $scope.movies;
//     for (var i = 0; i < movies.length; i++) {
//         var movie = $scope.movies[i];
//         if (movie.id == id) {
//             $scope.currMovie = movie;
//         }
//     }
//   };
//    // back function, that helps navigate between views
//   $scope.back = function () {
//       window.history.back();
//   };
//   $scope.getCount = function (n) {
//     return new Array(n)
//   }

// });
// movieStubApp.controller("movieDetailsController", function ($scope, $routeParams) {
//     $scope.getMovieById($routeParams.id);
// });
