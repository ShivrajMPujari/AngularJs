app.controller('dialogueCtrl',function($scope,$mdDialog){
  $scope.showAdvanced = function(ev,item) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl:'templates/dialogue.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      locals:{items:item},
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
  };

  function DialogController($scope, items) {
      $scope.items=items;

      $scope.cancel = function() {
        $mdDialog.cancel();
      };

      $scope.hide = function() {
      $mdDialog.hide();
      };
  }

});
