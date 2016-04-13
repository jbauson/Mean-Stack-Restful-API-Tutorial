var app = angular.module('myApp', []);

app.controller('AppCtrl', ['$scope','$http', function($scope,$http){
    // Call API Server
    function refresh(){
        $http.get('/contactlist').success(function(response){
            $scope.contactlist = response;
        });
    }
    refresh();

    $scope.addContact = function(){
        console.log($scope.contact);
        $http.post('/contactlist',$scope.contact).success(function(response){
            $scope.contactlist.push(response);
            $scope.contact = "";
        })
    };

    $scope.removeContact = function(id){
        $http.delete('/contactlist/'+id).success(function(response){
            refresh();
        })
    };

    $scope.editContact = function(id){
        $http.get('/contactlist/'+id).success(function(response){
            $scope.contact = response;
        })
    };

    $scope.updateContact = function(id){
        $http.put('/contactlist/'+$scope.contact._id, $scope.contact).success(function(response){
            refresh();
            $scope.contact = "";
        });
    };


}]);

