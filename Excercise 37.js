/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message*/
// Step 1: modify the function with default value
function make_shirt(size = "Large", message = "I love Typescript") {
    console.log(`I have ordered the size of shirt is ${size}, with the message printed on it ${message}`);
}
make_shirt(); // by default value of large size
make_shirt("Medium"); // medium size shirt
make_shirt("XL", "Hello World"); // add XL size shirt with different message.
export {};
