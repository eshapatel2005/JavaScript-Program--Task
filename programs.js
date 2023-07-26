



// program to display the date and time
// get date and time
let date = new Date(2017, 2, 12, 9, 25, 30);

// get the date as a string
let n = date.toDateString();

// get the time as a string
let time = date.toLocaleTimeString();

// display date
console.log('Date: ' + n);

// display time
console.log('Time: ' + time);