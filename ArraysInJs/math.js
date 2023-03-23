// how square root works in math mehtod  (the console resut wil show the oroginal number value)

let arr = [25,36,49,64,81];  // these are square roots

let arrSqr = arr.map((currElm) => {
    return Math.sqrt(currElm);
})
console.log(arrSqr);