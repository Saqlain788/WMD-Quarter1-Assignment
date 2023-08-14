// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

export let mountains = ["K-2", "NagaParbat", "Himalya"];
let rivers = ["Ravi", "Sutluj", "Indus"];
let countries = ["India", "Pakistan", "China"];
let cities = ["Lahore", "Karachi", "Islamabad"];
let languages = ["Urdu", "Punjabi", "English"];
// list of these items
let listofitems = [
  ...mountains,
  ...rivers,
  ...countries,
  ...cities,
  ...languages,
];
console.log(listofitems);
