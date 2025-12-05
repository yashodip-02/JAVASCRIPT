// Tests whether all elements in the array array pass the provided function.

// Syntax: array.every(callback(element, index, array), thisArg)

// Example 1
let arr1 = [2, 4, 6, 8];
let allEven = arr1.every(num => num % 2 === 0);
console.log(allEven); 

// Example 2
let arr2 = [1, 2, 3, 4];
let allPositive = arr2.every(num => num > 0);
console.log(allPositive); 

// Example 3
let arr3 = [10, 20, 30, 25];
let more15 = arr3.every(num => num > 15);
console.log(more15);     

// Example 4
let arr4 = ['apple', 'banana', 'cherry'];
let allStrings = arr4.every(item => typeof item === 'string');
console.log(allStrings); 

// Example 5
let arr5 = [true, true, false];
let allTrue = arr5.every(value => value === true);
console.log(allTrue); 

// Example 6
let arr6 = [5, 10, 15, 20];
let multiples = arr6.every(num => num % 5 === 0);
console.log(multiples); 

// Example 7
let arr7 = [0, -1, -2, -3];
let negative = arr7.every(num => num <= 0);
console.log(negative); 

// Example 8
let arr8 = [100, 200, 300];
let greater = arr8.every(num => num > 50);
console.log(greater); 

// Example 9
let arr9 = ['cat', 'dog', 'elephant'];
let length = arr9.every(item => item.length > 2);
console.log(length); 

// Example 10
let arr10 = [1, 3, 5, 7];
let allOdd = arr10.every(num => num % 2 !== 0);
console.log(allOdd); 

