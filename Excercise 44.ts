/* Sandwiches: Write a function that accepts an array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. 
Call the function three times, using a different number of arguments each time.*/

// step 1. make the function sandwithItems()
function sandwithItems(item: Array<string>) {
  console.log("Sandwitch Ordered with items:", item);
}

const item1: string[] = ["Chiken", "Vegetable", "cheese"];
const item2: string[] = ["Club", "BBQ", "Fish"];
const item3: string[] = ["Potato", "Egg Salad", "Creamy"];

sandwithItems(item1);
sandwithItems(item2);
sandwithItems(item3);
