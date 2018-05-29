var app=angular.module('BlankApp',['ngMessages','ngMaterial','ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
  $stateProvider.state('login',{
    url:"/login",
    templateUrl:"templates/login.html",
     controller: 'myCtrl'
  })
  .state('home',{
    url:"/home",
    templateUrl:"templates/home.html",
    controller: 'homeCtrl'
  });
  $urlRouterProvider.otherwise('/login');
});
