//Question 1: Iterate 0 to 10 using for loop, do the same using while and do while loop
for(let i = 0; i <= 10; i++){
    console.log(i)
  }
  // b 
  let q = 0
  while (q <= 10) {
    console.log(q)
    q++
  }
  //c
  let w = 0
  do {
    console.log(w)
    w++
  } while (w <= 10)
  
  
  
 //Question 2: Iterate 10 to 0 using for loop, do the same using while and do while loop
 for(let i = 0; i >= 10; i--){
    console.log(i)
  }
  //b
  let a = 10
while (a >= 0) {
  console.log(a)
  a--
}
//c
let b = 10
 do {
  console.log(b)
  b--
} while (b >= 0)


//Question 3: Iterate 0 to n using for loop
let n = parseInt(prompt('Enter number:'));
for (let i = 0; i <= n; i++) {
    console.log(i);
}
//Question 4: 
let pattern = '';
for (let i = 0; i < 7; i++) {
console.log(pattern += '#');
}
//Question 5:Use loop to print the following pattern
for (i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i ** 2}`);
  }
//Question 6: Using loop print the following pattern
for (i = 0; i <= 10; i++) {
  console.log(`${i} ${i ** 2} ${i ** 3}`)
}
//Question 7: Use for loop to iterate from 0 to 100 and print only even numbers

for (i = 0; i <= 100; i+=2) {
  console.log(i)
}
//Question 8: Use for loop to iterate from 0 to 100 and print only odd numbers

for (i = 1; i <= 100; i+=2) {
  console.log(i)
}
//Question 9: Use for loop to iterate from 0 to 100 and print only prime numbers
//Question 10: Use for loop to iterate from 0 to 100 and print the sum of all numbers.
sum = 0
let begining = 0
let ending = 100
for(let i = begining; i <= ending; i++) {
    sum = sum + i
}
 console.log(`The sum of all the numbers between ${begining} to ${ending} is ${sum}`)
//Question 11: Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let sum_Odd = 0;
let sum_Even = 0;
let odd_Even = 0;
for (i = 0; i <= 100; i+= 2) {
   sum_Even = sum_Even + i;
}
console.log(sum_Even);

for (j = 1; j <= 100; j+= 2) {
    sum_Odd = sum_Odd + j;
}

console.log(sum_Odd)

console.log(`The sum of all evens from ${i = 0} to ${i = 100} is ${sum_Even}.  And the sum of all odds from ${j = 0} to ${j = 100} is ${sum_Odd}.`)
//Question 12: Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let sumOdd = 0;
let sumEven = 0;
let sumArr = [];
for (i = 0; i <= 100; i+= 2) {
   sumEven = sumEven + i
for (j = 1; j <= 100; j+= 2) { 
    sumOdd = sumOdd + j;
}
sumArr.push(sumEven, sumOdd)
console.log(sumArr)
//Question 13: Develop a small script which generate array of 5 random numbers
let randomNumbersArr = [];
for (i = 0; i <= 5; i++) {
   let randomNumbers = Math.floor(Math.random() * i);
randomNumbersArr.push(randomNumbers);
}
console.log(randomNumbersArr);

//Question 14: Develop a small script which generate array of 5 random numbers and the numbers must be unique
let randomUniqueArr = [];
for (i = 0; i <= 4; i++) {
   let randomUniqueNumbers = Math.floor(Math.random() * 100) + 1
randomUniqueArr.push(randomUniqueNumbers);
}
console.log(randomUniqueArr);

//Question 15:  Develop a small script which generate a six characters random id
for (i = 0; i < 1; i++) {
   let randomId = Math.floor((1 + Math.random()) * 0x1000000).toString(10).substring(61);
console.log(randomId);
}




