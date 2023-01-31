//Question 1: Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
console.log("\n");
let totalProductsPrice = products
  .map((prices) => prices["price"])
  .filter((prices) => typeof prices === "number")
  .reduce((sum, num) => (sum += num));
console.log(totalProductsPrice);

// Question 2: Find the sum of price of products using only reduce reduce(callback))
let reduceSum = products.reduce((sum, num, index) => {
  if (typeof num === "number") {
    sum += num;
  }
  return sum;
});
console.log(reduceSum);
console.log("\n");

// Question 3: Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
console.log("\n");
function categorizeCountries() {
  let groups = [];
  let land = [];
  let ia = [];
  let island = [];
  let stan = [];
  groups.push(land, ia, island, stan);
  for (i = 0; i < countries.length; i++) {
    if (countries[i].includes("land")) land.push(countries[i]);
    else if (countries[i].includes("ia")) ia.push(countries[i]);
    else if (countries[i].includes("island")) island.push(countries[i]);
    else if (countries[i].includes("stan")) stan.push(countries[i]);
  }
  return groups;
}
console.log(categorizeCountries());
//  Question 4: Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

//Question 5: Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
let getFirstTenCountries = countries.filter(
  (item) => countries.indexOf(item) < 10
);
console.log(getFirstTenCountries);

//Question 6: Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
let getLastTenCountries = countries.filter(
  (item) => countries.indexOf(item) > countries.length - 11
);
console.log(getLastTenCountries);

//Question 7: Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)