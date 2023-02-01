let languages = [
    { English: 91 },
    { French: 45 },
    { Arabic: 25 },
    { Spanish: 24 },
    { Russian: 9 },
    { Portuguese: 9 },
    { Dutch: 8 },
    { German: 7 },
    { Chinese: 5 },
    { Swahili: 4 },
    { Serbian: 4 },
  ];
  
  // Question 1: How many languages are there in the countries object file.
  console.log("\n");
  let langSet = new Set(languages);
  console.log(langSet.size);
  
  // Question 2: *** Use the countries data to find the 10 most spoken languages:
  console.log("\n");
  function mostSpokenLanguages(num) {
    let slice = languages.slice(0, num);
    return slice;
  }
  console.log(mostSpokenLanguages(4));
  