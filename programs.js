



// program to display the date
// get local machine date time
let date = new Date();

// get the date as a string
let n = date.toDateString();

// get the time as a string
let time = date.toLocaleTimeString();

// display date
console.log('Date: ' + n);

// display time
console.log('Time: ' + time);