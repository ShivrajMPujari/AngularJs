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
}
);
app.service('starService',function(){

this.printStar=function(rating){
var HTML = ""; // Start the HTML string for concatenation
  for(var i=0; i<5; i++) {  // We need 5 stars
    var icoClass = i<ob.star ? "fa fa-star" : "fa fa-star-o"; // full or empty star?
    HTML += "<i class='"+ icoClass +"'></i>"; // concatenate stars
  }
   return HTML;
}

});
