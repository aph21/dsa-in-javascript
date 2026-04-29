# 📘 DSA Problem Log — JavaScript Essentials

> A personal record of all problems solved, with dates and short theory notes.
> **Last Updated:** 29-Apr-2026

---

## 📁 File Index

| # | File | Topic | Created | Last Updated |
|---|------|-------|---------|--------------|
| 1 | `variables.js` | Variables & Type System | 12-Apr-2026 | 16-Apr-2026 |
| 2 | `operators.js` | Operators | 17-Apr-2026 | 17-Apr-2026 |
| 3 | `math_Fun.js` | Math Functions | 19-Apr-2026 | 20-Apr-2026 |
| 4 | `conditional.js` | Conditionals & Switch | 20-Apr-2026 | 28-Apr-2026 |
| 5 | `switchcase.js` | Switch Case & Break | 22-Apr-2026 | 22-Apr-2026 |
| 6 | `loops_1.js` | For Loop Problems | 23-Apr-2026 | 28-Apr-2026 |
| 7 | `loops_2.js` | While Loop Problems | 25-Apr-2026 | 28-Apr-2026 |
| 8 | `loops_3.js` | Do-While Loop Problems | 28-Apr-2026 | 29-Apr-2026 |

---

## 🗂️ Detailed Problem Records

---

### 📄 `variables.js` — 12 Apr 2026

**Topic:** Variables, Data Types & Type Coercion

#### 📖 Theory
- **`const`** → Cannot be reassigned; throws `TypeError` if you try.
- **`let`** → Block-scoped, reassignable. Throws `ReferenceError` if accessed before initialization (**Temporal Dead Zone / TDZ**).
- **`var`** → Function-scoped, hoisted (accessible before declaration as `undefined`). Avoid in DSA.
- **Type Coercion:** JS auto-converts types. `'1' - 1 = 0` (string → number) but `'1' + 1 = '11'` (number → string, `+` prefers concatenation).
- **Template Literals:** Use `` `${var}` `` to safely embed variables in strings.

#### ✅ Problems Solved
| # | Problem | Key Concept |
|---|---------|-------------|
| 1 | Sum of two numbers | Basic arithmetic, `let` vs `const` |
| 2 | Swap two variables — 3 methods | Temp variable / Math trick / **Destructuring** `[a, b] = [b, a]` |
| 3 | Compound Interest Calculator | Formula: `CI = P*(1+r/n)^(n*t) - P`, modularized with `module.exports` |
| 4 | String + Integer rules demo | Coercion rules, `typeof`, template literals |

---

### 📄 `operators.js` — 17 Apr 2026

**Topic:** All JavaScript Operators

#### 📖 Theory
- **Arithmetic:** `+`, `-`, `*`, `/`, `%` (remainder), `**` (exponentiation).
- **Relational:** `==` checks value only; `===` checks value **and** type (always prefer `===`).
- **Logical:** `&&` (AND), `||` (OR), `!` (NOT).
- **Ternary:** `condition ? valueIfTrue : valueIfFalse`.
- **Unary — Prefix vs Postfix:**
  - `++x` (prefix) → Increment **first**, then use.
  - `x++` (postfix) → Use **first**, then increment.
