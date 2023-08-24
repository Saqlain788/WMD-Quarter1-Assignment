/*Unchanged Magicians: Start with your work from Exercise 40. 
2. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. 
3. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
// Step 1. 
import { show_magicians, Magicians } from "./Excercise 41.js";
import { make_great } from "./Excercise 42.js";

// Step 2.
const originalMagicianNames = [...Magicians]; // create a copy of magician array with spread operator.
console.log("originalMagicianNames:", originalMagicianNames);

const greatMagicianNames = make_great(originalMagicianNames);
console.log("greatMagicianNames:", greatMagicianNames);

// Step 3. call show-magician with both array showing that original magician and great magician.
show_magicians(originalMagicianNames);
show_magicians(greatMagicianNames);
