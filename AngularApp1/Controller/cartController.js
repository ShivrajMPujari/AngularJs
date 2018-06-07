app.controller('cartController',function($scope,$state,myService){

  $scope.products=myService.readStorage();
  $scope.rangeArray=[1,2,3,4,5,6,7,8,9];
  $scope.quantities=1;

  $scope.calculateTotal=function(){
    var total=0;
      var tempArray=myService.readStorage();
       for (var i = 0; i < tempArray.length; i++) {
          total=total+(tempArray[i].count*tempArray[i].price);
          console.log(total);
       }

      return total;
  }
  $scope.totals= $scope.calculateTotal();

  $scope.changedQuantity=function(product,counting){

    var tempArray=myService.readStorage();
    for (var i = 0; i < tempArray.length; i++) {

      if(tempArray[i].id==product.id){
        tempArray[i].count=counting;
      }
    }

    myJSON = JSON.stringify(tempArray);
    localStorage.setItem("cartItems", myJSON);

    $scope.totals= $scope.calculateTotal();

  }

  $scope.goToDash=function(){
    $state.go('home.dashboard');
  }

  $scope.remove=function(item){
      var allItem=myService.readStorage();
      for (var i = 0; i < allItem.length; i++) {

        if(allItem[i].id==item.id){
          allItem.splice(i,1);
          myJSON = JSON.stringify(allItem);
          localStorage.setItem("cartItems", myJSON);
          $scope.products=allItem;
            $scope.totals= $scope.calculateTotal();
          return;
        }
      }
  }
//  $scope.totals=$scope.changedQuantity(product,counting);

});
