/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/

// Make an array of three favourite fruits.
let favorite_Fruit: string[] = ["Banana", "Apple", "Mango"];
if (favorite_Fruit.includes("Apple")) {
  console.log("You really like apple");
}
if (favorite_Fruit.includes("Banana")) {
  console.log("You really like Banana");
}

if (favorite_Fruit.includes("Mango")) {
  console.log("You really like Mango");
}

if (favorite_Fruit.includes("Strawbery")) {
  console.log("You really like Strawbery");
}

if (favorite_Fruit.includes("Orange")) {
  console.log("You really like Orange");
}
