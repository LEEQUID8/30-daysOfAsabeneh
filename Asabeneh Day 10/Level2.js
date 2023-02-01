//  Question 1: Find a union b
let c = [...a, ...b];
let _set = new Set(c);
console.log(_set);

// Question 2: Find a intersection b
let A = new Set(a);
let B = new Set(b);
let filter = a.filter((num) => B.has(num));
console.log(filter);

//Question 3: Find a with b
let _filter = a.filter((num) => !B.has(num));
console.log(_filter);