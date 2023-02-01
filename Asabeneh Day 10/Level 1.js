const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']


//Question 1: create an empty set
const empty = new Set()
console.log(empty)

//Question 2: Create a set containing 0 to 10 using loop

for (let i = 0; i <= 10; i++) {
  empty.add(i);
}
console.log(empty);

//Question 3: Remove an element from a set

empty.delete(1);
console.log(empty);

//Question 4: Clear a set.

empty.clear();
console.log(set);

// NO 5
let arr = ["she", "he", "goat", "sheep", "ram"];
let _empty = new Set(arr);
console.log(_empty);

// NO 6
let map = new Map(countries2);
console.log(map);

for (const [country, city] of map) {
  console.log(`${country}: ${country.length}, ${city}: ${city.length}`);
}


