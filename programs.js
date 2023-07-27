



// program to remove item from an array

function removeItemFromArray(array, n) {
    let newArray = [];

    for ( let i = 0; i < array.length; i++) {
        if(array[i] !== n) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

let result = removeItemFromArray([1, 2, 3 , 4 , 5], 2);

console.log(result);