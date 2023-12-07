//Conditional statments
let age = 18;

//if
if (age < 18) {
console.log("I'm statement number 5")
} else {
console.log("I'm statement number 7")
}

//if, if-else-else
let temperature = 25;

if (temperature < 0) {
    console.log("It is freezing");
} else if  ( temperature >= 0 && temperature < 20) {
    console.log("It is cool outside!");
} else {
    console.log("It is a warm day!");
}

//Switch statement
let day = "Monday"

switch (day) {
    case "Monday":
        console.log("It's the start of the week.");
        break;
    case "Friday":
        console.log("It is the end of the week.");
    default:
        console.log("It is a regular day.");
        break;
}