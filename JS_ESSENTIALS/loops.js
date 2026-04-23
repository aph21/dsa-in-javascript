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
