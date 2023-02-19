//Question 1: Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.
let text =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
let regex = /\d+/g;
let money = text.match(regex);
for (let i = 0; i < money.length; i++) {
  money[i] = parseInt(money[i]);
}
let total = money.reduce((sum, num) => {
  return (sum += num);
});
console.log(total);
//Question 2: The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
let pointsText =
  "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.";
let pointsRegex = /-?\d+/g;
let points = pointsText.match(pointsRegex);
for (let i = 0; i < points.length; i++) {
  points[i] = parseInt(points[i]);
}
let sort = points.sort((a, b) => a - b);
let distance = sort[sort.length - 1] - sort[0];
console.log(distance);
//Question 3: Write a pattern which identify if a string is a valid JavaScript variable
console.log("\n");
function is_valid_variable(name) {
  let regex = /^first_?name$/i;
  return regex.test(name);
}
console.log(is_valid_variable("first/name"));
console.log(is_valid_variable("first_name"));
console.log(is_valid_variable("first-name"));
console.log(is_valid_variable("1first_name"));
console.log(is_valid_variable("firstname"));