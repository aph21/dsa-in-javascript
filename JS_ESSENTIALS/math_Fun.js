//Math functions and problems

//1. Math.abs() -> it converts negative numbers to positive numbers (its is absolute value and not vice versa in converting negative to positive)
console.log(Math.abs(-10))


//2. Math.ceil() -> it rounds the numbers to its nearest integer in the upward direction
console.log(Math.ceil(10.2))

//3. Math.floor() -> it rounds the numbers to its nearest integer in the downward direction
console.log(Math.floor(10.9))

//4. Math.round() -> it rounds the numbers to its nearest integer (if the decimal part is >= 0.5 it rounds up, else it rounds down)
console.log(Math.round(10.5))
console.log(Math.round(10.4))

//5. Math.trunc() -> it truncates the decimal part of the number (it removes the decimal part of the number)
console.log(Math.trunc(10.9))
console.log(Math.trunc(10.4))

//6. Math.pow() -> it returns the power of a number (base, exponent)
console.log(Math.pow(2, 3))

//7. Math.sqrt() -> it returns the square root of a number
console.log(Math.sqrt(16))

//8. Math.cbrt() -> it returns the cube root of a number
console.log(Math.cbrt(27))

//9. Math.random() -> it returns a random number between 0 and 1
console.log(Math.random())

//10. toFixed() -> it returns a string representation of the number with a specified number of digits after the decimal point
console.log(Math.random().toFixed(2))

// Exercises:

//---- 1. Calculate the compound interest
// formula: CP = P(1 + r/100)^(t) - P
// input -> P = 10000, r = 5, t = 3, output = 1576.25
let prompt = require("prompt-sync")();

let P = prompt("Enter Principle: ");
let r = prompt("Enter rate of interest: ");
let t = prompt("Enter time in years:");

console.log((P * Math.pow(1 + (r/100), t) - P).toFixed(2))

//---- 2. Generate OTP
//console.log(Math.random()) //it will return a value between 0 and 1
//we want our otp to be between 1000 to 9999
//so we will multiply it by 9000
console.log(Math.trunc((Math.random() * 9000) + 1000 ))
