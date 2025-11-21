// Write a Program if eligible for vote or also check citizenship
let age = 20;
let Citizen = true;

if (age >= 18 && Citizen){
    console.log("You are eligible for vote");
}
else if(!Citizen){
    console.log("You are not eligible for vote, Beacuse of your not citizen");
}

else if (age < 18){
    console.log("You are not eligible for vote, Beacuse of your minor");
}

else{
    console.log("Try again ");
    
}