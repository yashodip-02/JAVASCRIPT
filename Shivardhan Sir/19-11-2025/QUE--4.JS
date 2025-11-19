// signal red-green-yellow based of traffic color
// red --> Stop
// green --> Go
// yellow --> Hold

let color = "yellow";

if (color === "red"){
    console.log(`Signal is ${color}, Stop`);
}
else if (color === "green"){
    console.log(`Signal is ${color}, You may Go`);
}
else if (color === "yellow"){
    console.log(`Signal is ${color}, Hold`);
}

else{
    console.log("You come first then i will tell you");
}