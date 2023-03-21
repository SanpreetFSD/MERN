const array1 = [1,4,9,16,25];
// Num > 9

/*let newArr = array1.map((currElm, index, arr) => {
    return currElm > 9;
})

console.log(array1);
console.log(newArr);*/   // it returns a new array containing the results of calling a function on every element in this array.

let newArrFor = array1.map((currElm, index, arr) => {
    return `Index no = ${index} and the value is  ${currElm} belongs to ${arr}`
})

console.log(newArrFor);   // it returns the new array without mutating the original array.

