// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// Lowercase:
let personName: string = "MUHAMMAD SAQLAIN";
/* let result = personName.toLocaleLowerCase();
console.log(result); */ // Method 1
console.log(personName.toLocaleLowerCase()); // Method 2

// Uppercase:
let person_Name: string = "muhammad saqlain";
/* let _result = person_Name.toUpperCase();
console.log(_result);*/ // Method 1
console.log(person_Name.toUpperCase());

// Title case:
const sentence: string = "Once upon a time, there is a thirsty crow";
const titleCasedString: string = titleCase(sentence);

function titleCase(input: string): string {
  return input.toLowerCase().replace(/(?:^|\s)\w/g, (word) => {
    return word.toUpperCase();
  });
}

console.log("Original String:", sentence);
console.log("Title Cased String:", titleCasedString);

export {};
