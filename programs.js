



// js program to perform string comparison

let string1 = 'JavaScript Program';
let string2 = 'javascript program';

// compare both strings
let result = string1.toUpperCase() === string2.toUpperCase();

if(result) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}