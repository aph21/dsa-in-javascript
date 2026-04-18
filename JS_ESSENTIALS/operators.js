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
//Unary operator requires only on thing i.e. a single operand to do its job.

//two types in Unary operators:
//1. Increment operator -> 1. Pre-increment (++a), 2. Post-increment (a++)

//2. Decrement operator -> 1. Pre-decrement (--a), 2. Post-decrement (a--)

//A.K.A -> Prefix and postfix
// 1. Postfix -> x++ or x-- -> use me now and change later
// 2. Prefix -> ++x or --x -> change now and use later

//Postfix examples:
let y = 10;
let z = y++;
//step 1: z grabs current value of y (z becomes 10)
//step 2: y increments itself by 1(y becomes 11 in background)
// so final state: y is 11  and z is 10

//prefix examples
let p = 10;
let q = ++p;
//step 1: p increments itself by 1(p becomes 11 in background)
//step 2: q grabs current value of p (q becomes 11)
// so final state: p is 11 and q is 11

//edge cases:
//1. Applying to primitive values directly (Syntax error) -> that means you cannot do 5++ or 5-- or ++5 or --5 , because a number is just a number, you can only increment a variable that holds a number.
//2. Applying to const (Type error) ->++ or -- means it re assigns the value. If you define const score = 10, and then do score++ then JS will throw TypeError because const cannot be reassigned.
//3. The String coersion trick -> If you have a string with a number in it, like let x = "5";, running x++ actually forces JavaScript to convert it to a real Number type first, resulting in 6. (Compare this to x + 1, which does string concatenation and results in "51").


//CONCEPT CHECK QUIZ
//1. In your own words, what is the fundamental difference between how ++x and x++ behave inside a larger expression? -> so basically ++x is prefix and x++ is postfix, ++x will increment the value first then use it, whereas x++ will use the value first then increment it.

//2. If I write let health = 100; let status = health--;, what are the exact final values of health and status? -> health = 99 and status = 100

//3.If I have let level = "99"; level++;, will the final value of level be "991", 100, or an error? Why?-> No it will be 100, because level++ is postfix and it will use the value of level first then increment it.
//t is because the ++ operator forces a mathematical conversion (coercion) of the string "99" into the number 99 before doing the math. If you used level = level + 1, it would be "991" because the + operator defaults to string concatenation when a string is present. ++ is strictly for math!

//4.Why is let lives = 3; let result = lives++++ invalid? -> because lives++++ is not a valid syntax, it should be lives++ or ++lives, we cannot use ++ twice in a row.