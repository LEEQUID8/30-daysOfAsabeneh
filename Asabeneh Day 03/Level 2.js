// Number 1
const base = parseInt(prompt('Enter base:'));
const height = parseInt(prompt('Enter height:'));
const areaOfTriangle = 0.5 * base * height;
alert(`The area of the triangle is ${areaOfTriangle}`);

//number 2
const a = parseInt(prompt('Enter side:'))
const b = parseInt(prompt('Enter side:'))
const c = parseInt(prompt('Enter side:'))
const perimeter = a + b + c
alert(`The perimeter of the triangle is ${perimeter}`)

//number 3
const length = parseInt(prompt('Enter length:'))
const width = parseInt(prompt('Enter width:'))
const areaOfRectangle = length * width
const perimeterOfRectangle = 2 * (length + width)
alert(`The area of rectangle is ${areaOfRectangle} and the perimeter of rectangle is ${perimeterOfRectangle}`)

//number 4

const radius = parseInt(prompt('Enter radius:'))
const area = parseInt(prompt('Enter area:'))
const pi = 3.14
const areaOfCircle = pi * radius * radius
const circumfrenceOfCircle = 2 * pi * radius
alert(`The area of circle is ${areaOfCircle} and the circumfrence of circle is ${circumfrenceOfCircle}`)
alert('')

//number 5
var x = y + 2 / 2
var y = 2(x) - 2
console.log(x == y)

//number 6
var x1 = 2;
var y1 = 2;
var x2 = 6;
var y2 = 10;
const A = (y2 - y1) / (x2 - x1);
console.log(A);

//number 7
//number 8
//number 9
const hours = parseInt(prompt('Enter hours:'));
const ratePerHour = parseInt(prompt('Enter rate per hour:'));
const weeklyEarning = hours * ratePerHour
alert(`Your weekly earning is ${weeklyEarning}`);
//number 10
let yourName = 'Abdulraman';
yourName.length > 7 ? console.log('Your name is long') : console.log('Your name is short.');
//number 11
let $firstName = 'Abdulrahman';
let $familyName = 'Adedeji-liadi';
$firstName.length > $familyName.length ? console.log(`Your first name, ${$firstName} is longer than your family name, ${$familyName}`) : console.log(`Your family name, ${$familyName} is longer than your first name, ${$firstName}.`) ;
//number 12
let myAge = 250;
let yourAge = 25;
let tew = myAge + yourAge;
console.log(`I am ${tew} years older than you.`);

//number 13
const birthYear =  parseInt(prompt('Enter birth year:'));
birthYear >= 20 ? alert(`You are ${birthYear}. You are old enough to drive`) : alert(`You are ${birthYear}. You will be allowed to drive after ${20 - birthYear} years.`);

//number 14

const numYears = parseInt(prompt('Enter number of years you live:'));
const yearsLived = numYears * 3153600000;
alert(`You have lived ${yearsLived} seconds`);

//number 15

const timeFormat = new Date;
let year = timeFormat.getFullYear(); 
let month = timeFormat.getMonth() + 1; 
let day = timeFormat.getDay() + 1; 
let hour = timeFormat.getHours(); 
let min = timeFormat.getMinutes(); 
console.log(`${year}-${month}-${day} ${hour}:${min}`);


console.log(`${day}-${month}-${year} ${hour}:${min}`);

console.log(`${day}/${month}/${year} ${hour}:${min}`);

