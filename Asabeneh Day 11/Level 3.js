//Question 2: A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
console.log("\n");
const student = ["Adedeji", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
let [name, skills, [, , jsScore, reactScore]] = student;
console.log(name, skills, jsScore, reactScore);

//Question 3: Write a function called convertArrayToObject which can convert the array to a structure object.

console.log("\n");
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

function convertArrayToObject(students) {
  let objects = {};
  for (let i = 0; i < students.length; i++) {
    let [name, skills, scores] = students[i];
    let obj = { name, skills, scores };
    objects[i] = obj;
  }
  console.log(objects);
}
convertArrayToObject(students);

//Question 4: copy the student object to newStudent without mutating the original object. In the new object add the following ?
console.log("\n");
const studentAdd = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

let newStudent = studentAdd;
newStudent["skills"]["frontEnd"].push({ skill: "Bootstrap", level: 8 });
newStudent["skills"]["backEnd"].push({ skill: "Express", level: 9 });
newStudent["skills"]["dataBase"].push({ skill: "SQL", level: 8 });
newStudent["skills"]["dataScience"].push({ skill: "SQL", level: 8 });
console.log(newStudent);
