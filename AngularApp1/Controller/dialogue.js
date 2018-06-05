app.controller('dialogueCtrl', function($scope, $mdDialog) {


//   $scope.addStars=function(stars){
// console.log(stars);
//
//     var HTML = ""; // Start the HTML string for concatenation
//       for(var i=0; i<5; i++) {  // We need 5 stars
//         var icoClass = i<stars ? "fa fa-star" : "fa fa-star-o"; // full or empty star?
//         HTML += "<i class='"+ icoClass +"'></i>"; // concatenate stars
//       }
//       console.log(HTML);
//       $scope.stars=HTML;
//   }

    $scope.showAdvanced = function(ev, item) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'templates/dialogue.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            locals: {
                items: item
            },
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        })
    };

    function DialogController($scope, items) {
        $scope.items = items;
        // $scope.star=stars;

        $scope.cancel = function() {
            $mdDialog.cancel();
        };

        $scope.hide = function() {
            $mdDialog.hide();
        };
    }
});
