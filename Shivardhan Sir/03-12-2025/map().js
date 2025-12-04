// Create a new array with the results of calling a provided function on every element in the array.

var arr = [1, 2, 3, 4, 5];

// 1) 
var dbl = arr.map(n => n * 2);
console.log('1', dbl); // [2,4,6,8,10]

// 2) 
var sq = arr.map(n => n * n);
console.log('2 ->', sq); // [1,4,9,16,25]

// 3)
var str = arr.map(n => n ** n);
console.log('3 ->', str); 

// 4) 
var plus = arr.map(n => n + 1);
console.log('4 ->', plus); // [2,3,4,5,6]

// 5) 
var even = arr.map(n => n % 2);
console.log('5->', even); 

// 6) 
var half = arr.map(n => n / 2);
console.log('6 ->', half); 

// 7) 
var neg = arr.map(n => -n);
console.log('7->', neg); // [-1,-2,-3,-4,-5]

// 8) 
var idx = arr.map(n => n);
console.log('8 ->', idx); 

// 9)
var rep = arr.map(n => '[' + n + ']');
console.log('9 ->', rep); // ['[1]','[2]','[3]','[4]','[5]']

// 10) 
var keep = arr.map(n =>n ** 2);
console.log('10 ->', keep);

