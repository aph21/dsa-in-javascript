// Do while loop -> it is an exit control loop. It will run the block of code at least once and then check the condition. If the condition is true, it will run the block of code again. Else it will terminate.
// Syntax: do { // block of code } while(condition);
// Example:
// let i = 100;
// do {
//     console.log(i);
//     i--;
// } while(i >= 1);

//1. print sum of first N natural numbers
let prompt = require('prompt-sync')();
// let n = Number(prompt("Enter a number: "));
// let sum = 0;
// let i = 1;
// do {
//     sum = sum + i;
//     i++;
// } while(i <= n);
// console.log(sum);

//2. Guess the number:
// let computer = Math.floor((Math.random() * 100) + 1);
// let user;
// do{
// user = Number(prompt("Enter a number between 1 and 100: "));
// if(user > computer){
//     console.log("Too Large!");
// }else if(user < computer){
//     console.log("Too Small!");
// }else if(user === computer){
//     console.log("Congratulations!👏🎉🎊 You guessed the number correctly!");
//     break;
// }else{
//     console.log("Invalid Input!!!");
//     console.log("\n");
// }
// }while(user != computer);


//3. Sasta Calculator:
// let n;
// do{
//     console.log("Enter 1 for addition: ");
//     console.log("Enter 2 for Subtraction: ");
//     n = Number(prompt("Enter a number: "));
//     switch(n){
//         case 1 : {
//             let a = Number(prompt("Enter the 1st number: "));
//             let b = Number(prompt("Enter the 2nd number: "));
//             console.log("Addition: "+ (a+b));
//             break;
//         }
//         case 2 : {
//             let a = Number(prompt("Enter the 1st number: "));
//             let b = Number(prompt("Enter the 2nd number: "));
//             console.log("Subtraction: "+ (a-b));

//             break;
//         }
//         default: console.log("Invalid number");
//     }
//     n = Number(prompt("Enter 3 for recontinue the program: "))
// }while(n == 3);


//=============================Exercises

//1. Harshad Number Check
// what is harshad number -> a number if it is divisible by the sum of its own digits
//example: 
//-> 18 -> 1 + 8 = 9 -> 18 % 9 = 0 -> ✅Harshad
//-> 19 -> 1 + 9 = 10 -> 19 % 10 != 0 -> ❌Not Harshad

// let n = Number(prompt("Enter a number: "));
// let temp = n;
// let sum = 0;
// while(n > 0){
//     let digit = n % 10;
//     sum = sum + digit;
//     n = Math.floor(n /10);
// }
// if(temp % sum === 0){
//     console.log("Harshad Number");
// }else{
//     console.log("Not Harshad Number");
// }

//2. Abundant Number
// A number is called Abundant Number if sum of its proper divisors ( excluding the number itself ) is greater than number
//example: 12 -> 1, 2, 3, 4, 6 -> sum = 16 -> 16 > 12 -> ✅Abundant number
// 10 -> 1, 2, 5 -> sum = 8 -> 8 < 10 -> Not Abundant Number

// let n = Number(prompt("Enter a number"));
// let sum = 0;
// if(n < 0 || n === 0){
//     console.log("Factors of negative number and 0 are not defined");
// }else{
//     for(let i = 1; i<= n/2; i++){
//         if (n % i === 0){
//             sum = sum + i;
//         }
//     }
//     if(sum > n){
//         console.log("Yes");
//     }else{
//         console.log("No");
//     }
// }

// //3. Finding Prime factors of a number
// let n = Number(prompt("enter a number: "));
// if(n === 0 || n === 1){
//     console.log("No prime factors");
// }
// else{
//     for(let i = 2; i<=n; i++){
//         while(n % i === 0){
//             console.log(i);
//             n = Math.floor(n / i)
//         }
//     }
// }


//4. Armstrong Number: AKA Nercissistic Number
// Armstrong number is a number that is equals to the sum of its own digits raised to power of total number of digits.
//example -> 153 -> total digits : 3 -> 1^3 + 5^3 + 3^3 -> 1 + 125 + 27 = 153 ✅Armstrong number
// let n = Number(prompt("Enter a number: "));
// let temp1 = n;
// let temp2 = n;
// let count = 0;
// let sum = 0;

// //handling negative numbers
// if(n < 0) console.log("Not Armstrong");
// //to count how many digits present using while loop
// else{
//     while(temp1 > 0) {
//     count++;
//     temp1 = Math.floor(temp1 / 10);
//     }
//     // calculate the Armstrong sum
//     while(temp2 > 0){
//     let digit = temp2 % 10;
//     sum = sum + Math.pow(digit, count);
//     temp2 = Math.floor(temp2 / 10);
//     }
//     //final comparision to check if the number is Armstrong or not
//     if(sum === n){
//     console.log("Armstrong");
//     } else{
//     console.log("Not Armstrong");
//     }
// }


//5. Neon Number -> sum of digits of its square = the nummber itself
// 9 -> 9^2 -> 81 -> 8 + 1 -> 9 -> NEON 
// 10 -> 100 -> 1 + 0 + 0 -> 1 -> Note NEON

let n = Number(prompt("Enter a number: "));
let sq = n * n;
let sum = 0;
if(n < 0){
    console.log("No");
}else{
    while(sq > 0){
        let digit = sq % 10;
        sum = sum + digit;
        sq = Math.floor(sq / 10);
    }
    if(sum === n){
        console.log("Yes");
    }else{
        console.log("No");
    }
}


