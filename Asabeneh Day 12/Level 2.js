//Question 1: Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
let sentence =
  "I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.";
function tenMostFrequentWords(sentence, num) {
  let regex = /\w+/g;
  let array = sentence.match(regex);
  const arraySet = new Set(array);
  const counts = [];
  for (const w of arraySet) {
    const filteredArray = array.filter((words) => words === w);
    counts.push({ word: w, count: filteredArray.length });
  }

  counts.sort(function (a, b) {
    if (a.count < b.count) return 1;
    if (a.count > b.count) return -1;
    return 0;
  });
  return counts.slice(0, num);
}
console.log(tenMostFrequentWords(sentence, 3));
