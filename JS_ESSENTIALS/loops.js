//why do we need loops? -> to repeat a block of code multiple times
// types of loops -> 1) Entry control loop 2) Exit control loop
//1. Entry control loop -> check condition before executing the body ( pre checking), means they may not run at all if the condition is false initially. example: for loop, while loop
//2. Exit control loop -> check condition after executing the body ( post checking), means they will run at least once even if the condition is false initially. example: do-while loop

//for loop:
// it accepts 3 paramters, and they are not mandatory but if we dont mention them we may get infinite loop
//syntax: for(initialize/ declare; condition; change) { // block of code}
// here initialize/declare is executed only once at the beginning
// condition is checked before each iteration
// change is executed after each iteration

// for(let i = 0; i<10; i++) {
//     console.log(i);
// }

let prompt = require("prompt-sync")();


//1. print natural numbers from N to 1

// let N = Number(prompt("Enter a number: "));
// for(let i = N; i > 0; i--){
//     process.stdout.write(i + " ");
// }


// 2. Print Natural numbers from 1 to N seperated by space
// let N = Number(prompt("Enter a number: "))
// for(let i = 1; i <= N; i++) {
//     process.stdout.write(i + " ");
// }
// console.log();

//3. Print sum of first N natural numbers
// let n = Number(prompt("Enter a number: "));
// let sum = 0;
// for(let i = 1; i<= n; i++){
//     sum = sum + i;
// }
// console.log(sum);


//4. factorial of a number
//factorial of number n is written as n!
// n! means multiply all positive integers from 1 upto n.
// if n= 5, then 5! = 5 * 4 * 3 * 2 * 1 = 120
// 0! is a special case, 0! = 1
//n! = n × (n-1) × (n-2) × ... × 1


// let n = Number(prompt("Enter a number: "));
// if(n < 0){
//     console.log("Factorial of a negative number is not defined");
// }else if(n === 0 || n === 1){
//     console.log(1);
    
// }else{
//     let fact = 1;
//     for(let i = 2; i<= n; i++){
//         fact = fact * i;
//     }
//     console.log(fact);
// }


// 5. Print all factors of a Number
// a factor is a number n is any number that divides n completely (i.e leaves remainder 0)
// example: factors of 12 are 1, 2, 3, 4, 6, 12
// *** KEY RULE: A factor of n is always between 1 and n(inclusive)

// let n = Number(prompt("Enter a number: "));
// if(n < 0 || n === 0){
//     console.log("Factors of negative number and 0 are not defined");  
// }else{
//     for(let i = 1; i<= n; i++){
//         if(n % i === 0){
//             process.stdout.write(i + " ");
//         }
//     }
// }

//6. Sum of even and odd numbers in range
let start = Number(prompt("Enter the starting number: "));
let end = Number(prompt("Enter the ending number: "));
let sumEven = 0;
let sumOdd = 0;

if(start > end) {
    [start, end] = [end, start];
}
for(let i = start; i <= end; i++){
    if(i % 2 === 0){
        sumEven = sumEven + i;
    }else{
        sumOdd = sumOdd + i;
    }
}
console.log("Sum of even numbers: ", sumEven);
console.log("Sum of odd numbers: ", sumOdd);
