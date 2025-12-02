// 3).If the number of items is more than 3, use slice() to extract only the first 3 items and display them.

let num = [1,2,3,4,5,6];

if(num.length > 3 ) {
   let a =  num.slice(0,3);
    console.log(a);
}

else{
    console.log('the length of array is less than 3');
}