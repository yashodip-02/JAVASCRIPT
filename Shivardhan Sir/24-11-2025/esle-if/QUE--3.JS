// Mobile battery:
// 80 → Full
// 40 → Medium
// 15 → Low
// Else → Charge now

let battery = 50;

if(battery >= 80) {
    console.log("Full");
}

else if(battery >= 40) {
    console.log("Medium");
}

else if(battery >= 15) {
    console.log("Low");
}

else{
    console.log("Charge Now");
}