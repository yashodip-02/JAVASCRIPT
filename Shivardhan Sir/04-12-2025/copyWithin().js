// The copyWithin() method copies a portion of an array to another location in the same array without modifiying the array length.

// Syntax: array.copyWithin(target, start, end)

// Example 1
let arr1 = [1, 2, 3, 4, 5];
arr1.copyWithin(0, 3); 
console.log(arr1);   

// Example 2
let arr2 = ['a', 'b', 'c', 'd', 'e'];
arr2.copyWithin(1, 2, 4); 
console.log(arr2); 

// Example 3
let arr3 = [10, 20, 30, 40, 50];
arr3.copyWithin(2, 0, 2); 
console.log(arr3); 

// Example 4
let arr4 = [true, false, true, false];
arr4.copyWithin(1, 0, 2); 
console.log(arr4);

// Example 5
let arr5 = [ 'x', 'y', 'z', 'w', 'v' ];
arr5.copyWithin(-2, 0, 2); 
console.log(arr5); 

// Example 6
let arr6 = [1, 2, 3, 4, 5];
arr6.copyWithin(3, 1, 4);
console.log(arr6); 

// Example 7
let arr7 = [ 'apple', 'banana', 'cherry', 'date' ];
arr7.copyWithin(0, 2);
console.log(arr7); 

// Example 8
let arr8 = [ 'red', 'green', 'blue', 'yellow' ];
arr8.copyWithin(1, -2);
console.log(arr8); 

// Example 9
let arr9 = [ 5, 10, 15, 20, 25 ];
arr9.copyWithin(-3, -5, -2);
console.log(arr9); 

// Example 10
let arr10 = [ 'one', 'two', 'three', 'four', 'five' ];
arr10.copyWithin(2, 0, 3);
console.log(arr10); 
