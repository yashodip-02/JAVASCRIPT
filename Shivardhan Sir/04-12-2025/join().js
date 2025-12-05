// Join all the elements of an array into a string.

// Syntax: join(separator)

// Example 1
let arr = ['Hello', 'world', '!'];
console.log(arr.join(' ')); 

// Example 2
console.log(arr.join('-')); 

// Example 3
console.log(arr.join('')); 

// Example 4
let arr2 = [1, 2, 3, 4, 5];
console.log(arr2.join(',')); 

// Example 5
let arr3 = ['a', 'b', 'c'];
console.log(arr3.join(' | ')); 


// Example 6
let arr4 = [true, false, null, undefined];
console.log(arr4.join(' - ')); 

// Example 7
let arr5 = [];
console.log(arr5.join(','));

// Example 8
let arr6 = [42];
console.log(arr6.join(',')); 

// Example 9
let arr7 = [1, , 3];
console.log(arr7.join('-')); 

// Example 10
let arr8 = [{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}];
console.log(arr8.join('; ')); 
