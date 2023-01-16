//Question 1: Declare an empty array;
 const array = []
 console.log(array)

 //Question 2: Declare an array with more than 5 number of elements

 const numerals = [1, 2, 3, 4, 5, 6,]

 //Question 3: Find the length of your array
 console.log(numerals.length)
 //Question 4 : Get the first item, the middle item and the last item of the array
 console.log(numerals[0])
 console.log(numerals[3])
 console.log(numerals[5])
 //Question 5: Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
 const mixedDataTypes  = ['Angel',false,300,{ class: ['jss1', 'jss2', 'jss3']}, true, 'leequid']
 console.log(mixedDataTypes.length)
 //Question 6 : Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
 const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
 console.log(itCompanies)
 console.log(itCompanies.length)
 console.log(itCompanies[0])
 console.log(itCompanies[3])
 console.log(itCompanies[6])
 //Question 10: Print out each company
 console.log(itCompanies[0])
 console.log(itCompanies[1])
 console.log(itCompanies[2])
 console.log(itCompanies[3])
 console.log(itCompanies[4])
 console.log(itCompanies[5])
 console.log(itCompanies[6])
 //Question 11: Change each company name to uppercase one by one and print them out
 itCompanies[0] = 'FACEBOOK'
 itCompanies[1] = 'GOOGLE'
 itCompanies[2] = 'MICROSOFT'
 itCompanies[3] = 'APPLE'
 itCompanies[4] = 'IBM'
 itCompanies[5] = 'ORACLE'
 itCompanies[6] = 'AMAZON'
 console.log(itCompanies)
 //Question 12: Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
 let sentence = itCompanies.toString('Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies')
 console.log(sentence)
 //Question 13: Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
 //const company = prompt('Enter company name')
 console.log(itCompanies.includes('AMAZON'))
  /*? alert(companyName)
  : alert('Company is not found');*/
  //Question 14: Filter out companies which have more than one 'o' without the filter method
  console.log(itCompanies.includes('oo'))
  //QUESTION 15: Sort the array using sort() method
  itCompanies.sort()
  console.log(itCompanies)
  //Question 16: Reverse the array using reverse() method
  itCompanies.reverse()
  console.log(itCompanies)
  //Question 17: Slice out the first 3 companies from the array
  console.log(itCompanies.slice(0, 3))
  //Question 18: Slice out the last 3 companies from the array
  console.log(itCompanies.slice(4))
  //Question 19: Slice out the middle IT company or companies from the array
  console.log(itCompanies.slice(3, 4))
  //question 20: Remove the first IT company from the array
  console.log(itCompanies.slice())
  //Question 21: Remove the middle IT company or companies from the array
  console.log(itCompanies.slice(3, 4))
//nQuestion 22: Remove the last IT company from the array
console.log(itCompanies.pop());
//Question 23: Remove all IT companies
console.log(itCompanies.splice());





 
 
 