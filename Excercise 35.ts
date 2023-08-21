/*Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
• Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!*/

const animals: string[] = ["Cat", "Dog", "Rabbit"];

// making a for loop to print these animals.
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// for loop to print message with each animal.
for (let i = 0; i < animals.length; i++) {
  console.log(` A ${animals[i]} would make a great pet`);
}

// add a line to print final message.
console.log("Any of these animals would make a great pet!");
