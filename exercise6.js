// ====================
// Exercise 6: Basic Prototype Chain
// ====================

// Create a vehicle object (will be used as prototype)
const vehicle = {
    wheels: 4,
    describe() {
        return `This vehicle has ${this.wheels} wheels`;
    }
};

// Create a car object that inherits from vehicle
const car = Object.create(vehicle);

// Add specific properties to car
car.make = 'Toyota';
car.model = 'Camry';
car.year = 2024;

// ====================
// Testing the prototype chain
// ====================

console.log("=== Basic Prototype Chain Testing ===");

// Test inherited property
console.log("Car wheels (inherited):", car.wheels); // Expected: 4 (from vehicle)

// Test inherited method
console.log("Car description:", car.describe()); // Expected: This vehicle has 4 wheels

// Test own properties
console.log("Car make (own property):", car.make); // Expected: Toyota
console.log("Car model (own property):", car.model); // Expected: Camry
console.log("Car year (own property):", car.year); // Expected: 2024

// ====================
// Using Object.hasOwn() to check property ownership
// ====================

console.log("\n=== Property Ownership Check ===");
console.log("car.hasOwn('make'):", Object.hasOwn(car, 'make')); // true - own property
console.log("car.hasOwn('wheels'):", Object.hasOwn(car, 'wheels')); // false - inherited
console.log("car.hasOwn('describe'):", Object.hasOwn(car, 'describe')); // false - inherited
console.log("car.hasOwn('model'):", Object.hasOwn(car, 'model')); // true - own property
console.log("car.hasOwn('year'):", Object.hasOwn(car, 'year')); // true - own property

// Check vehicle's own properties
console.log("\nvehicle.hasOwn('wheels'):", Object.hasOwn(vehicle, 'wheels')); // true
console.log("vehicle.hasOwn('describe'):", Object.hasOwn(vehicle, 'describe')); // true

// ====================
// Checking the prototype chain
// ====================

console.log("\n=== Prototype Chain ===");
console.log("car.__proto__ === vehicle:", car.__proto__ === vehicle); // true
console.log("Object.getPrototypeOf(car) === vehicle:", 
    Object.getPrototypeOf(car) === vehicle); // true

// Show that vehicle is the prototype of car
console.log("Is vehicle prototype of car?", vehicle.isPrototypeOf(car)); // true