




 // program to check if a key exists

let person = {
    id: 1,
    name: 'Esha',
    age: 19
}

// check if key exists
let hasKey = 'name' in person;

if(hasKey) {
    console.log('The key exists.');
}
else {
    console.log('The key does not exist.');
}