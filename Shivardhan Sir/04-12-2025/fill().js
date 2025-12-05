// The fill() method changes all elements in an array to a static value, from a start index to an end index (Optional).

// Syntax: array.fill(value, start, end)

// Example 1
let arr1 = [1, 2, 3, 4, 5];
arr1.fill(0);
console.log(arr1);

// Example 2    
let arr2 = ['a', 'b', 'c', 'd'];
arr2.fill('x', 1, 3);
console.log(arr2); 

// Example 3
let arr3 = [true, false, true];
arr3.fill(false, 0, 2);
console.log(arr3); 

// Example 4
let arr4 = [10, 20, 30, 40, 50];
arr4.fill(99, 2);
console.log(arr4); 

// Example 5
let arr5 = ['apple', 'banana', 'cherry'];
arr5.fill('fruit', 0, 1);
console.log(arr5); 

// Example 6
let arr6 = [5, 10, 15, 20];
arr6.fill(0, 1, 4);
console.log(arr6); 

// Example 7
let arr7 = [null, null, null];
arr7.fill('filled');
console.log(arr7); 

// Example 8
let arr8 = [1, 2, 3, 4, 5];
arr8.fill(7, 0, 3);
console.log(arr8); 

// Example 9
let arr9 = ['x', 'y', 'z'];
arr9.fill('a', 1);
console.log(arr9); 

// Example 10
let arr10 = [true, true, true, true];
arr10.fill(false, 2, 4);
console.log(arr10); 

