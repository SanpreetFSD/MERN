// how square root works in math mehtod  (the console resut wil show the oroginal number value)

//let arr = [25,36,49,64,81];  // these are square roots

/*let arrSqr = arr.map((currElm) => {
    return Math.sqrt(currElm);
})*/


// let arrSqr = arr.map((currElm) => Math.sqrt(currElm)) // now we can write this fat arrow code in more simple way in 1 line
// console.log(arrSqr);

// challenge>> multiply wit 2 and get the number greater than 10

let arr  = [2,3,4,5,6,8];

let arr2 = arr.map((currElm) =>{
    return currElm * 2;
}).filter((currElm)=> {
    return currElm >10;
})   // chaining effect/style

console.log(arr2);