//Question 1: Display the countries array as a table
const countries = [
    ["Finland", "Helsinki"],
    ["Sweden", "Stockholm"],
    ["Norway", "Oslo"],
  ];
  console.table(countries)
//Question 2: Display the countries object as a table
console.log("\n");
  const user = {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  };
  console.table(user);
//Question 3: Use console.group() to group logs
  console.log("\n");
  console.group(countries);
  console.group(user);

