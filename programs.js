


// program to check if a variable is of function type

function testVariable(variable) {
      
    if(variable instanceof Function) {
        console.log('The variable is of function type');
    }
    else {
        console.log('The variable is not of function type');
    }
}

let count = true;
let x = function() {
    console.log('HELLO')
};

testVariable(count);
testVariable(x);