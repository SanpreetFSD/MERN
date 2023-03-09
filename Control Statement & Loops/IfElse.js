// var tomrw = "rain";
// if (tomrw =="rain"){
//     console.log("take rain coat");
// }else{
//     console.log("no need of rain coat");
// }

// var tomrw = "sunny";
// if (tomrw =="rain"){
//     console.log("take rain coat");
// }else{
//     console.log("no need of rain coat");
// }

// Nested if else for leap year practice

var year = 2020;
debugger; // debugger is an advace method to learn
if (year % 4 ===0){
    if(year % 100 === 0){
        if(yeat % 400 ===0){
            console.log("the year " + year + " is a leap year");
        }else{
            console.log("the year " + year + " is not a leap year");
        }

    }else{
        console.log("the year " + year + " is a leap year");
    }
}else{
    console.log("the year " + year + " is not a leap year");
}