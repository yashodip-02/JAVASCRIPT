// Executes a reducer funtion (that you provide) on each element of the array, resulting in a single output eue.

//Syntax: reduce(accumulator, element,index, array)


// Example No.1
let arr1 = [1, 2, 3, 4];
let sum1 = arr1.reduce((acc, e) => acc + e, 0);
console.log(sum1);    

// Example No.2
let arr2 = [5, 10, 15];
let product2 = arr2.reduce((acc, e) => acc * e, 1);
console.log(product2);   

// Example No.3
let arr3 = [2, 4, 6];
let max3 = arr3.reduce((e) => (e * arr3[0]));
console.log(max3); 

// Example No.4
let arr4 = ['a', 'b', 'c']; 
let concat4 = arr4.reduce((acc, e) => acc + e, '');
console.log(concat4); 

// Example No.5
let arr5 = [1, 2, 3, 4];
let evenCount5 = arr5.reduce((acc, e) => (e % 2 === 0 ? acc + 1 : acc), 0);
console.log(evenCount5); 

// Example No.6
let arr6 = [10, 20, 30];
let average6 = arr6.reduce((acc, e, _, array) => acc + e / array.length, 0);
console.log(average6); 

// Example No.7
let arr7 = [1, -1, 2, -2, 3];
let positiveSum7 = arr7.reduce((acc, e) => (e + acc), 0);
console.log(positiveSum7); 

// Example No.8
let arr8 = ['apple', 'banana', 'cherry'];
let lengths8 = arr8.reduce((acc, e) => { acc.push(e.length); return acc; }, []);
console.log(lengths8);  

// Example No.9
let arr9 = [1, 2, 3, 4];
let factorial9 = arr9.reduce((acc, e) => acc * e, 1);
console.log(factorial9); 

// Example No.10
let arr10 = [ {age: 25}, {age: 30}, {age: 35} ];
let totalAge10 = arr10.reduce((acc, e) => acc + e.age, 0);
console.log(totalAge10); 