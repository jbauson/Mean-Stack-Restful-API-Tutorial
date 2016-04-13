var app = angular.module('myApp', []);

app.controller('AppCtrl', ['$scope', function($scope){
    $scope.message = 'hello index';
}]);

app.controller('AppCtrl', ['$scope', function($scope){
    person1 = {
        name: "Tim",
        email: "tim@email.com",
        number: "(111) 111-1111"
    };
    person2 = {
        name: "Tim2",
        email: "tim3@email.com",
        number: "(333) 111-1111"
    };
    person3 = {
        name: "Tim3",
        email: "tim3@email.com",
        number: "(333) 111-1111"
    };
    $scope.contactlist = [person1,person2,person3];

}]);
