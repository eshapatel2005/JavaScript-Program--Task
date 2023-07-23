




 // program to merge property of two objects

// object 1
let person = {
    name: 'Esha',
    age:19
}

// object 2
let student = {
    gender: 'female'
}

// merge two objects
let newObj = Object.assign(person, student);

console.log(newObj);