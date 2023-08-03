




// program to perform intersection between two arrays using Set
// intersection contains the elements of array1 that are also in array2

function performIntersection(arr1, arr2) {

    // converting into Set
    let setA = new Set(arr1);
    let setB = new Set(arr2);

    let intersectionResult = [];

    for (let i of setB) {
    
        if (setA.has(i)) {
            intersectionResult.push(i);
        }
        
    }
    
    return intersectionResult;

}

let array1 = [1, 2, 3, 5, 9];
let array2 = [1, 3, 5, 8];

let result = performIntersection(array1, array2);
console.log(result);