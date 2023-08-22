/*Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.*/
// Use of Arrow function with defaul value with the message
const describe_city = (city, country = "India") => {
    console.log(`${city} is in ${country}`);
};
// call function for three different citiies, one of whichh is not in the default country.
describe_city("Karachi", "Pakistan");
describe_city("Paris", "France");
describe_city("Mumbai"); // Default Country value
export {};
