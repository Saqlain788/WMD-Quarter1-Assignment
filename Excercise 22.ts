// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
import { mountains } from "./Excercise 20.js";

// Intentionally access by wrong index number due to get some error.
let indexError = 3;
let mountain = mountains[indexError];
console.log("Index Error at", indexError, " : ", mountain);

// now access it by correct index number.

let correctIndex = 1;
let correctmountain = mountains[correctIndex];
console.log("Correct Index at", correctIndex, " : ", correctmountain);
