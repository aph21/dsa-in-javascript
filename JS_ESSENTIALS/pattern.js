let prompt = require('prompt-sync')();

let n = Number(prompt("Enter the Number:"));

// 1. Square pattern
// for(let i = 1; i<=n; i++){
//     for(let j= 1; j <=n; j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }

// 2. Right angle triangle
// for(let i =1; i<= n; i++){
//     for(let j = 1; j <= i; j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }

// //3. Number right angle triangle
//     for(let i =1; i<= n; i++){
//         for(let j = 1; j <= i; j++){
//         process.stdout.write(j + " ");
//     }
//     console.log();
// }


//4. Alphabet right angle triangle
// for(let i = 1; i<= n; i++){
//     for(let j = 1; j <= i; j++){
//         process.stdout.write(String.fromCharCode(65 + j - 1) + " ");
//     }
//     console.log();
// }

//5. Inverted right angle triangle
// here outer loop will run n times.
// but inner loop will run in 1st row -> n times, 2nd row -> n -1 times, 3rd row row -> n - 2 times, 4th row -> n - 3 times and so on 
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= n - i + 1; j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }

//6. Mirror Right angle triangle
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= n - i; j++){
//         process.stdout.write("  ");
//     }
//     for(let j = 1; j<= i; j++){
//         process.stdout.write("* ")
//     }
//     console.log();
// }

//7. V shape pattern
// for(let i = 1; i <=n; i++){
//     for(let j = 1; j<=i- 1; j++){
//         process.stdout.write(" ");
//     }
//     if(i === n){
//         process.stdout.write("*");
//     }else{
//         process.stdout.write("*");
//         for(let j = 1; j<= 2*(n-i)-1;j++){
//             process.stdout.write(" ");
//         }
//         process.stdout.write("*");
//     }
//     console.log();
// }


//8. X shape pattern
for(let i = 1; i<=n; i++){
    for(let j = 1; j<= n; j++){
        if((i === j) || (i + j === n + 1)){
            process.stdout.write("*");
        }else{
            process.stdout.write(" ");
        }
    }
    console.log();
}