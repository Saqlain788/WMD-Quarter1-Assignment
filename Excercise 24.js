/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/
// Tests for equality and inequality with strings
let class1 = "Batch 47";
let shiftTiming = "Morning";
console.log("Equality test:", class1 === shiftTiming);
console.log("Inquality test:", class1 !== shiftTiming);
// Tests using the lower case function
let lowerCase = "Saqlain";
console.log("Test with Lowercase:", lowerCase == lowerCase.toLocaleLowerCase());
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to.
let num3 = 21;
let num4 = 30;
console.log("Equality Check:", num3 === num4);
console.log("Inequality Check:", num3 !== num4);
console.log("Greater Than:", num3 > num4);
console.log("less Than:", num3 < num4);
console.log("Greater Than and equal to:", num3 >= num4);
console.log("less Than and equal to:", num3 <= num4);
//  Tests using "and" and "or" operators.
console.log("AND OPERATOR:", num3 > 30 && num4 < 10);
console.log("OR OPERATOR:", num3 > 30 || num4 > 10);
// Test whether an item is in a array
// Test whether an item is not in a array
let fruits = ["Apple", "Banana", "Orange"];
console.log("Fruit include in array:", fruits.includes("Apple"));
console.log("Fruits include in array:", fruits.includes("Grapes"));
export {};
