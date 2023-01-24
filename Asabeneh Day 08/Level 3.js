//Question 1: Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
let personAccount = {
    firstName: "Rufaidat",
    lastName: "Al-siddiq",
    incomes: {
      tech: 50,
      graphics: 20,
      agric: 100,
    },
    expenses: {
      diaper: 200,
      food: 300,
      transport: 50,
    },
    totalIncome: 170,
    totalExpense: 550,
    acountBalance: 380,
  };
  
  const usersMongo = [
    {
      _id: "ab12ex",
      username: "Alex",
      email: "alex@alex.com",
      password: "123123",
      createdAt: "08/01/2020 9:00 AM",
      isLoggedIn: false,
    },
    {
      _id: "fg12cy",
      username: "Asab",
      email: "asab@asab.com",
      password: "123456",
      createdAt: "08/01/2020 9:30 AM",
      isLoggedIn: true,
    },
    {
      _id: "zwf8md",
      username: "Brook",
      email: "brook@brook.com",
      password: "123111",
      createdAt: "08/01/2020 9:45 AM",
      isLoggedIn: true,
    },
    {
      _id: "eefamr",
      username: "Martha",
      email: "martha@martha.com",
      password: "123222",
      createdAt: "08/01/2020 9:50 AM",
      isLoggedIn: false,
    },
    {
      _id: "ghderc",
      username: "Thomas",
      email: "thomas@thomas.com",
      password: "123333",
      createdAt: "08/01/2020 10:00 AM",
      isLoggedIn: false,
    },
  ];
  
  const products = [
    {
      _id: "eedfcf",
      name: "mobile phone",
      description: "Huawei Honor",
      price: 200,
      ratings: [
        { userId: "fg12cy", rate: 5 },
        { userId: "zwf8md", rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: "aegfal",
      name: "Laptop",
      description: "MacPro: System Darwin",
      price: 2500,
      ratings: [],
      likes: ["fg12cy"],
    },
    {
      _id: "hedfcg",
      name: "TV",
      description: "Smart TV:Procaster",
      price: 400,
      ratings: [{ userId: "fg12cy", rate: 5 }],
      likes: ["fg12cy"],
    },
  ];
  console.log(usersMongo[0]["username"])
  //Question 2: The question is not clear..
  // A
  function signUp(name, mail, password) {
    for (let i = 0; i < usersMongo.length; i++) {
      if (usersMongo[i]["username"] === name || usersMongo[i]["email"] === mail) {
        return "the user already has an account";
      }
    }
    const date = new Date();
    usersMongo.push({
      _id: Math.random()
        .toString()
        .slice(
          2
        ) /*this line of code generates a string of random numbers starting with numbers i.e 0.5fffg34 so the slice ,ethod removes the digit and decimal to make it a proper string*/,
      username: name,
      email: mail,
      password: password,
      createdAt: `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
      isLoggedIn: false,
    });
    return usersMongo;
  }
  console.log(signUp("Rufaidat", "rufaidat@gmail.com", 230540));
  console.log(signUp("idat", "dat@gmail.com", 230540));
  console.log(signUp("Rufaidat", "rufaidat@gmail.com", 230540));
// B
function signIn(username, password) {
    for (let elem in usersMongo) {
      if (
        usersMongo[elem]["username"] === username &&
        usersMongo[elem]["password"] === password
      ) {
        usersMongo[elem]["isLoggedIn"] = true;
      }
    }
    return usersMongo;
  }
  console.log(signIn("Rufaidat", 230540));
  //Question 3: he products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product
  function rateProduct(product, name, rating) {
    for (let elem in products) {
      if (products[elem]["_id"] === product) {
        products[elem]["ratings"].push({ userId: name, rate: rating });
      }
    }
    return products;
  }
  console.log(rateProduct("hedfcg", "he", 5));

// Question 4: Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeProduct(userId, likedBy) {
    for (let elem in products) {
      if (products[elem]["_id"] === userId) {
        products[elem]["likes"].splice(0, 1, likedBy);
      }
    }
    return products;
  }
  console.log(likeProduct("eedfcf", "fgdh"));