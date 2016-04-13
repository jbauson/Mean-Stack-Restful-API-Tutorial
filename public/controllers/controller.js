var app = angular.module('myApp', []);

app.controller('AppCtrl', ['$scope','$http', function($scope,$http){
    // Call API Server
    $http.get('/contactlist').success(function(response){
        console.log(response);
        $scope.contactlist = response;
    });

    $scope.addContact = function(){
        console.log($scope.contact);
        $http.post('/contactlist',$scope.contact);
    }

}]);

