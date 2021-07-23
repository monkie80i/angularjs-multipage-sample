angular.module("ecomApp").config(['$routeProvider',function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.htm"
    }).when("/list", {
        template:'<fruit-list></fruit-list>'
    });
}]);