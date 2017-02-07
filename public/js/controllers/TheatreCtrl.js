sampleApp.controller('TheatreController', function($scope, $http, $log) {

    $scope.tagline = 'Book your theatre booking here';

        var loadCities = function(){
            $http.get('/city/getCity').success(function(response){
                console.log("READ IS SUCCESSFUL")
                $scope.cityList = response;
                $scope.city = "";

        });

        };

        loadCities();


    var refresh = function() {
        $http.get('/theatre/getTheatre').success(function(response) {
            console.log("READ IS SUCCESSFUL");
            $scope.theatreList = response;
            $scope.theatre = "";
        });
    };

    refresh();

    $scope.addTheatre = function(theatre) 
    {
        // var theatreObj ={
        //     TName:theatre.theatreName,
        //     T_Sheet:theatre.theatreSheet,
        //     T_Price:theatre.theatrePrice,
        //     TCity:theatre.city
        // };
            
           // $http.defaults.headers.post["Content-Type"] = "application/json";

            $http({
                    method: 'POST',
                    url: '/theatre/addTheatre',
                     headers: {'Content-Type': 'application/json'},    
                    data: theatre
                })
                .then(function(response) {
                    console.log(response);
                    console.log("CREATE IS SUCCESSFUL");
                    // $log.info(response);
                   refresh();
                });
                 
                 console.log($scope.contact);
                
                 };


    $scope.removeTheatre = function(theatre) {
        //console.log(id);
        $http.delete('/theatre/deleteTheatre/' + theatre._id).success(function(response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editTheatre = function(theatre) {
        $http.get('/theatre/getTheatre/' + theatre._id).success(function(response) {
           $scope.theatre = response[0];
        });
    };

    $scope.updateTheatre = function() {
        console.log("REACHED UPDATE");
        console.log($scope.theatre._id);
        $http.put('/theatre/updateTheatre/' + $scope.theatre._id, $scope.theatre).success(function(response) {
            console.log(response);
            refresh();
        })
    }

}); 