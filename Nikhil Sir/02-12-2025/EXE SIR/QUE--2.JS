// 2) .If the array contains the incorrect value 0, find its position using indexOf() and replace it with 100 using splice().

let arr = [1,2,3,1423,0,65,43,5,0];
let index = arr.indexOf(0);
console.log(index);
arr.splice(index, 1,100);
console.log(arr);
