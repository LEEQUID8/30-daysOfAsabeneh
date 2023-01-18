//Question 1: Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
function userIdGeneratedByUser(userX, userY) {
    let idChar = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let length = idChar.length;
    let x = "x";
    let idFormat = x.repeat(userX);
    let idPile = "";
    let id = "";
    for (let i = 0; i <= userY; i++) {
      id = idFormat.replace(/x/g, function () {
        return idChar.charAt(Math.floor(Math.random() * length));
      });
      idPile += "\n" + id;
    }
    return idPile;
  }
  console.log(userIdGeneratedByUser(10, 5));
  //Question 2: Write a function name rgbColorGenerator and it generates rgb colors.
  function randomRGBGenerator() {
  let RGBFormat = "RGB(x,x,x)";
  return RGBFormat.replace(/x/g, function () {
    return Math.floor(Math.random() * 255);
  });
}
console.log(randomRGBGenerator());
//Question 3: Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

function arrayOfHexaColors(num) {
  let hexChar = "0123456789ABCDEF";
  let length = hexChar.length;
  let hexFormat = "#xxxxxx";
  let arr = [];
  for (let i = 0; i <= num; i++) {
    arr.push(
      hexFormat.replace(/x/g, function () {
        return hexChar.charAt(Math.floor(Math.random() * length));
      })
    );
  }
  return arr;
}
console.log(arrayOfHexaColors(5));
//Question 4: Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRGBColors(num) {
  let RGBFormat = "RGB(x,x,x)";
  let arr = [];
  for (let i = 0; i <= num; i++) {
    arr.push(
      RGBFormat.replace(/x/g, function () {
        return Math.floor(Math.random() * 255);
      })
    );
  }
  return arr;
}

console.log(arrayOfRGBColors(5));
//Question 5: Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function generateColors(color, num) {
  let hexChar = "0123456789ABCDEF";
  let length = hexChar.length;
  let hexFormat = "#xxxxxx";
  let RGBFormat = "RGB(x,x,x)";
  let arr = [];
  for (let i = 0; i <= num; i++) {
    if (color == "hexa") {
      arr.push(
        hexFormat.replace(/x/g, function () {
          return hexChar.charAt(Math.floor(Math.random() * length));
        })
      );
    } else {
      arr.push(
        RGBFormat.replace(/x/g, function () {
          return Math.floor(Math.random() * 255);
        })
      );
    }
  }
  return arr;
}

console.log(generateColors("rgb", 5));
//Question 6: Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
function factorial(num) {
  let factorial = 1;
  for (i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log(factorial(5));

function isEmpty(arr) {
  if (arr.length === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEmpty([2]));
//Question 7: Write a function generateColors which can generate any number of hexa or rgb colors
