/*Unchanged Magicians: Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
import { show_magicians, Magicians } from "./Excercise 41.js";
import { make_great } from "./Excercise 42.js";

const originalMagicianNames = [...Magicians]; // create a copy of magician array with spread operator.
console.log("originalMagicianNames:", originalMagicianNames);

const greatMagicianNames = make_great(originalMagicianNames);
console.log("greatMagicianNames:", greatMagicianNames);
// call show-magician with both array showing that original magician and great magician.
show_magicians(originalMagicianNames);
show_magicians(greatMagicianNames);
