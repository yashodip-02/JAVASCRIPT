// Weather:
// temp < 10 → Very Cold
// temp < 20 → Cold
// temp < 30 → Warm
// Else → Hot

let temp = 55;

if(temp < 10){
    console.log("very Cold");
}

else if (temp < 20) {
    console.log("Cold");
}

else if(temp < 30){
    console.log("Warm");
}

else{
    console.log("Hot");
}