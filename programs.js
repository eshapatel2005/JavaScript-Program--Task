



// program to compare value of two dates
// create two dates
let d1 = new Date();
let d2 = new Date();

// comparisons
let compare1 = d1 < d2;
console.log(compare1);

let compare2 = d1 > d2;
console.log(compare2);

let compare3 = d1 <= d2;
console.log(compare3);

let compare4 = d1 >= d2;
console.log(compare4);

let compare5 = d1.getTime() === d2.getTime();
console.log(compare5);

let compare6 = d1.getTime() !== d2.getTime();
console.log(compare6);