let prompt = require('prompt-sync')();
// WHILE LOOP: 
// syntax: while(condition) { // block of code}
//definition: a type of entry control loop. while loop will run repeatedly until the condition is true.
//example:
// let i = 1;
// while(i <= 10){
//     console.log(i);
//     i++;
// }
//difference between for and while loop:
// for loop is used when we know the number of iterations
// while loop is used when we dont know the number of iterations


//example:extract digits of a number
// let n = Number(prompt("Enter a number: "));
// while(n > 0){
//     let digit = n % 10;
//     console.log(digit);
//     n = Math.floor(n / 10);
// }

//1. Reverse number:
//n = 589 should be 985
// let prompt = require('prompt-sync')();
// let n = Number(prompt("Enter a number: "));
// let rev = 0;
// while(n > 0){
//     let dig = n % 10;
//     rev = (rev * 10) + dig;
//     n = Math.floor(n / 10);
// }
// console.log(rev);

//2. sum of digits in a number
// let n = Number(prompt("Enter a number: "));
// let sum = 0;
// while(n > 0){
//     let dig = n % 10;
//     sum = sum + dig;
//     n = Math.floor(n / 10);
// }
// console.log(sum);


// 3. Automorphic number:
// a number is called automorphic if its square ends with the number itself
// example: 5^2 = 25, 6^2 = 36, 25^2 = 625

// let n = Number(prompt("Enter a number:"));
// let sq  = n * n;
// let temp = n;
// let count = 0;
// while(temp > 0){
//     count++;
//     temp = Math.floor(temp / 10);
// }
// let pow = Math.pow(10, count);
// if(sq % pow === n){
//     console.log("Automorphic");
// }else{
//     console.log("Not Automorphic");
// }


// 1. Identifythe ISBN number
// what is ISBN number: it is an unique identifier assigned to every published books
//ISBN stands for International Standard Book Number
// it is a 13 digit number or 10 digit number
// to verify it we use two separate validation rule for 13-digit and 10-digit

// let n = prompt("Enter a number: ");
// let copy = n, count = 0;

// while(n >0){
//     count++;
//     n = Math.floor(n/10); //this while block counts the number of digits in a number
// }
// if(count != 10) console.log("Invalid ISBN");
// else{
//     let ans = 0;
//     while(copy > 0){
//         let dig = copy % 10;
//         ans = ans + (dig * count);
//         count--;
//         copy = Math.floor(copy / 10);
//     }
//     if(ans % 11 === 0){
//         console.log("Valid ISBN");
//     }else{
//         console.log("Invalid ISBN"); 
//     }
// }


//2. Reverse a Number