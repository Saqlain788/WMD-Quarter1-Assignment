"use strict";
/*31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/
Object.defineProperty(exports, "__esModule", { value: true });
const Excercise_30_1 = require("./Excercise 30");
if (Excercise_30_1.userNames.length === 0) {
    console.log("we need to find some users!");
}
else {
    Excercise_30_1.userNames.splice(0, Excercise_30_1.userNames.length);
    console.log("All users have been removed");
}