// Sorts the elements of an array in place and returns the sorted array.

// Syntax: array.sort()

// Example: 1
let arr1 = [3, 1, 4, 2];
arr1.sort();
console.log(arr1); 

// Example: 2
let arr2 = ['banana', 'apple', 'cherry'];
arr2.sort();
console.log(arr2); 

// Example: 3
let arr3 = [10, 5, 20, 15];
arr3.sort((a) =>  a);
console.log(arr3);    

// Example: 4
let arr4 = ['dog', 'cat', 'elephant', 'ant'];
arr4.sort((a) => a);
console.log(arr4); 

// Example: 5
let arr5 = [1, 3, 2, 4];
arr5.sort((b) => b );
console.log(arr5); 

// Example: 6
let arr6 = ['z', 'x', 'y', 'w'];
arr6.sort();
console.log(arr6); 

// Example: 7
let arr7 = [100, 20, 3, 4000];
arr7.sort((a, b) => a - b);
console.log(arr7); 

// Example: 8
let arr8 = ['apple', 'banana', 'grape', 'kiwi'];        
arr8.sort();
console.log(arr8); 

// Example: 9
let arr9 = [9, 7, 5, 3, 1];
arr9.sort((a) => a );
console.log(arr9); 

// Example: 10
let arr10 = ['red', 'blue', 'green', 'yellow'];
arr10.sort((a) => a.length);
console.log(arr10); 