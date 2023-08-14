//* Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

//* Solution:-

let favoriteTransportation: string[] = [
  "Honda Motorcycle",
  "Toyota Car",
  "Bolan Van",
];

// solve it through for loop.
for (let j = 0; j < favoriteTransportation.length; j++) {
  console.log(`I would like to own a ${favoriteTransportation[j]}`);
}
