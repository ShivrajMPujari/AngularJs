app.filter('removeDuplicates',function(){
return function(jsonData,properties){
var value;
var array=[];
if(jsonData!=undefined){
for (var i = 0; i < jsonData.length; i++) {
    value=jsonData[i].specs[properties];
      if(array.includes(value)==false){
        array.push(value);
      }
}
}
return array;
}
});
