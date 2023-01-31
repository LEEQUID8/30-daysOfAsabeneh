const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//Question 1: Explain the difference between forEach, map, filter, and reduce.
//     A
//forEach() method can only be used only with arrays to iterate an array elements

//     B
//map() method  can also be used to iterate an array elements but it modifies the array elements.

//     C
//filter() method filters out items which fulfill filtering conditions and return a new array

//    D
//reduce() method goes over every element, collects some info about eact elements and then finally returns the collective result.

// Question 2: Define a callback function before you use it in forEach, map, filter or reduce.
// A callback function is a function which can be passed as parameter to other function.

//Question 3: Use forEach to console.log each country in the countries array.

countries.forEach(country => {
    // console.log(country);
});

//Question 4: Use forEach to console.log each name in the names array.

const _names = ["Asabeneh", "Mathias", "Elias", "Brook"];
_names.forEach((element) => console.log(element));

//Question 5: Use forEach to console.log each number in the numbers array.
const _numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
_numbers.forEach((arr) => console.log(arr));

//Question 6: Use map to create a new array by changing each country to uppercase in the countries array.
let countryArr = countries.map((upper) => upper.toUpperCase());
console.log(countryArr);

//Question 7: Use map to create an array of countries length from countries array.
let countryLength = countries.map((upper) => upper.length);
console.log(countryLength);

//Question 8: Use map to create a new array by changing each number to square in the numbers array
let square = numbers.map((square) => Math.pow(square, 2));
console.log(square);

//Question 9: Use map to change to each name to uppercase in the names array

let upperName = names.map((upper) => upper.toUpperCase());
console.log(upperName);

//Question 10: Use map to map the products array to its corresponding prices.

const _products = [
    { product: "banana", price: 3 },
    { product: "mango", price: 6 },
    { product: "potato", price: " " },
    { product: "avocado", price: 8 },
    { product: "coffee", price: 10 },
    { product: "tea", price: "" },
  ];
  let productMap = _products.map((map) => map);
  console.log(productMap);

  //Question 11: Use filter to filter out countries containing land.
  let land = countries.filter((land) => land.includes("land"));
console.log(land);

//Question 12: Use filter to filter out countries having six character.
let country6 = countries.filter((country) => country.length === 6);
console.log(country6);
  
//Question 13: Use filter to filter out countries containing six letters and more in the country array.

let country6AndMore = countries.filter((country) => country.length >= 6);
console.log(country6AndMore);

//Question 14: Use filter to filter out country start with 'E';

let countryStartWithE = countries.filter((country) => country.startsWith("E"));
console.log(countryStartWithE);

//Question 15: Use filter to filter out only prices with values.

let prices = products.filter((prices) => prices.price != "");
console.log(prices);

//Question 16: Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

let string = [4, 5, "n", "b", "c", true, null, undefined];
let getStringLists = string.filter((string) => typeof string === "string");
console.log(getStringLists);

//Question 17: Use reduce to sum all the numbers in the numbers array.

let sum = numbers.reduce((sum, num) => (sum += num), 0);
console.log(sum);

//Question 18: Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
/**  const northCountries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
 let reduceCountries = northCountries.forEach((country) => {
return country;
/}
)

let reduceCountries = northCountries.reduce((accumulator, currentValue) => { return accumulator + currentValue;
 })
/console.log(reduceCountries)
 */

//Question 19: Explain the difference between some and every
//some() method checks if some of the elements are similar in one aspect while the every() method checks if all the elements are similar.

//Question 20: Use some to check if some names' length greater than seven in names array
let namesLength = names.some((name) => name.length > 7);
// console.log(namesLength);

//Question 21: Use every to check if all the countries contain the word land

console.log("\n");
let every = names.every((elem) => elem.includes("land"));
console.log(every);

//Question 22: Explain the difference between find and findIndex.
console.log("\n");
console.log(`find returns the value which satisfy a condition while
findIndex return the index of the element which satisfy the condition`);

//Question 23: Use find to find the first country containing only six letters in the countries array

console.log("\n");
let find = countries.find((find) => find.length === 6);
console.log(find);

//Question 24: Use findIndex to find the position of the first country containing only six letters in the countries array
console.log("\n");
let findIndex6 = countries.findIndex((six) => six.length === 6);
console.log(findIndex6);

//Question 25: Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
console.log("\n");
let findIndexNorway = countries.findIndex((index) => index === "Norway");
console.log(findIndexNorway);

//Question 26: Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

console.log("\n");
let findIndexRussia = countries.findIndex((index) => index === "Russia");
console.log(findIndexRussia);
