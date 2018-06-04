app.controller('homeCtrl', function($scope, $mdSidenav, $http,$state) {
    $scope.toggleLeft = buildToggler('left');

    function buildToggler(componentId) {
        return function() {
            $mdSidenav(componentId).toggle();
            if($scope.myObj==undefined){
              $scope.myObj = {
                "margin-left" : "400px",
              }
              return;
            }
          else{
            $scope.myObj=undefined;
          }
        };
    }

    $http.get("assets/products.json").then(function(response) {
        $scope.jsonData = response.data;
    });

    $scope.manufacturer = [];
    $scope.os = [];
    $scope.camera = [];
    $scope.storage = [];

    $scope.action = function(item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) {
            list.splice(idx, 1);
        } else {
            list.push(item);
        }
    };

    // $scope.filtringArray=function(array,list,filteredArray){
    //
    //   for (var i = 0; i < array.length; i++) {
    //       var element = array[i];
    //
    //       for (var j = 0; j < list.length; j++) {
    //           var selectedProduct = list[j];
    //           if (element.specs.manufacturer == selectedProduct) {
    //               filteredArray.push(element);
    //               continue;
    //           }
    //       }
    //   }
    //   return filteredArray;
    // }


    $scope.logout=function(){

      $state.go('login');
    }

});
