// Traversal in Array

//var myFriends = ['Ramesh', 'Suresh', 'Naresh', 'Ganesh', 'Ramesh2', 'Suresh2', 'Naresh2', 'Ganesh2'];

//console.log(myFriends[1]);

//console.log(myFriends[2,0]); // if we check for more than one index, the array will show the lates of last index value

// to check the length of Array elements

// console.log(myFriends.length);
// console.log(myFriends.length -1);

// us of for loop in array to check the array elements

var myFriends = ['Ramesh', 'Suresh', 'Naresh', 'Ganesh'];

// for (var i=0; i<myFriends.length; i++){
//     console.log(myFriends[i]);
// }

/*
myFriends.forEach(function(element, index, array){
    console.log(element + " index : " + index + " " + array);  // traditional function
});*/

myFriends.forEach((element, index, array) =>{
    console.log(element + " index : " + index + " " + array);  // this is fat arrow function
});

// fat arrow function doesnot support "this argument", traditional function supports "this argument"