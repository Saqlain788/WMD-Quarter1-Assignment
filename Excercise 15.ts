/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list */

//* Solution:-
// First Step: start program from Excercise 14.
import { guestList } from "./Excercise 14.js";

// Second Step: Add a print statement stating the name of the guest who can't make it.
const guestWhoCantMakeIt = guestList.pop();
console.log("Guest who cannot come to dinner:" + guestWhoCantMakeIt);

// Third Step: modify list, replacing with new Guest for invitation.
const newGuest = guestList.push("Anjum Saeed");
console.log(newGuest);

// Fourth Step: Print a second set of invitation messages, one for each person who is still in your list
for (let l = 0; l < guestList.length; l++) {
  console.log(
    `Mr. ${guestList[l]}, I am inviting you to have a dinner tonight `
  );
}

export let Guestlist = guestList;
