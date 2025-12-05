// 2)Check if All Numbers Are Positive in array and use if-else also 

let arr = [10,20,30,40,-5];

if (arr.every(n => n > 0)){
    console.log(`All numbers are positive in Array`);
}

else{
    console.log(`I have dont find all number are positive , i have find some number of negative`);
}