// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

//* Solution:-

const num1: number = 5;
const num2: number = 3;
const classPIAIC: string = "Batch 47";
const timing: string = "09 AM";

// first test.
console.log("num1 == num2? I predict false");
console.log(num1 == num2);
// Second test.
console.log("num1 !== num2? I predict true");
console.log(num1 !== num2);
// Third test.
console.log("num1 > num2? I predict true");
console.log(num1 > num2);
// Fourth test
console.log("num1 < num2? I predict false");
console.log(num1 < num2);
//  Fifth test.
console.log("classPIAIC == timing? I predict false");
console.log(classPIAIC == timing);
//  Sixth test.
console.log("classPIAIC !== timing? I predict true");
console.log(classPIAIC !== timing);
//  Seventh test.
console.log("classPIAIC == 'Batch 47'? I predict true");
console.log(classPIAIC == "Batch 47");
// Eight test.
console.log("num1>num2 && classPIAIC == 09 AM? I predict its false");
console.log(num1 > num2 && classPIAIC == "09 AM");
// Nine test.
console.log("num1>num2 || classPIAIC == 09 AM? I predict its true");
console.log(num1 > num2 || classPIAIC == "09 AM");
// tenth test.
console.log("num1<num2 || classPIAIC == 09 AM? I predict its false");
console.log(num1 < num2 || classPIAIC == "09 AM");
