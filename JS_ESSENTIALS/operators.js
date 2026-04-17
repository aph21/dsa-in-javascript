//Arithmetic operators +, -, *, /, %, **
console.log(Math.floor(10/3)) // why we use Math.floor() ? -> to get the integer part only. 
console.log(10 % 3) // modulo operator -> gives the remainder
console.log(2 ** 3) // exponentiation operator -> gives the power


//Relational operators <, >, <=, >=, ==, !=, ===, !==
console.log(10 > 9) // true
console.log(10 < 9) // false
console.log(10 >= 9) // true
console.log(10 <= 9) // false
console.log(10 == 9) // false
console.log(10 != 9) // true
console.log(10 === 9) // false
console.log(10 !== 9) // true

// == -> checks only value
// === -> checks value and type
console.log(10 == '10') // true
console.log(10 === '10') // false


//Logical operators &&, ||, !
console.log(10 > 9 && 10 < 11) // true
console.log(10 > 9 || 10 < 11) // true
console.log(10 > 9 || 10 < 11) // true

//Assignment operators =, +=, -=, *=, /=, %=, **=
console.log(10 += 10) // 20
console.log(10 -= 10) // 0
console.log(10 *= 10) // 100
console.log(10 /= 10) // 1
console.log(10 %= 10) // 0
console.log(10 **= 10) // 10000000000

//Ternary operator ? : 
console.log(10 > 9 ? 10 : 9) // 10

//Unary operators ++, --
let a = 10;
console.log(a++) // 10
console.log(a) // 11
console.log(++a) // 12
console.log(a) // 12
console.log(a--) // 12
console.log(a) // 11
console.log(--a) // 10
console.log(a) // 10

//two types in Unary operators:
//1. Increment operator -> 1. Pre-increment (++a), 2. Post-increment (a++)

//2. Decrement operator -> 1. Pre-decrement (--a), 2. Post-decrement (a--)