- **Key Edge Cases:**
  - `5++` → Invalid (can only apply to variables, not literals).
  - `const x = 5; x++` → `TypeError` (const can't be reassigned).
  - `let s = "99"; s++` → `100` (++ forces numeric coercion; unlike `+` which concatenates).

#### ✅ Problems Solved
| # | Problem | Key Concept |
|---|---------|-------------|
| 1 | Prefix vs Postfix behavior demo | `++x` change-first vs `x++` use-first |
| 2 | Concept check quiz (4 Qs) | Edge cases of `++`/`--` operators |
| 3 | `==` vs `===` comparison demo | Strict equality |

---

### 📄 `math_Fun.js` — 19 Apr 2026

**Topic:** JavaScript Math Object & Problem Solving

#### 📖 Theory
| Method | Description |
|--------|-------------|
| `Math.abs(x)` | Absolute value (removes negative sign) |
| `Math.ceil(x)` | Round **up** to nearest integer |
| `Math.floor(x)` | Round **down** to nearest integer |
| `Math.round(x)` | Round to nearest (≥ 0.5 → up) |
| `Math.trunc(x)` | Remove decimal part (no rounding) |
| `Math.pow(b, e)` | `b` raised to power `e` |
| `Math.sqrt(x)` | Square root |
| `Math.cbrt(x)` | Cube root |
| `Math.random()` | Random float in `[0, 1)` |
| `Math.PI` | π constant (3.14159...) |
| `.toFixed(n)` | Format number to `n` decimal places (returns string) |

#### ✅ Problems Solved
| # | Problem | Formula / Key Concept |
|---|---------|----------------------|
| 1 | Compound Interest | `CI = P*(1+r/100)^t - P`, `.toFixed(2)` |
| 2 | Generate 4-digit OTP | `Math.trunc(Math.random()*9000 + 1000)` |
| 3 | Area of Triangle (Heron's Formula) | `s=(a+b+c)/2`, Area = `√(s(s-a)(s-b)(s-c))` |
| 4 | Circumference & Area of Circle | `2πr` and `πr²` |
| 5 | Swap two numbers | Destructuring `[a, b] = [b, a]` |
| 6 | Find minimum value | `Math.min(2, 0, -3, 5, -7)` → `-7` |

---

### 📄 `conditional.js` — 20 Apr 2026

**Topic:** Conditional Statements (`if`, `else-if`, Switch)

#### 📖 Theory
- **`if-else`:** Executes a block if a condition is `true`; otherwise runs `else`.
- **`else-if` chain:** Checks conditions top-to-bottom; stops at first `true`.
- **Key Pattern — Reducing code:** Assign only the varying part (e.g., discount %) inside conditions, compute the final result once outside.
- **Electricity Bill — Two Approaches:**
  - *Top-down:* Handle each range with cumulative slab math.
  - *Bottom-up:* Peel off highest slabs first and reduce `unit` each time. *(More elegant)*
- **Leap Year Rule:** `(year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)`.

#### ✅ Problems Solved
| # | Problem | Key Concept |
|---|---------|-------------|
| 1 | Voting eligibility (age ≥ 18) | Basic `if-else` |
| 2 | Grade calculator (marks range) | `else-if` chain |
| 3 | Greatest of 2 numbers | Comparison with `if-else` |
| 4 | Even or Odd | Modulo `% 2` |
| 5 | Greatest of 3 numbers | Nested conditions, `&&` |
| 6 | Leap Year Check | Compound boolean condition |
| 7 | Shop Discount Calculator | Slab-based discount with DRY code pattern |
| 8 | Electricity Bill | Top-down & Bottom-up slab calculation |
| 9 | Days in a Month | Nested conditions + Leap year logic |
| 10 | Number to Word (1–10) | Switch case (at bottom of file) |

---

### 📄 `switchcase.js` — 22 Apr 2026

**Topic:** Switch Case & Break Statement

#### 📖 Theory
- **Switch vs if-else:** `switch` checks a **single value** against many cases; `if-else` evaluates boolean **conditions**.
- **`break`:** Exits the nearest enclosing `switch` or loop. Without it → **fall-through** (all subsequent cases execute).
- **Fall-through (intentional use):** Group multiple cases to share the same code (e.g., all vowels → `vowel++`).
- **`default`:** Acts like the final `else`; runs when no case matches.

#### ✅ Problems Solved
| # | Problem | Key Concept |
|---|---------|-------------|
| 1 | Day number to Day name (1–7) | `switch` with `break` |
| 2 | Vowel & Consonant Counter | Intentional fall-through for vowel cases |

---

### 📄 `loops_1.js` — 23 Apr 2026

**Topic:** `for` Loop Algorithms

#### 📖 Theory
- **Entry Control Loop:** Condition is checked **before** execution. May not run at all if condition is `false` initially.
- **`for` loop syntax:** `for(init; condition; change) { }`
- **Factor Optimization:** Factors of `n` always come in pairs where one is ≤ `√n`. So only loop up to `n/2` (or `√n` for better optimization).
- **Prime Check:**
  - *Level 1:* Check divisors from `2` to `n-1`. O(n).
  - *Level 2:* Check from `2` to `√n` (i.e., `i*i <= n`). O(√n). *(If n has a factor > √n, its pair factor must be < √n.)*
- **Digit Extraction Pattern (while):** `digit = n % 10; n = Math.floor(n / 10);`

#### ✅ Problems Solved
| # | Problem | Key Concept |
|---|---------|-------------|
| 1 | Print N to 1 (countdown) | Reverse `for` loop |
| 2 | Print 1 to N | Basic `for` loop, `process.stdout.write` (no newline) |
| 3 | Sum of first N natural numbers | Accumulator pattern |
| 4 | Factorial of a Number | Edge cases: `0! = 1`, negative → undefined |
| 5 | Print all Factors of N | Two methods: O(n) and O(n/2) |
| 6 | Sum of Even & Odd in range | Swap trick: `[start, end] = [end, start]` |
| 7 | Print "Hello World" N times | Simple repetition |
| 8 | Multiplication Table (up to 10) | Template literals in loop |
| 9 | Prime Number Check | Two approaches: O(n) and O(√n) with `break` |
| 10 | Power of a Number | Edge: `0^0 = Undefined`, `5^0 = 1`, `0^5 = 0` |
| 11 | Strong Number | Sum of factorials of digits = number itself. (e.g., `145 = 1!+4!+5!`) |

---

### 📄 `loops_2.js` — 25 Apr 2026

**Topic:** `while` Loop Algorithms

#### 📖 Theory
- **`while` loop:** Entry-controlled. Use when the number of iterations is **unknown in advance**.
- **vs `for` loop:** `for` → known iterations; `while` → condition-driven iterations.
- **Core Pattern — Digit Extraction:**
  ```
  while(n > 0) {
      digit = n % 10;   // get last digit
      n = Math.floor(n / 10);  // remove last digit
  }
  ```
- **Automorphic:** Count digits of `n` → compute `10^count` → check if `n² % 10^count === n`.
- **ISBN-10 Validation:** 10-digit number. Weighted sum = `d1×10 + d2×9 + ... + d10×1`. Valid if sum `% 11 === 0`.

#### ✅ Problems Solved
| # | Problem | Key Concept |
|---|---------|-------------|
| 1 | Reverse a Number | Build reverse: `rev = rev*10 + digit` |
| 2 | Sum of Digits | Digit extraction + accumulator |
| 3 | Automorphic Number | `n² ends with n` — count digits, use `Math.pow(10, count)` |
| 4 | ISBN-10 Number Validation | Weighted digit sum, modulo 11 |

---

### 📄 `loops_3.js` — 28 Apr 2026

**Topic:** `do-while` Loop & Mixed Loop Problems

#### 📖 Theory
- **`do-while` loop:** Exit-controlled. Executes body **at least once** before checking condition.
- **Syntax:** `do { ... } while(condition);`
- **When to use:** Menu-driven programs, input validation loops, "guess the number" games.
- **Harshad Number:** A number divisible by the sum of its own digits. (18 → 1+8=9 → 18%9=0 ✅)
- **Abundant Number:** Sum of proper divisors (excluding itself) > the number. (12 → 1+2+3+4+6=16 > 12 ✅)
- **Prime Factors:** Repeatedly divide `n` by `i` while divisible → gives prime factorization.
- **Armstrong Number (to be solved):** Sum of digits each raised to power of (number of digits) = number. (153 = 1³+5³+3³ = 153)

#### ✅ Problems Solved
| # | Problem | Key Concept |
|---|---------|-------------|
| 1 | Sum of first N natural numbers (do-while) | Exit-control loop basics |
| 2 | Guess the Number Game | `do-while` + `Math.random()` + `break` |
| 3 | Sasta Calculator | `do-while` + `switch` combo (menu-driven) |
| 4 | Harshad Number Check | Digit sum, divisibility |
| 5 | Abundant Number Check | Sum of proper divisors using loop up to `n/2` |
| 6 | Finding Prime Factors | Nested `for` + `while` loop: trial division |

---

## 📊 Progress Summary

| Category | Problems Solved |
|----------|----------------|
| Variables & Types | 4 |
| Operators | 3 |
| Math Functions | 6 |
| Conditionals | 10 |
| Switch Case | 2 |
| For Loops | 11 |
| While Loops | 4 |
| Do-While Loops | 6 |
| **Total** | **46** |

---

> 💡 *Keep updating this file every time you solve a new problem. Add a new row in the table and a new entry under the relevant section.*
