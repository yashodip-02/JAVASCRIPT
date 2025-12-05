// Reverse the order of the elements in an array

// Syntax: array.reverse()

// Example: 1
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
console.log(fruits); // Output: ["Mango", "Apple", "Orange", "Banana"]

// Example: 2
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // Output: [5, 4, 3, 2, 1]

// Example: 3
let letters = ['a', 'b', 'c', 'd'];
letters.reverse();
console.log(letters); // Output: ['d', 'c', 'b', 'a']

// Example: 4
let mixe = [true, 42, "Hello", null];
mixe.reverse();
console.log(mixe); // Output: [null, "Hello", 42, true]

// Example: 5
let empty = [];
empty.reverse();
console.log(empty); // Output: []

// Example: 6
let single = [99];
single.reverse();
console.log(single); // Output: [99]

// Example: 7
let nested = [[1, 2], [3, 4], [5, 6]];
nested.reverse();
console.log(nested); // Output: [[5, 6], [3, 4], [1, 2]]

// Example: 8
let obj = [{id: 1}, {id: 2}, {id: 3}];
obj.reverse();
console.log(obj); // Output: [{id: 3}, {id: 2}, {id: 1}]

// Example: 9
let bool = [false, true, false, true];
bool.reverse();
console.log(bool); // Output: [true, false, true, false]
    
// Example: 10
let char = ['x', 'y', 'z'];
char.reverse();
console.log(char); // Output: ['z', 'y', 'x']

