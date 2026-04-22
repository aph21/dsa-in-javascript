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


// ============================================================
// BREAK STATEMENT — Complete Reference
// ============================================================

// WHAT IS BREAK?
// break immediately exits the nearest enclosing loop or switch.
// Execution resumes at the line AFTER the loop/switch block.

// ─────────────────────────────────────────────────────────────
// 1. WHY break IS NEEDED IN switch (Fall-Through Problem)
// ─────────────────────────────────────────────────────────────

// switch jumps to the matching case and runs EVERYTHING below
// it until it hits a break or the end of the block.
// This is called "fall-through" — a common source of bugs.

let fruit = "apple";

// ❌ WITHOUT break — falls through ALL cases:
switch (fruit) {
    case "apple":
        console.log("Apple"); // runs
    case "banana":
        console.log("Banana"); // ALSO runs (unintended)
    case "cherry":
        console.log("Cherry"); // ALSO runs (unintended)
}
// Output: Apple, Banana, Cherry 😱

// ✅ WITH break — stops at the right case:
switch (fruit) {
    case "apple":
        console.log("Apple"); // runs
        break; // 🛑 exits switch
    case "banana":
        console.log("Banana"); // skipped
        break;
    case "cherry":
        console.log("Cherry"); // skipped
        break;
    default:
        console.log("Unknown fruit");
}
// Output: Apple ✅

// ─────────────────────────────────────────────────────────────
// 2. INTENTIONAL FALL-THROUGH (Useful Pattern)
// ─────────────────────────────────────────────────────────────

// Multiple cases can SHARE the same code block intentionally.
let day = "Saturday";

switch (day) {
    case "Saturday":
    case "Sunday":
        console.log("Weekend! 🎉"); // both cases reach this
        break;
    case "Monday":
        console.log("Back to work 😢");
        break;
    default:
        console.log("Midweek grind");
}

// ─────────────────────────────────────────────────────────────
// 3. EDGE CASE — default is NOT always last!
// ─────────────────────────────────────────────────────────────

// If default is placed in the middle without a break,
// it will FALL THROUGH into the next case. Sneaky bug!

let x = 5;
switch (x) {
    case 1:
        console.log("one");
        break;
    default:
        console.log("other");  // runs (no match for 5)
        // ⚠️ No break here — falls through into case 10!
    case 10:
        console.log("ten");    // ALSO runs (bug!)
}
// Output: other, ten 😱 — always put break after default too!

// ─────────────────────────────────────────────────────────────
// 4. break IN LOOPS (for, while, do-while)
// ─────────────────────────────────────────────────────────────

// break works in all loop types, not just switch.
for (let i = 0; i < 10; i++) {
    if (i === 3) break; // exit loop when i is 3
    console.log(i);     // prints 0, 1, 2
}

// Commonly used to break out of infinite loops:
let count = 0;
while (true) {              // endless loop
    if (count === 5) break; // only way out
    count++;
}

// ─────────────────────────────────────────────────────────────
// 5. LABELED break — Breaking Nested Loops
// ─────────────────────────────────────────────────────────────

// By default, break only exits the NEAREST enclosing loop.
// Labels let you break out of OUTER loops from inside inner ones.

// ❌ Without label — only exits inner loop:
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) break; // only exits inner loop
    }
    // outer loop still continues
}

// ✅ With label — exits the outer loop entirely:
outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop; // 🔥 exits the labeled outer loop
        }
        console.log(`i=${i}, j=${j}`);
    }
}
// Stops at i=1, j=0 — never reaches i=2

// ─────────────────────────────────────────────────────────────
// 6. GOTCHA — break does NOT work in forEach / map / filter
// ─────────────────────────────────────────────────────────────

// forEach is not a loop construct — it's a function callback.
// break inside a callback is a SyntaxError!

// ❌ This will throw a SyntaxError:
// [1, 2, 3].forEach(num => {
//   if (num === 2) break; // SyntaxError: Illegal break statement
// });

// ✅ Use for...of instead when you need break:
for (const num of [1, 2, 3, 4, 5]) {
    if (num === 3) break; // works perfectly
    console.log(num);     // prints 1, 2
}

// ─────────────────────────────────────────────────────────────
// 7. break vs continue vs return
// ─────────────────────────────────────────────────────────────

// break    → exits the entire loop/switch
// continue → skips current iteration, loop continues
// return   → exits the entire function (also escapes any loop)

for (let i = 0; i < 5; i++) {
    if (i === 2) continue; // skips 2, continues loop
    if (i === 4) break;    // exits loop at 4
    console.log(i);        // prints 0, 1, 3
}

// Inside a function, return is often cleaner than break in switch:
function getLabel(val) {
    switch (val) {
        case 1: return "one";     // return exits function — no break needed
        case 2: return "two";
        default: return "unknown";
    }
}

// ─────────────────────────────────────────────────────────────
// MENTAL MODEL
// ─────────────────────────────────────────────────────────────
// Think of switch as a jump table with no walls between rooms.
// When you match a case, you enter that room.
// break is the DOOR OUT.
// Without it, you walk through every room below until the end.
