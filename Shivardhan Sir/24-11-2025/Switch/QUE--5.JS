// Switch to print food category:
// "pizza" → Fast food
// "rice" → Meal
// "icecream" → Dessert

let food = "pizza";

switch (food) {
    case "pizza":
        console.log("Fast food");
        break;

    case "rice":
        console.log("Meal");
        break;

    case "icecream":
        console.log("Dessert");
        break;

    default:
        console.log("Unknown vehicle");
}