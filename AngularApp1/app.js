var app = angular.module('BlankApp', ['ngMessages', 'ngMaterial','jkAngularRatingStars','ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'myCtrl'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl'
        })

        .state('home.cart', {
            url: '/cart',
            templateUrl: 'templates/cartDetails.html',
            controller: 'cartController'
        })

        .state('home.dashboard', {
            url: '/dashboard',
            templateUrl: 'templates/dashBoard.html',
            controller: 'dashboardController'
        });
    $urlRouterProvider.otherwise('/login');
});
