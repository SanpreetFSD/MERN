// const months = ["Jan", "march", "April", "June", "July"];

// const newMonths = months.splice(4,0,"Dec");

// const newMonths = months.splice(5,0,"Dec");

//solution 1

// const newMonths = months.splice(months.length,0,"Dec");

// console.log(months);

//sol2  // this way it is returning the blank array

// console.log(newMonths)

//sol3 to change the inbetween value or add or delete

const months = ["Jan", "march", "April", "June", "July"];

// const updateMonth = months.splice(1,1,"March");

const indexOfMonth = months.indexOf("march");

if (indexOfMonth != -1){
    const updateMonth = months.splice(indexOfMonth,1,"March");
    console.log(months);
}else{
    console.log("No such data found");
};

