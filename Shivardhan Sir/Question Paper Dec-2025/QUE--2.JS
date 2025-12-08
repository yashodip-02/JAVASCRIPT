// Switch-case program to calculate discount:
// 20% -> price >= 10000;
// 10% -> price >= 5000
// 0% -> price < 1000

let a = 10000;

switch(true){
    case a >= 10000:
        console.log('You get 20% discount, you pay' , a * 0.80 , 'your discount is' , a * 0.20);
        break;

    case a >= 5000:
        console.log('You get 10% discount, you pay' , a * 0.90 , 'your discount is' , a * 0.10);
        break;

    default:
        console.log("You get 0% Discount");
        
}