let prompt = require('prompt-sync')();
//what is conditional statement? -> conditional statement is a statement that is used to make decisions
// a block of code is a group of statements that are enclosed in curly braces {}
//conditional statement means if some block of code is true then it will execute otherwise it will not execute


// 1. if-else: (it is used to make decisions)
// let prompt = require('prompt-sync')();

// let age = Number(prompt("Enter your age: "));
// if(age >= 18){
//     console.log("You are eligible for voting!!")
// } else{
//     console.log("You are not eligible for voting!!")
// }


//2. Else-if:
// let marks = Number(prompt("Enter your marks: "));

// if(marks>85 && marks<=100) console.log("Excellent!");
// else if(marks>75 && marks<=85) console.log("Very Good!");
// else if(marks>65 && marks<=75) console.log("Good!");
// else if(marks>55 && marks<=65) console.log("Average!");
// else if(marks>45 && marks<=55) console.log("Below Average!");
// else if(marks>35 && marks<=45) console.log("Pass!");
// else console.log("Fail!");
// here if you remove if condition from the else-if statement then it will not work properly
// because it will check the condition from the top to bottom and if it finds the condition to be true then it will execute the code and if it finds the condition to be false then it will not execute the code

//===============================================================

//EXERCISES:

//1. Accept two numbers and print the greatest between them
// let num1 = Number(prompt("Enter the first number: "));
// let num2 = Number(prompt("Enter the second number: "));

// if(num1 > num2) console.log("The greatest number is: ", num1);
// else console.log("The greatest number is: ", num2);


// //2. Accept an integer and check whether it is even or odd
// // let num = Number(prompt("Enter the number:"));

// if(num % 2 == 0) console.log("The number is even");
// else console.log("The number is odd");


//3. Accept 3 numbers and find the greatest between them
// let a = Number(prompt("Enter the first number:"));
// let b = Number(prompt("Enter the second number:"));
// let c = Number(prompt("Enter the third number:"));

// if(a > b && a > c) console.log("The greatest number is: ", a);
// else if(b > a && b > c) console.log("The greatest number is: ", b);
// else console.log("The greatest number is: ", c);


//4.Accept a year and check if it is a Leap year or not
let year = Number(prompt("Enter a year: "));

if(year % 4 == 0 && year % 100 != 0) console.log("It is a Leap year!");
else if(year % 400 == 0) console.log("It is a Leap year");
else console.log("It is not a Leap year")