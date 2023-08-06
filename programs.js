

// program to include constants

let a = 5;
console.log(a);

// constants are block-scoped
{
    let a = 50;
    console.log(a);
}
console.log(a);

let arr = ['work', 'exercise', 'eat'];
console.log(arr);

// add elements to arr array
arr[3] = 'hello';
console.log(arr);

// the following code gives error
// changing the value of a throws an error
// uncomment to verify
// a = 8;

// throws an error
// const x; 