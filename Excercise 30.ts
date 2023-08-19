/*Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again*/

let userNames: string[] = ["Admin", "Saqlain", "Husnain", "Haider", "Adeel"];
// for (let i = 0; i < userNames.length; i++) {
//   let username = userNames[i];
//   if (username === "Admin") {
//     console.log("Hello Admin, would you like to see a status report?");
//   } else {
//     console.log(`Hello ${username}, thank you for loggin in again`);
//   }
// }
// Methods 2 with forEach ()method.
userNames.forEach(function (users) {
  if (users === "Admin") {
    console.log("Hello Admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${users}, thank you for loggin in again`);
  }
});
