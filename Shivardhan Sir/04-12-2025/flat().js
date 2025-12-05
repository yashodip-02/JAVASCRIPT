// Flattens a nested array into a single-level array

// Syntax: flat(depth)

// Example 1
let arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr.flat(1)); // Output: [1, 2, 3, 4, [5, 6]]   

// Example 2
console.log(arr.flat(2)); // Output: [1, 2, 3, 4, 5, 6]

// Example 3
console.log(arr.flat(0)); // Output: [1, 2, [3, 4, [5, 6]]]

// Example 4
let arr2 = [1, [2, [3, [4]]]];
console.log(arr2.flat(3)); // Output: [1, 2, 3, 4]

// Example 5
let arr3 = ['a', ['b', ['c', 'd']]];
console.log(arr3.flat(2)); // Output: ['a', 'b', 'c', 'd']

// Example 6
let arr4 = [1, ['two', [true, [null]]]];
console.log(arr4.flat(3)); // Output: [1, 'two', true, null]

// Example 7
let arr5 = [];
console.log(arr5.flat(1)); // Output: []

// Example 8
let arr6 = [1, 2, 3];
console.log(arr6.flat(1)); // Output: [1, 2, 3]

// Example 9
let arr7 = [1, [undefined, [3]]];
console.log(arr7.flat(2)); // Output: [1, undefined, 3]

// Example 10
let arr8 = [{a: 1}, [{b: 2}, [{c: 3}]]];
console.log(arr8.flat(2)); // Output: [{a: 1}, {b: 2}, {c: 3}]