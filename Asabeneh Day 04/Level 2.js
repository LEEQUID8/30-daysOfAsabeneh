let score = prompt('Enter score:');

if (score >= 80 && score <= 100) {
    alert('A');
}
else if (score >=70 && score <= 89) {
    alert('B');
}
else if (score >=60 && score <= 69) {
    alert('C');
}
else if (score >=50 && score <= 59) {
    alert('D');
}
else  (score >=0 && score <= 49) 
{
    alert('B');
}
// Question 2
const userInput = prompt('Enter month:');

if (userInput === 'September' || userInput ===  'October' || userInput ===  'November') {
    alert('The season is Autumn.');
}
else if (userInput === 'December' || userInput ===  'January' || userInput ===  'Feburary') {
    alert('The season is Winter.');
}
else if (userInput === 'March' || userInput ===  'April' || userInput ===  'May') {
    alert('The season is Spring.');
}
else (userInput === 'June' || userInput ===  'July' || userInput ===  'August')
 {
    alert('The season is Summer.');
}
//Questionj 3
const day = prompt('What is the day today?');

if (day === 'Saturday' || day === 'Sunday') {
alert(`${day} is a weekend.`);
}

else (day === 'Monday' || day === 'Teusday' || day === 'Monday' || day === 'wednesday' || day === 'Thursday' || day === 'Friday')
 {
alert(`${day} is a working day`);
}
// else(alert(`${day} is a working day`));

