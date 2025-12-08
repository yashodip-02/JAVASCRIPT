// 3 type of conditional statements in JavaScript


// 1. if...else statement
let time = 10;
if (time < 12) {
    console.log("Good morning!");
} else {
    console.log("Good afternoon!");
}   

// 2. if...else if...else statement
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// 3. switch statement
let day = 3;    
switch (day) {
    case 1:
        console.log("Monday");      
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}


