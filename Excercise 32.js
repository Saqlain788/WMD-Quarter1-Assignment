/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
// List of current usernames
let current_users = ["Rizwan", "Abid", "Ali", "Sabir", "Mushtaq"];
// List of new users.
let new_users = ["ali", "rehman", "rasheed", "sabir", "usman"];
// Convert all current usernames to lowercase for case-insensitive comparison
let currentUserstoLowerCase = current_users.map((user) => user.toLowerCase());
// Loop through new usernames and check for uniqueness
for (const newUser of new_users) {
    const newUserLower = newUser.toLowerCase();
    if (currentUserstoLowerCase.includes(newUserLower)) {
        console.log(`the username ${newUser} is already taken. Please enter a new username`);
    }
    else {
        console.log(`The username '${newUser}' is available.`);
    }
}
export {};
