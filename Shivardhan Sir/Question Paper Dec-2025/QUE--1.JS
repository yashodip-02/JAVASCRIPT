// From array -> new array 
// even -> *2 , odd -> *5
// input : [1,2,3,4] -> output : [5,4,15,8]

let num = [1,2,3,4];

let result = num.map(e => {
    if (e % 2 === 0){
        return e*2;
    }

    else{
        return e *5;
    }
});

console.log(result);
