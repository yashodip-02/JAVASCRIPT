// Internet speed:
// 50 Mbps → Fast
// 20 Mbps → Medium
// 5 Mbps → Slow
// Else → Very Slow

let netspeed = 50;

if(netspeed >= 50) {
    console.log("Fast");
}

else if(netspeed >= 20) {
    console.log("Medium");
}

else if(netspeed >= 5) {
    console.log("Slow");
}

else{
    console.log("Very Slow");
    
}