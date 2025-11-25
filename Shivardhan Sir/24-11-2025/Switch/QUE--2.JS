// Switch for vehicle type:
// "car" → 4 wheels
// "bike" → 2 wheels
// "truck" → 6 wheels
// Default → “Unknown vehicle”.

let vehicle = "car";

switch (vehicle) {
    case "car":
        console.log("4 Wheels");
        break;

    case "bike":
        console.log("2 wheels");
        break;

    case "truck":
        console.log("6 wheels");
        break;

    default:
        console.log("Unknown vehicle");
}