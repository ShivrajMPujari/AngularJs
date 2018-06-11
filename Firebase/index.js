// set the data to firebase :- database rules-public ,
// var students = firebase.database().ref("students/");
// set():-writes or updates the data in the respective firebase data 
// students.set(
//   {
//     "jay":{
//       id:1,
//       age:25,
//     },
//     "shiv":{
//       id:2,
//       age:22,
//     }
//   }
// );


// update():- this method updates the particular data 
// var jayData =firebase.database().ref("students/jay"); 
// jayData.update(
//     {
//       id:5,
//     }
// );


// push() :- this method adds the unique identifier i.e id 
// var ref= new Firebase("https://demoproject-a85d5.firebaseio.com"); //fetches the whole data from firebase
// var students= ref.child("students"); //child() :-makes or get the object from the firebase
// students.push(
//   {
//     name:"shiv",
//     id:1,
//   }
// );
// 
// students.push(
//   {
//     name:"raj",
//     id:2,
//   }
// );

// var students= ref.child("students1"); creates new child object with name students1
// students.push(
//   {
//     name:"shiv",
//     id:1,
//   }
// );


//  
// var ref= new Firebase("https://demoproject-a85d5.firebaseio.com");//project link from firebase
// var shivName = ref.child("students").child("-LEhUf8N0aNlpgwIIFul").child("name");
// shivName.transaction(function(name){  //function(name){}, in which name is local variable which is basically the data which was fetch from firebase
// 
//   return name+"raj";
// }
// );
// 

// on():-takes three arguments one is event name ,and two anonymous functions 
// 1. takes the local variable which stores object in variable snapshot and that snapshot object has val() which gives javascript representation of the object
// 2.error handling function it is optinal
 // var ref = firebase.database().ref();
// // ref.on("value",function(snapshot){ console.log(snapshot.val()); },function(error){  console.log("Error "+error.code);});
// 
// ref.on("value",
// function(object){
//    console.log(object.val()); },
//    function(error){ 
//       console.log("Error "+error.code);});





