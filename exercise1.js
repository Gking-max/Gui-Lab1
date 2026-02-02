// ====================
// Exercise 1: Function Declarations
// ====================

// Function Declaration: calculateArea
function calculateArea(length, width) {
    // Return the product of length and width
    return length * width;
}

// ====================
// Testing the function
// ====================

// Test case 1: Rectangle with length 5 and width 10
console.log(calculateArea(5, 10));  // Expected output: 50

// Test case 2: Rectangle with length 7 and width 3
console.log(calculateArea(7, 3));   // Expected output: 21

// Test case 3: Square with sides of length 4
console.log(calculateArea(4, 4));   // Expected output: 16

// Additional test cases (optional for thorough testing)
console.log(calculateArea(0, 10));  // Edge case: zero length
console.log(calculateArea(2.5, 4)); // Decimal values

// ====================
// Exercise 2: Function Expressions (in the same file)
// ====================

// Function Expression: calculatePerimeter
const calculatePerimeter = function(length, width) {
    // Calculate perimeter: 2 * length + 2 * width
    return (2 * length) + (2 * width);
};

// ====================
// Testing the function expression
// ====================

console.log(calculatePerimeter(5, 10)); // Expected output: 30
console.log(calculatePerimeter(7, 3));  // Expected output: 20
console.log(calculatePerimeter(4, 4));  // Expected output: 16