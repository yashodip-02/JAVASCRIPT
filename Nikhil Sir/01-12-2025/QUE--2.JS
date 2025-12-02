// Write a js program to check if give string is empty

let str = '';

switch(true){
    case (str.trim() === ''):
        console.log("This is empty");
        break;

    default:
        console.log("not empty");
}