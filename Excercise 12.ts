//* Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

//* Solution:-

let names: string[] = [
  "Adil Suhail",
  "Adeel Mairaj",
  "Wasif Yasin",
  "Abubakar",
];
//! Method 1.
let message: string = "hope you are fine!";
for (let i = 0; i < names.length; i++) {
  console.log(`Hey ${names[i]}, ${message}`);
}

export {};
