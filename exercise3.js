// ====================
// Exercise 3: Array Methods with Arrow Functions
// ====================

// Create an array of numbers
const numbers = [1, 2, 3, 4, 5];

// ====================
// 1. Using map() with arrow function to square each number
// ====================

// Arrow function with explicit return using curly braces
const squared = numbers.map(num => {
    return num * num; // Square the number
});

console.log("Squared:", squared); // Expected: [1, 4, 9, 16, 25]

// ====================
// 2. Using filter() with arrow function to get even numbers
// ====================

// Arrow function to check if a number is even
const evens = numbers.filter(num => {
    return num % 2 === 0; // Returns true if number is even
});

console.log("Even numbers:", evens); // Expected: [2, 4]

// ====================
// 3. Using reduce() with arrow function to sum all numbers
// ====================

// Arrow function to accumulate sum
// total: accumulator, num: current element
const sum = numbers.reduce((total, num) => {
    return total + num; // Add current number to running total
}, 0); // Starting value of total is 0

console.log("Sum:", sum); // Expected: 15

// ====================
// 4. Summary output
// ====================

console.log("\n--- Summary ---");
console.log("Original numbers:", numbers);
console.log("Squared numbers:", squared);
console.log("Even numbers:", evens);
console.log("Sum of all numbers:", sum);