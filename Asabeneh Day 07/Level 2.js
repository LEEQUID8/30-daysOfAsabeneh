//Question 1: Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation() {
    let val = 'ax + by + c = 0';
}
//Question 2: Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadratic(a = 5, x = 1, b = 2, c = 3) {
    return a * Math.pow(x, 2) + b * x + c;
  }
  console.log(solveQuadratic());
  console.log(solveQuadratic(1, 4, 4));
  console.log(solveQuadratic(1, -1, -2));
  console.log(solveQuadratic(1, 7, 12));
  console.log(solveQuadratic(1, 0, -4));
  console.log(solveQuadratic(1, -1, 0));

  //Question 3: Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
  function printArray(arr) {
  let arr1 = "";
  for (let i = 0; i < arr.length; i++) {
    arr1 = arr[i];
  }
  return arr1;
}
console.log(printArray(2, 5, 6, 2, 7, 8, 9, 10));
//Question 4: Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
    let date = new Date();
    let d = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    return d;
  }
  console.log(showDateTime());
  //function showDateTime() {
  let date = new Date();
  let d = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  return d;

console.log(showDateTime());

//Question 5: Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object
function swapValues(v, w) {
    return `x => ${w} y=>${v}`;
  }
  console.log(swapValues(5, 2));
//Question 6: Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr) {
    let revArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      revArr.push(arr[i]);
    }
    return revArr;
  }
  console.log(reverseArray([1, 2, 3, 4, 5]));
  console.log(reverseArray(["A", "B", "C"]));
//Question 7:   Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(arr) {
    let capArr = [];
    for (let i = 0; i < arr.length; i++) {
      capArr.push(arr[i].toUpperCase());
    }
    return capArr;
  }
  console.log(capitalizeArray(["a", "b", "c", "d", "e"]));
  //Question 8: Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
  function addItem(item) {
    let arr = [];
    arr.push(item);
    return arr;
  }
  console.log(addItem("akara"));
  //Question 9: Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
  function removeItem(index) {
    let arr = [2, 5, 3, 4, 8];
    arr.splice(index, 1);
    return arr;
  }
  console.log(removeItem(2));
  //Question 10: Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
  function sumOfNumbers(arr) {
    let s = arr.sort((a, b) => {
      return a - b;
    });
    for (let i = s[0] + 1; i < s[1]; i++) {
      s.push(i);
    }
    return s.reduce((sum, item) => {
      return (sum += item);
    });
  }
  console.log(sumOfNumbers([1, 5]));
  //Question 11: function sumOffOdds(arr) {
  let s = arr.sort((a, b) => {
    return a - b;
  });
  let odd = [];
  for (let i = s[0]; i <= s[1]; i++) {
    if (i % 2 === 1) {
      odd.push(i);
    }
  }
  return odd.reduce((sum, item) => {
    return (sum += item);
  });
console.log(sumOffOdds([1, 5]));
//Question 12: Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOffEven(arr) {
    let s = arr.sort((a, b) => {
      return a - b;
    });
    let even = [];
    for (let i = s[0]; i <= s[1]; i++) {
      if (i % 2 === 0) {
        even.push(i);
      }
    }
    return even.reduce((sum, item) => {
      return (sum += item);
    });
  }
  console.log(sumOffEven([1, 5]));
//  Question 13: Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evenAndOdds(num) {
    let even = [];
    let odd = [];
    for (let i = 0; i <= num; i++) {
      if (i % 2 === 0) {
        even.push(i);
      } else {
        odd.push(i);
      }
    }
    return `evensAndOdds ${num};
    The number of odds are ${odd.length}.
    The number of evens are ${even.length}.`;
  }
  console.log(evenAndOdds(100));
  //Question 14: Write a function which takes any number of arguments and return the sum of the arguments
  function sumArgs() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }
  
  console.log(sumArgs(2, 3, 4, 5, 6));
  //Question 15: Writ a function which generates a randomUserIp.
  let randomUserIp = () =>
  `${Math.floor(Math.random() * 255) + 1}.${Math.floor(
    Math.random() * 255
  )}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
console.log(randomUserIp());
 //Question 16: Write a function which generates a randomMacAddress
 function randomMacAddress() {
    let macChar = "0123456789ABCDEF";
    let length = macChar.length;
    let macFormat = "XX:XX:XX:XX:XX:XX";
    return macFormat.replace(/X/g, function () {
      return macChar.charAt(Math.floor(Math.random() * length));
    });
  }
  console.log(randomMacAddress());
//Question 17:  Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number
// random hexadecimal generator
function randomHexaNumberGenerator() {
    let hexChar = "0123456789ABCDEF";
    let length = hexChar.length;
    let hexFormat = "#xxxxxx";
    return hexFormat.replace(/x/g, function () {
      return hexChar.charAt(Math.floor(Math.random() * length));
    });
  }
  console.log(randomHexaNumberGenerator());
//Question 18:  Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator() {
    let idChar = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let length = idChar.length;
    let idFormat = "xxxxxxx";
    return idFormat.replace(/x/g, function () {
      return idChar.charAt(Math.floor(Math.random() * length));
    });
  }
  console.log(userIdGenerator());
  






