// program to find sum of array using reduce()

let array = [1, 2, 3, 4];

let sum = array.reduce((acc, a) => {
    return acc + a;
}, 0);

console.log("Sum of array:", sum);