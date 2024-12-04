// Programmers Names: Stephanos Khoury ,Rula yosef
// This program checks if a number is divisible by 2, 3, or 5 and outputs the count of these divisors.

const num = 123;

// Checking divisibility by 2, 3, and 5 and converting the boolean result true/false to a number 1/0 and sum the results.
console.log(Number(num % 2 == 0) + Number(num % 3 == 0) + Number(num % 5 == 0));
