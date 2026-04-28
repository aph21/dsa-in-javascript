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

//------method 1
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

//------method 2
//example 50 = 1, 2, 5, 10, 25, 50
//30 = 1, 2, 3, 5, 6 , 10, 15, 30
// 10 = 1, 2, 5, 10
// 12 = 1, 2, 3, 4, 6, 12
// so as you can see that factors of n is always less than or equal to n/2
// except 1 and n itself
//so what we can do is: print 1 and n first and then print factors from 2 to n/2
let n = Number(prompt("Enter a number: "));
if(n < 0 || n === 0){
    console.log("Factors of negative number and 0 are not defined");  
}else{
    
    for(let i = 1; i<= n/2; i++){
        if(n % i === 0){
            process.stdout.write(i + " ");
        }
    }
    console.log(n);
}

//6. Sum of even and odd numbers in range
// let start = Number(prompt("Enter the starting number: "));
// let end = Number(prompt("Enter the ending number: "));
// let sumEven = 0;
// let sumOdd = 0;

// if(start > end) {
//     [start, end] = [end, start];
// }
// for(let i = start; i <= end; i++){
//     if(i % 2 === 0){
//         sumEven = sumEven + i;
//     }else{
//         sumOdd = sumOdd + i;
//     }
// }
// console.log("Sum of even numbers: ", sumEven);
// console.log("Sum of odd numbers: ", sumOdd);

//7. Accept an integer and print Hello world n times

// let n = Number(prompt("Enter a number: "));
// for(let i = 1; i<= n; i++){
//     console.log("Hello world");
// }

//8. take an integer and print its table upto 10 terms
// let n = Number(prompt("Enter the number: "));
// for(let i = 1; i<= 10; i++){
//     console.log(`${n} * ${i} = ${n*i}`);
    
// }

//9. Check if the given number is prime or not
// A prime number is a natural number greater than 1 that has no divisors other than 1 and itself
// example: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
//Key insight: To check if n is prime, you just need to find if any number between 2 and n-1 divides n evenly. If even ONE does then it is not prime

//----Approach 1: Level 1
// let n = Number(prompt("enter a number:"));
// let isPrime = true;
// if(n <= 1){
//     console.log("not prime");
// }else{
//     for(let i = 2; i< n; i++){
//         if(n % i === 0){
//             isPrime = false;
//             break;
//         }
//     }
//     if(isPrime){
//         console.log("prime");
//     }else{
//         console.log("not prime");
//     }
// }

//----Approach 2 : Level 2
// here we will be using i * i <= n instead of i <= n
// why? -> if n has a factor greater than sqrt(n), it must also have a factor smaller than sqrt(n)
// let n = Number(prompt("enter a number:"));
// let isPrime = true;
// if(n <= 1){
//     console.log("not prime");
// }else{
//     for(let i = 2; i * i <= n; i++){
//         if(n % i === 0){
//             isPrime = false;
//             break;
//         }
//     }
//     if(isPrime){
//         console.log("prime");
//     }else{
//         console.log("not prime");
//     }
// }


//10. Calculate Power of a Number
//edge case : 0^0 = undefined,5^0 = 1,0^5 = 0
// any number raised to power 0 is 1
// 0 raised to any positive power is 0

// function calculatePower(a, b) {
//     if(a === 0 && b === 0){
//         return "Undefined";
//     }else{
//         let res = 1;
//         for(let i = 1; i<= b; i++){
//             res = res * a;
//         }
//         return res;
//     }
    
// }

// let a = Number(prompt("Enter base number: "));
// let b = Number(prompt("Enter exponent: "));
// console.log(calculatePower(a, b));



//11. Strong Number: A number is strong if the sum of factorials of its digits is equal to the number itself.
//Example: 145 is a strong number because 1! + 4! + 5! = 1 + 24 + 120 = 145
// the problem has 3 sub tasks:
//Step 1: Extract each digit from n
//Step 2: Compute factorial of each digit
//Step 3: Sum them up → compare with n

// let n = Number(prompt("Enter a number: "));
// let temp = n;
// let sumFact = 0;
// while (n > 0) {
//     let digit = n % 10;
//     let fact = 1;
//     for(let i = 2; i<= digit; i++){
//         fact = fact * i;
//     }
//     sumFact = sumFact + fact;
//     n = Math.floor(n / 10);
// }
// if(sumFact === temp){
//     console.log("Yes");
// }else{
//     console.log("No");
// }




