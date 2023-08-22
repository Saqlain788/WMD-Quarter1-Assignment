/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.*/

// Method 1 for of loop
// const Magicians: string[] = ["Ali", "Rizwan", "Atif"];
// function show_magicians(MagicianNames: string[]): void {
//   for (const name of MagicianNames) {
//     console.log(name);
//   }
// }
// show_magicians(Magicians);

// Method 2 forEach method.

const Magicians2: string[] = ["Ali", "Rizwan", "Atif"];
function show_magicians(MagicianNames: string[]): void {
  MagicianNames.forEach((name) => console.log(name));
}
show_magicians(Magicians2);
