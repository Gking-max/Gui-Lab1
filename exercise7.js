// ====================
// Exercise 7: Multi-Level Prototype Chain
// ====================

// Level 1: Person (base prototype)
const person = {
    species: 'Human',
    breathe() {
        return 'Breathing...';
    }
};

// Level 2: Employee (inherits from person)
const employee = Object.create(person);
employee.company = 'Tech Corp';
employee.position = 'Developer';

// Level 3: Manager (inherits from employee)
const manager = Object.create(employee);
manager.department = 'Engineering';
manager.team = [];

// Add method to manager
manager.addTeamMember = function(name) {
    this.team.push(name);
    return `${name} added to ${this.department} team`;
};

// ====================
// Testing multi-level inheritance
// ====================

console.log("=== Multi-Level Prototype Chain ===");

// Test manager accessing properties from all levels
console.log("Manager species (from person):", manager.species); // Human
console.log("Manager company (from employee):", manager.company); // Tech Corp
console.log("Manager department (own property):", manager.department); // Engineering

// Test inherited methods
console.log("\nManager can breathe:", manager.breathe()); // Breathing...

// Test manager's own method
console.log("\nAdding team members:");
console.log(manager.addTeamMember('Alice')); // Alice added to Engineering team
console.log(manager.addTeamMember('Bob')); // Bob added to Engineering team
console.log("Manager's team:", manager.team); // ['Alice', 'Bob']

// ====================
// Property ownership checks
// ====================

console.log("\n=== Property Ownership ===");
console.log("manager.hasOwn('species'):", Object.hasOwn(manager, 'species')); // false
console.log("manager.hasOwn('company'):", Object.hasOwn(manager, 'company')); // false
console.log("manager.hasOwn('department'):", Object.hasOwn(manager, 'department')); // true
console.log("manager.hasOwn('addTeamMember'):", Object.hasOwn(manager, 'addTeamMember')); // true

// Check prototype chain
console.log("\n=== Prototype Chain Verification ===");
console.log("manager.__proto__ === employee:", manager.__proto__ === employee); // true
console.log("employee.__proto__ === person:", employee.__proto__ === person); // true
console.log("person.__proto__ === Object.prototype:", person.__proto__ === Object.prototype); // true
console.log("Object.prototype.__proto__:", Object.prototype.__proto__); // null

// ====================
// Walking the prototype chain
// ====================

console.log("\n=== Walking the Prototype Chain ===");
console.log("manager -> employee -> person -> Object.prototype -> null");

let current = manager;
let level = 0;

while (current) {
    console.log(`Level ${level}:`, Object.getOwnPropertyNames(current));
    current = Object.getPrototypeOf(current);
    level++;
}