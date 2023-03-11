
/*console.log(sum());

function sum() {
    let a = 5, b=6;
    let sum = a+b;
    return `the sum of the two number is ${sum}`;
}*/

// How to convert into fat arrow function

const sum = () =>`the sum of two numbers is ${(a=5)+(b=6)}`;
console.log(sum())