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
  ]

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

//Question 1: Copy countries array(Avoid mutation)
let copyArr = [];
for(i = 0; i < countries.length; i++) {
    let copy = countries[i].slice(0);
    copyArr.push(copy);
}
console.log(copyArr);
