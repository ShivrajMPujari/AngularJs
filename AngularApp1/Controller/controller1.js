app.controller('myCtrl', function($scope, $state) {
    $scope.submitForm = function() {
        console.log($scope.user.userEmail);
        console.log($scope.user.password);
        if ($scope.user.userEmail == "shivrajpujari62@gmail.com" && $scope.user.password == "shiv")
            $state.go('home.dashboard');
    }
});
