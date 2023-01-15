//Question 1
const userInput = parseInt(prompt('Enter your age:'));
userInput >=18 
? alert('You are old enough to drive.')
: alert(`You are ${userInput}. You will be allowed to drive after ${18 - userInput} years.`);
//Question 2
const yourAgeInput = prompt('Enter your age:');
const age = 30
if (age < yourAgeInput) {console.log(` i am older than ${age}`)}
else  {console.log(`you are ${yourAgeInput - age} years older than me `)}
//Question 3
let a = 4
let b = 3
 a > b ? `${a} is greater than ${b}` : `${b} is greater than ${a}`
 //Question 4
 const _userInput = parseInt(prompt('Enter a number'))
 _userInput % 2 == 0 ? console.log(`${_userInput} is an even number.`) : console.log(`${_userInput} is an odd number.`); 