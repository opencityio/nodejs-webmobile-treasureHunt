var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/:sessionID/start', {
        templateUrl: '/partials/index.html',
        controller: 'indexController'
    }).when('/:sessionID/question/:id', {
        templateUrl: '/partials/question.html',
        controller: 'questionController'
    }).when('/:sessionID/complete', {
        templateUrl: '/partials/complete.html',
        controller: 'completeController'
    });
}]);
