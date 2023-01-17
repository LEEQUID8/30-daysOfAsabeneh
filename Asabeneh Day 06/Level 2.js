
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
//Question 1: Develop a small script which generate any number of characters random id
 //Question 2: Write a script which generates a random hexadecimal number
 //Question 3: Write a script which generates a random rgb color number.
//Question 4: Using the above countries array, create the following new array.
  for(const country of countries) {
    console.log(country.toUpperCase());
}
//Question 5: Using the above countries array, create an array for countries length'
let countries_Length = [];
for(const country of countries) {
    console.log(countries_Length.push(country.length));
}
//QUESTION 6: Use the countries array to create the following array of arrays
//Question 7: In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'
let landCountries = [];
let nonLandCountries = [];
for (let i = 0; i < countries.length; i++) {
    if(countries[i].includes('land')) {
        landCountries.push(countries[i]);
    } else {
        nonLandCountries.push(countries[i]);
    }
}
//Question 8 : In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let _iaCountries = [];
let non_IaCountries = [];

for (let i = 0; i < countries.length; i++) {
    
    if(countries[i].endsWith('ia')) {
        _iaCountries.push(countries[i]);
    } else {
         non_IaCountries.push(countries[i]);
    }
}
console.log(`countries with "ia" [${_iaCountries}]`);
console.log(`These are countries that ends without "ia" [${non_IaCountries}]`);

//Question 9: Using the above countries array, find the country containing the biggest number of characters.

let biggestCharacter = [];
for (let i = 0; i < countries.length; i++) {
   if(countries[i].length > biggestCharacter.length) {
       biggestCharacter = countries[i];
   }
}
console.log(biggestCharacter);
//Question 10: Using the above countries array, find the country containing only 5 characters.
let countriesWithFiveCharacters = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length === 5) {
        countriesWithFiveCharacters.push(countries[i])
    }
}
console.log(countriesWithFiveCharacters);

//Question 11: Find the longest word in the webTechs array
let longestWord = '';
for (let i = 0; i < webTechs.length; i++) {
   if(webTechs[i].length >longestWord.length) {
    longestWord = webTechs[i];
   }
}
console.log(longestWord);

//Question 12: Use the webTechs array to create the following array of arrays
let _webTechs = [];
for (let i = 0; i < webTechs.length; i++) {
    _webTechs.push([webTechs[i], webTechs[i].length])
}
console.log(_webTechs);

//Question 13: An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let mern = "";
for (let i = 0; i < mernStack.length; i++) {
    mern += mernStack[i].slice(0, 1);
}
console.log(mern);

//Question 14: Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
let techArray = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for (const techArr of techArray) {
    console.log(techArr);
}

//Question 15: This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruits = ['banana', 'orange', 'mango', 'lemon'];
for (let i = fruits.length -1; i >= 0; i--) {
    console.log(fruits[i]);
}

//Question 16: Print all the elements of array as shown below.
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  
for (let i = 0; i < fullStack.length; i++) {
    for (let j = 0; j < fullStack[i].length; j++) {
    console.log(fullStack[i][j]);
    }    
}
