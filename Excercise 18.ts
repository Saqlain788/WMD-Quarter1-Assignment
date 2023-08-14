/*18. Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/

// Define the array of locations
const placesToVisit: string[] = ["Madina", "Egypt", "Turkey", "Makkah", "Iraq"];

// Print the array in its original order
console.log("Original Order:", placesToVisit);

// Print the array in alphabetical order without modifying the actual list
const sortedAlphabetically = [...placesToVisit].sort();
console.log("Alphabetical Order:", sortedAlphabetically);

// Show that the original array is still in its original order
console.log("Original Order (Again):", placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
const reverseSorted = [...placesToVisit].sort().reverse();
console.log("Reverse Alphabetical Order:", reverseSorted);

// Show that the original array is still in its original order
console.log("Original Order (Once Again):", placesToVisit);

// Reverse the order of the list
const reversedList = placesToVisit.reverse();
console.log("Reversed Order:", reversedList);

// Reverse the order of the list again to get back to the original order
const originalOrderAgain = reversedList.reverse();
console.log("Original Order (After Reversal):", originalOrderAgain);

// Sort the array in alphabetical order
const sortedAlphabetically2 = placesToVisit.sort();
console.log("Alphabetical Order (After Sort):", sortedAlphabetically2);

// Sort the array in reverse alphabetical order
const sortedReverseAlphabetically = placesToVisit.sort().reverse();
console.log(
  "Reverse Alphabetical Order (After Sort):",
  sortedReverseAlphabetically
);
