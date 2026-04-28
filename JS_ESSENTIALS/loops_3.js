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
do{
    console.log("Enter 1 for addition: ");
    console.log("Enter 2 for Subtraction: ");
}while()