




// program to convert first letter of a string to uppercase
function capitalizeFirstLetter(str) {

    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}

// take input
let string = prompt('Enter a string: ');

let result = capitalizeFirstLetter(string);

console.log(result);