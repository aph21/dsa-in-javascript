//switch case is also one of the conditional statement only
// it is used to make decisions
//how it is different from if-else?
// if-else is used to make decisions based on conditions
// switch case is used to make decisions based on values
// syntax:
// switch(value){
//     case value1: statement1;
//     break;
//     case value2: statement2;
//     break;
//     case value3: statement3;
//     break;
//     default: statement4;
// }


//Break statement -> it immediately exits the nearest enclosing loop or switch statement and continues execution after it.
// for(let i = 0; i<10; i++) {
//     if(i === 3) break; //exits the loop entirely
//     console.log(i);
// }


let prompt = require('prompt-sync')()
let day = Number(prompt("Enter a day number"))

switch(day) {
    case 1: {
        console.log("MONDAY");
        break;        
    }
    case 2: {
        console.log("TUESDAY");
        break;
    }
    case 3: {
        console.log("WEDNESDAY");
        break;
    }
    case 4: {
        console.log("THURSDAY");
        break;
    }
    case 5: {
        console.log("FRIDAY");
        break;
    }
    case 6: {
        console.log("SATURDAY");
        break;
    }
    case 7: {
        console.log("SUNDAY");
        break;
    }
    default: {
        console.log("Invalid day");
    }
}
//what happens if we dont use break statement?
// it will execute all the cases after the matched case
// this is called fall through