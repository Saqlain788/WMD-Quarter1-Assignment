/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list. */

// Start with your program from Exercise 15.
import { Guestlist } from "./Excercise 15.js";
// first step: add moreGuest in your Guestlist and print statement:
let moreGuest = ["Usman", "Gulzar", "Aftab"];
let finalGuestList = Guestlist.concat(moreGuest);
console.log(
  `Aslam u alikum, Dear ${finalGuestList}, we have now a bigger  dinner table`
);
// Second Step: add new gurest to the beggining of your array.
finalGuestList.unshift("Ali Raza");
// third Step: Add one new guest to the middle of your array.
finalGuestList.splice(3, 0, "Amir shah");
console.log(finalGuestList);
// Fourth step: Use append() to add one new guest to the end of your list.
finalGuestList.push("Masood Anwar");

// Fifth Step: Print a new set of invitation messages, one for each person in your list.

for (let m = 0; m < finalGuestList.length; m++) {
  console.log(
    `Mr. ${finalGuestList[m]}, I am inviting to have a dinner tonight, Please!`
  );
}

export { finalGuestList };
