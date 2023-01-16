//Qquestion 1
//num 1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//a
let sortAges = ages.sort(function(a, b) {
    return a - b
      })
console.log(sortAges);

//b
let minAge = sortAges[0];
// console.log(minAge)

//c
let maxAge = ages[sortAges.length - 1];
// console.log(maxAge);

//d
const medianAge = ages[Math.floor(sortAges.length / 2)]
// console.log(medianAge)

//e
let sumAge = sortAges.reduce(function(curr, prev) {
    return curr + prev
})
// console.log(sumAge)

let averageAge = sumAge / sortAges.length 

// console.log(averageAge)

//f
let agesRange = maxAge- minAge
// console.log(agesRange)

//g
let valCompare_a = Math.abs(minAge - averageAge);
let valCompare_b = Math.abs(maxAge - averageAge);
console.log(valCompare_a)
console.log(valCompare_b)