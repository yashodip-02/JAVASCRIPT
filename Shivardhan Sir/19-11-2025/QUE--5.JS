// fat is 3 to 4 rate is 40
// fat less 3 to rate is 35
// fat more than 4 to rate is 50

let fat = 2.5;

if ((fat >= 3) && (fat <= 4)){
    console.log(`Your milk fat is ${fat}, you get 40rs/-`);
}
else if ((fat >= 0) && (fat <= 2.9)){
    console.log(`Your milk fat is ${fat}, you get 30rs/-`);
}

else if (fat >= 4.1){
    console.log(`Your milk fat is ${fat}, you get 50rs/-`);
}

else{
    console.log("Please Try Again");
}