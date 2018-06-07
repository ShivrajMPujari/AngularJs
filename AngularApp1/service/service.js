app.service('myService',function(){

  this.filtringArray=function(array,list,filteredArray,property){

    for (var i = 0; i < array.length; i++) {
        var element = array[i];

        for (var j = 0; j < list.length; j++) {
            var selectedProduct = list[j];
            if(element.specs[property]==selectedProduct){
              filteredArray.push(element);
                  continue;
            }
        }
    }
    return filteredArray;
  }

  this.readStorage=function(){

    cartString = localStorage.getItem("cartItems");
    cartObject = JSON.parse(cartString);
    console.log(cartObject);
    if(cartObject==null){
      myJSON=[];
      jsonString = JSON.stringify(myJSON);
      localStorage.setItem("cartItems", jsonString);
      cartJson = localStorage.getItem("cartItems");
      console.log(cartObject+"gaag");
      var allItem = JSON.parse(cartJson);
      return allItem;
    }

    return cartObject;
  }

}
);
