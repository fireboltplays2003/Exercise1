# Divisibility Checker

## Description

This program determines how many numbers from a given set (2, 3, and 5) divide a given number without a remainder. The output is the count of divisors for the given number.

### Features:
- Checks if a number is divisible by 2, 3, or 5.
- Outputs the count of valid divisors as a single integer.

### Example:
For the number `123`:
- It is divisible by 3 but not by 2 or 5.
- The program outputs `1`.

## Programmers

- **Stephanos Khoury**
- **Rula Yosef**

## Code

```javascript
const num = 123;

// Checking divisibility by 2, 3, and 5 and converting the boolean result true/false to a number 1/0 and sum the results.
console.log(Number(num % 2 == 0) + Number(num % 3 == 0) + Number(num % 5 == 0));
```

