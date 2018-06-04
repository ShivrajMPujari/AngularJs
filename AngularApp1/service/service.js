app.service('myService',function(){

  this.filtringArray=function(array,list,filteredArray,property){

    for (var i = 0; i < array.length; i++) {
        var element = array[i];

        for (var j = 0; j < list.length; j++) {
            var selectedProduct = list[j];
            // if (element.specs.manufacturer == selectedProduct) {
            //     filteredArray.push(element);
            //     continue;
            // }
            if(element.specs[property]==selectedProduct){

              filteredArray.push(element);
                  continue;
            }
        }
    }
    return filteredArray;
  }
}
);
