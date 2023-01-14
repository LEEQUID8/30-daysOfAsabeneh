//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstname = 'Abdulrahman'
let lastname = 'Adedeji'
let country = 'Nigeria'
let city = 'Ikeja'
let age = '20'
let isMarried = 'False'
console.log(typeof firstname)
console.log(typeof lastname)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)

//Check if type of '10' is equal to 10
console.log(typeof '10'==10)
//Check if parseInt('9.8') is equal to 10
console.log(parseInt ('9.8')==10)

// question 4i
const number = 1
const _number = -2
const _type = true
//question 4ii
const empty = ''
const isEmpty = null
const type = false

//question 5
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log( 4 == '4')
console.log(4 === '4')
console.log( "python".length < 'jargon'.length)

//question 6
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log('dragon'.includes('on') && 'python'.includes('on'))

//question 7
const now = new Date()
console.log(now.getFullYear())

const _now = new Date()
console.log(now.getMonth())

const date = new Date()
console.log(date.getDate())

const day = new Date()
console.log(day.getDay())

const hour = new Date()
console.log(hour.getHours())

const minute = new Date()
console.log(minute.getMinutes())

const Sec = new Date() //
console.log(now.getTime())







