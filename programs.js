



// program to find the sum of natural numbers using recursion

function sum(num) {
    if(num > 0) {
        return num + sum(num - 1);
    }
    else {
        return num;
    }
 }

// take input from the user
let number = parseInt(prompt('Enter a positive integer: '));

let result = sum(number);

// display the result
console.log(`The sum is ${result}`);