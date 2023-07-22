




 // program to remove a property from an object

// creating an object
let student = { 
    name: 'Esha',
    age: ,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 90
    }
};

// deleting a property from an object
delete student.greet;
delete student['score'];

console.log(student);