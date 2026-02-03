// ====================
// Exercise 8: Method Overriding
// ====================

// Base shape object
const shape = {
    calculateArea() {
        return 0; // Default implementation
    }
};

// Rectangle inherits from shape
const rectangle = Object.create(shape);
rectangle.width = 5;
rectangle.height = 4;

// Override calculateArea method for rectangle
rectangle.calculateArea = function() {
    return this.width * this.height;
};

// Circle inherits from shape
const circle = Object.create(shape);
circle.radius = 5;

// Override calculateArea method for circle
circle.calculateArea = function() {
    return Math.PI * this.radius * this.radius;
};

// ====================
// Testing method overriding
// ====================

console.log("=== Method Overriding ===");

// Test rectangle
console.log("\nRectangle:");
console.log("Width:", rectangle.width); // 5
console.log("Height:", rectangle.height); // 4
console.log("Area:", rectangle.calculateArea()); // 20

// Test circle
console.log("\nCircle:");
console.log("Radius:", circle.radius); // 5
console.log("Area:", circle.calculateArea()); // ~78.54
console.log("Area (formatted):", circle.calculateArea().toFixed(2)); // 78.54

// Test base shape
console.log("\nBase Shape (no dimensions):");
console.log("Area:", shape.calculateArea()); // 0

// ====================
// Verify method overriding
// ====================

console.log("\n=== Verification ===");
console.log("rectangle.calculateArea === shape.calculateArea:", 
    rectangle.calculateArea === shape.calculateArea); // false (overridden)
console.log("circle.calculateArea === shape.calculateArea:", 
    circle.calculateArea === shape.calculateArea); // false (overridden)
console.log("rectangle.hasOwn('calculateArea'):", 
    Object.hasOwn(rectangle, 'calculateArea')); // true (owns the method)
console.log("circle.hasOwn('calculateArea'):", 
    Object.hasOwn(circle, 'calculateArea')); // true (owns the method)
console.log("shape.hasOwn('calculateArea'):", 
    Object.hasOwn(shape, 'calculateArea')); // true (owns the method)

// ====================
// Additional shapes demonstrating inheritance
// ====================

console.log("\n=== Additional Shapes ===");

// Triangle inherits from shape
const triangle = Object.create(shape);
triangle.base = 6;
triangle.height = 3;
triangle.calculateArea = function() {
    return 0.5 * this.base * this.height;
};

console.log("\nTriangle:");
console.log("Base:", triangle.base, "Height:", triangle.height);
console.log("Area:", triangle.calculateArea()); // 9

// Square inherits from rectangle (demonstrating chained inheritance)
const square = Object.create(rectangle);
square.width = 4;
square.height = 4;
// Uses rectangle's calculateArea method (not overridden)

console.log("\nSquare (inherits from rectangle):");
console.log("Side:", square.width);
console.log("Area:", square.calculateArea()); // 16
console.log("square.hasOwn('calculateArea'):", 
    Object.hasOwn(square, 'calculateArea')); // false (inherited from rectangle)