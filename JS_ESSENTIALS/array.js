//Array is a linear datastructure and it has continuous memory.
//we canaccess and assign the elements using its index
// let arr =[10, 20, 30, 40, 50];
// arr.push(100); // inserting from last
// console.log(arr); 
// arr.pop();
// console.log(arr); //removing elemnt from last
// arr.unshift(1); // to insert element from first
// console.log(arr)
// arr.shift(); //deletes from first place
// console.log(arr)

//to print any elemnt using index
// console.log(arr[3]);
// //to know array length
// console.log(arr.length);

//if you want to print the every element of array one by one then we can use for loop
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// let arr = new Array(3); // here you have initialized a array with 3 elemnts, but
// arr[0] = 10;
// arr[1] = 20;
// arr[2] = 30;
// arr[3] = 40;
// console.log(arr) // it will print [10, 20, 30, 40] which has 4 elements. why ? because SIZE OF ARRAY IS NOT FIXED IN JS ITS DYNAMIC.


// let arr = [10, true, {}, "anjana"]; // this means we can  add multiple type of data in array
// console.log(arr)


//1. accept values from user and assign them in an array
let prompt = require('prompt-sync')();
let n = Number(prompt("Enter the size of the array: "));
let arr = new Array(n);

// for(let i = 0; i < arr.length; i++){
//     arr[i] = Number(prompt("Enter a value: "));
// }
// console.log(arr);


//2. Sum of array's element
// let sum = 0;

// for(let i = 0; i < arr.length; i++){
//     arr[i] = Number(prompt("Enter a value: "));
//     sum = sum + arr[i];
// }
// console.log(arr);
// console.log("Sum of array elements: " + sum);

//3. Max element from the array
