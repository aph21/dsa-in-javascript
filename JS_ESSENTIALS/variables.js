//what is variable? -> A container where we can store the data
// there are 3 types of variables
//1. const 2. let 3. var


//Const variable -> which is constant and we cannot change its value
// const temp = 10;
// temp = 20;
// console.log(temp)
// gives error -> TypeError: Assignment to constant variable.


//Let variable -> Which is not constant and we can re assign its value

// let temp = 20;
// temp = 30
// console.log(temp) // it works

//Var variable -> Which is not constant and we can change its value

// var temp = 20;
// temp = 30
// console.log(temp) // it works

//it might look both var and let works the same, but it is not the case

// console.log(temp)
// let temp = 100;
// we get error as -> ReferenceError: Cannot access 'temp' before initialization
// why because in let if we try to access the variable before its initialization then it will give error
// this is called TDZ or temporal dead zone
// BUT THIS IS NOT THE CASE IN VAR

// console.log(temp)
// var temp = 100;

// we get undefined
// why because in var if we try to access the variable before its initialization then it will give undefined
// this is called hoisting

//As for DSA it is best to use let always


// a =10;
// console.log(a)
// what is the variable type by default if we didn't assign one? -> is it var or let or const? -> it is var
// console.log(typeof a)


// 1. Sum of two numbers
let a = 10;
let b = 20;
console.log(a + b)

// relation between integer and string
// RULES:
//RULE 1 :  if string + string = string (concatenation)
let s1 = "Hello";
let s2 = " World";
console.log(typeof(s1 + s2)) //string
// why we use typeof()? -> to check the type of the variable


//RULE 2: if String + Integer = String (Concatenation)
let s3 = "Hello";
let temp = 10;
console.log(s3 + temp)
console.log(typeof(s3 + temp)) // String


//RULE 3: If Integer + Integer = Integer (Addition)
let x = 10;
let y = 20;
console.log(x + y)
console.log(typeof(x + y)) // number


///
let p = 20;
let c = 30;
console.log("The sum of " + p + "and " + c + "is : " + p + c);
//here output is: The sum of 20and 30is : 2030
//why? because in JS if we add two strings it will concatenate them also because of rule 1 and rule 2
// to seperate them as string we need to add bracke or we should use template literals
//so we need to use template literals
console.log(`The sum of ${p} and ${c} is : ${p + c}`)
//output is: The sum of 20 and 30 is : 50


// Type Coersion:
// when we add two different types of variables then JS will convert one type to another type
// this is called type coersion
console.log('1' - 1) // '1' is being converted from string to number
console.log('1' + 1) // '1' is being converted from string to number

//why '1' + 1 is string? -> because in JS if we add two strings it will concatenate them also because of rule 1 and rule 2


//Accept and print the answer
