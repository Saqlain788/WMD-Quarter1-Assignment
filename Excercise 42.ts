/*Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/

import { Magicians, show_magicians } from "./Excercise 41.js";
// import variable of Magicians and store it an magicianNames.
const magicianNames = Magicians;

// Make make_great() function
function make_great(magicians: string[]): string[] {
  const greatMagicians: string[] = magicians.map((magician) => {
    return "the Great " + magician;
  });

  return greatMagicians;
}

const greatMagicianNames = make_great(magicianNames);

// call function of show magicians from Excercise 41 showing the list has been modified.
show_magicians(greatMagicianNames);
