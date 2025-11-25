// Speed limit:
// 120 → Very Fast
// 80 → Fast
// 40 → Normal
// Else → Slow

let sppedLimit = 150;

if(sppedLimit >= 120) {
    console.log("Very Fast");
}

else if(sppedLimit >= 80) {
    console.log("Fast");
}

else if(sppedLimit >= 40) {
    console.log("Normal");
}

else{
    console.log("Slow");
}