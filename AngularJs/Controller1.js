var app = angular.module("myApp",[]);
app.controller("myCtrl",function($scope){
$scope.firstname="shiv";
$scope.changeName=function(){
  $scope.firstname="shivraj";
}
});
