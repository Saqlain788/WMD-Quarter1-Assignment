/* Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
Print the Object that’s returned to make sure all the information was stored correctly.*/

const car_object = (manufacturer: string, model: string, ...args: any) => {
  let car = { manufacturer, model };
  Object.entries(args).map(([key, value]) => {
    car = { ...car, ...(value as Object) };
  });
  return car;
};
console.log(car_object("Hyundai", "Elentra"));
console.log(car_object("Toyota", "Fortuner", { color: "black" }, { seats: 7 }));
