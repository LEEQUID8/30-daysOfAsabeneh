//Question 1: Declare a function fullName and it print out your full name.
function fullName() {
let firstName = 'Abdulrahman';
let lastName = 'Adedeji';
let myFullName = `${firstName} ${lastName}`;
return myFullName;
}
console.log(fullName());

//Question 2: Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
   return `${firstName} ${lastName}`
}
console.log(fullName('Abdulrahman', 'Adedeji'));

//Question 3: Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(a, b) {
    let sum = a + b;
    return sum;
}
console.log(addNumbers(2, 4));

//Question 4: An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
let area = length * width;
return area;
}
console.log(areaOfRectangle(10, 5));

//Question 5: A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
let perimeter = 2 * (length + width);
return perimeter;
}
console.log(perimeterOfRectangle(8, 4));

//Question 6: A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
    let volume = length * width * height;
    return volume;
}
console.log(volumeOfRectPrism(2, 4, 6));

//Question 7: Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r) {
    let area = Math.PI * r * r;
return area;
}
console.log(areaOfCircle(5));

//Question 8 : Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r) {
let circumference = 2 * Math.PI * r;
return circumference;
}
console.log(circumOfCircle(4));

//Question 9: Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function calcDensity(mass, vol) {
    let density = mass/vol;
    return density;
}
console.log(calcDensity(30, 5));

//Question 10: Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function objectSpeed(totalDistance,  totalTime) {
    let speed = totalDistance / totalTime;
    return speed;
}
console.log(objectSpeed(50, 15));

//Question 11: Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function calcWeight(mass, gravity) {
    let weight = mass * gravity;
    return weight;
}
console.log(calcWeight(2, 5));

//Question 12: Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(C) {
    F = (C * 9/5) + 32;
    return F;
}
console.log(convertCelsiusToFahrenheit(14));

//Question 13: Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
function calcBMI() {
    let weight = parseInt(prompt('Enter weight:'));
    let height = parseInt(prompt('Enter height:'));
    
    let BMI = weight / (height * height);

    if (BMI < 18.5) {
        alert `Underweight: BMI is less than 18.5`;
    } else if (BMI === 18.5 && BMI < 24.9) {
        alert `Normal weight: BMI is 18.5 to 24.9`;
    } else if (BMI === 25 && BMI < 29.9) {
        alert `Overweight: BMI is 25 to 29.9`;        
    } else if(BMI >=30) {
        alert `Obese: BMI is 30 or more`;
    } else {
        alert `Enter valid data`;
    }
}
calcBMI();


//Question 14 : Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
    
const userInput = prompt('Enter month:');

if (userInput === 'September' || userInput ===  'October' || userInput ===  'November') {
    alert('The season is Autumn.');
}

else if (userInput === 'December' || userInput ===  'January' || userInput ===  'February') {
    alert('The season is Winter.');
}

else if (userInput === 'March' || userInput ===  'April' || userInput ===  'May') {
    alert('The season is Spring.');
}

else if (userInput === 'June' || userInput ===  'July' || userInput ===  'August') {
    alert('The season is Summer');
}

else {
    alert('Invalid month');
}
}
checkSeason('March');

//Question 15: Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method
function findMax(array) {
    var val = array[0];

    for (var i = 1; i < array.length; i++) {
        if (array[i] > val) val = array[i];
    }

    return val;
}

console.log(findMax([0, 10, 5]));
console.log(findMax(0, -10, -2))
