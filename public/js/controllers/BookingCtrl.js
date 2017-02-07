sampleApp.controller('BookingController', function($scope,$http ,$log) {

	$scope.tagline = 'Book your movies here!';

    var loadMovies = function() {
        $http.get('/movie/getMovie').success(function(response) {
            console.log('READ IS SUCCESSFUL');
            $scope.moviList = response;
            $scope.movi = "";
        });
    };

loadMovies();


var loadCities = function() {
        $http.get('/city/getCity').success(function(response) {
            console.log('READ IS SUCCESSFUL');
            $scope.cityList = response;
            $scope.city = "";
        });
    };

loadCities();


var loadTheatres = function() {
        $http.get('/theatre/getTheatre').success(function(response) {
            console.log('READ IS SUCCESSFUL');
            $scope.theatreList = response;
            $scope.theatre = "";
        });
    };

loadTheatres();

// var loadShowtimes = function() {
//         $http.get('/showtime/getShowtime').success(function(response) {
//             console.log('READ IS SUCCESSFUL');
//             $scope.showtimeList = response;
//             $scope.showtime = "";
//         });
//     };

// loadShowtimes();



var refresh = function() {
        $http.get('/booking/getBooking').success(function(response) {
            console.log('READ IS SUCCESSFUL');
            $scope.bookingList = response;
            $scope.booking = "";
        });
    };

    refresh();

    $scope.addBooking = function(booking) {
        

                   $http({
         
                    method: 'POST',
                    url: '/booking/addBooking',
                     headers: {'Content-Type': 'application/json'},    
                    data: booking
                })
                .then(function(response) {
                    console.log(response);
                    console.log("CREATE IS SUCCESSFUL");
                    refresh();
                });


        console.log($scope.contact);

    };

    $scope.removeBooking = function(booking) {
    
        $http.delete('/booking/deleteBooking/' + booking._id).success(function(response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editBooking = function(booking) {
        $http.get('/booking/getBooking/' + booking._id).success(function(response) {
            $scope.booking = response[0];
        });
    };

    $scope.updateBooking = function() {
        console.log("REACHED UPDATE");
        console.log($scope.booking._id);
        $http.put('/booking/updateBooking/' + $scope.booking._id, $scope.booking).success(function(response) {
            console.log(response);
            refresh();
        })
    }

});

  




