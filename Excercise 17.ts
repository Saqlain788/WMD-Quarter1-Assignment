/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/

import { finalGuestList } from "./Excercise 16.js";
// Solution:-
//! Add a new line that prints a message saying that you can invite only two people for dinner.
console.log('"You can invite only two people for dinner."');

//! Removing guests untill 2 remains.
for (let i = finalGuestList.length - 1; i >= 2; i--) {
  const removedguest = finalGuestList.pop();
  console.log(`Sorry, Mr. ${removedguest}, you are not invited to dinner`);
}
//! Print messange to remaining two people stating that you're still invited.
for (const remainingguest of finalGuestList) {
  console.log(`Mr. ${remainingguest}, you're still invited to dinner`);
}

//! Remove remaining last two person, showing empty array.
finalGuestList.splice(0, 2);
console.log("Final Guest List:" + finalGuestList);
