
//var  obj act as object which contains all the functions and variables
var obj = function(){

this.i=0;

this.add=function(i){
this.i+=i;
return this; //return the whole object
};

this.subs=function(i){
this.i-=i;
return this; //return the whole object
};

this.print=function(){

console.log(this.i);

};

};

var x= new obj();  //create new object assign it to x
/*x.add(5);
x.subs(3);
x.print();
console.log(x.add(3));*/

x.add(5).subs(3).print(); //method chaining
