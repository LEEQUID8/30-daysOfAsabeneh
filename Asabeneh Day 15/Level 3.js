//Question 1: Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
console.log("\n");
ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

class Statistics {
  constructor(ages) {
    this.ages = ages;
    this.sort = ages.sort((a, b) => {
      return a - b;
    });
    console.log(this.sort);
  }
  count() {
    return ages.length;
  }
  sum() {
    let sum = 0;
    let total = ages.reduce((sum, num) => {
      return (sum += num);
    });
    return total;
  }
  min() {
    return Math.min(...ages);
  }
  max() {
    return Math.max(...ages);
  }
  range() {
    return Math.max(...ages) - Math.min(...ages);
  }
  mean() {
    return Math.round(statistics.sum() / ages.length);
  }
  median() {
    let length = this.ages.length;
    let mid = Math.floor(length / 2);
    if (length % 2 === 1) {
      return this.sort[mid];
    } else {
      return (this.sort[mid] + this.sort[mid - 1]) / 2;
    }
  }
  mode() {
    let set = new Set(this.sort);
    let count = [];
    for (let num of set) {
      let filter = this.sort.filter((value) => value === num);
      count.push({ mode: num, count: filter.length });
    }
    count.sort(function (a, b) {
      if (a.count < b.count) return 1;
      if (a.count > b.count) return -1;
      return 0;
    });
    return count.slice(0, 1);
  }
  var() {
    let variance = 0;
    ages.forEach((num) => {
      variance += (num - this.median()) * (num - this.median());
    });
    variance /= this.ages.length;
    return variance;
  }
  std() {
    let arr = ages.map((el) => {
      return (el - this.mean()) ** 2;
    });

    let total = arr.reduce((acc, curr) => acc + curr, 0);

    return Math.sqrt(total / ages.length);
  }
  freqDist() {
    const map = {};
    for (let i = 0; i < ages.length; i++) {
      map[ages[i]] = (map[ages[i]] || 0) + 1;
    }
    return map;
  }
}
let statistics = new Statistics(ages);

console.log("Count:", statistics.count());
console.log("Sum: ", statistics.sum()); // 744
console.log("Min: ", statistics.min()); // 24
console.log("Max: ", statistics.max()); // 38
console.log("Range: ", statistics.range()); // 14
console.log("Mean: ", statistics.mean()); // 30
console.log("Median: ", statistics.median()); // 29
console.log("Mode: ", statistics.mode()); // {'mode': 26, 'count': 5}
console.log("Variance: ", statistics.var()); // 17.5
console.log("Standard Deviation: ", statistics.std()); // 4.2
console.log("Frequency Distribution: ", statistics.freqDist()); // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

//Question 2:Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
console.log("\n");
class PersonAccount {
  constructor(firstname, lastname, incomes, expenses) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.incomes = incomes;
    this.expenses = expenses;
  }
  getFullName() {
    let fullName = this.firstname + " " + this.lastname;
    return fullName;
  }
  get getIncomes() {
    return this.incomes;
  }
  get getExpenses() {
    return this.expenses;
  }
  set setIncomes(incomes) {
    this.incomes.push(incomes);
  }
  set setExpenses(expenses) {
    this.expenses.push(expenses);
  }

  getInfo() {
    let info = `${this.fullName} has an income of ${this.incomes} and expenses of ${this.expenses}`;
  }
}
let Abdulrahman = new PersonAccount(
  "Abdulrahman",
  "Adedeji-Liadi",
  [{ a: 2500 }, { b: 5000 }],
  [{ a: 300 }, { b: 800 }]
);
Abdulrahman.setIncomes = { c: 2700 };
