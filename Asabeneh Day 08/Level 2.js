//Question 1: Find the person who has many skills in the users object.
function mostSkilled() {
    let mostSkilled = "";
    for (let elem in users) {
      if (users[elem]["skills"].length > mostSkilled.length) {
        mostSkilled = elem;
      }
    }
    return mostSkilled;
  }
  console.log(mostSkilled());
  //Question 2: Count logged in users, count users having greater than equal to 50 points from the following object
  function userPoint() {
  let count = 0;
  for (let elem in users) {
    if (users[elem]["points"] >= 50) {
      count++;
    }
  }
  return count;
}
console.log(userPoint());
//Question 3: Find people who are MERN stack developer from the users object
function mern() {
    let mern = [];
    for (let elem in users) {
      if (users[elem]["skills"].includes("MongoDB", "Express", "React", "Node")) {
        mern.push(elem);
      }
    }
    return mern;
  }
  console.log(mern());
//Question 4:   Set your name in the users object without modifying the original users object
users.Abdulrahman = {};
console.log(users);
//Question 5: Get all keys or properties of users object
console.log(Object.keys(users));
//Question 6:Get all the values of users object
console.log(Object.values(users));
//Question 7: Use the countries object to print a country name, capital, populations and languages.
let countries = {
    Nigeria: {
      capital: "Abuja",
      population: "14 million",
      languages: ["yoruba", "igbo", "hausa"],
    },
    France: {
      capital: "Paris",
      population: "14 million",
      languages: ["French"],
    },
  };
  
  console.log(Object.entries(countries));
  
