




// program to count the number of keys/properties in an object

let student = { 
    name: 'Esha',
    age: 19,
    hobbies: ['reading', 'games', 'coding'],
};

let count = 0;

// loop through each key/value
for(let key in student) {

    // increase the count
    ++count;
}

console.log(count);