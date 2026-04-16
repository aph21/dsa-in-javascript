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


a =10;
console.log(a)
// what is the variable type by default if we didn't assign one? -> is it var or let or const? -> it is var
console.log(typeof a)