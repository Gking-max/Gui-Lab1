// ====================
// Exercise 5: Dynamic Property Access
// ====================

// Create a book object
const book = {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    year: 2008,
    isbn: '978-0596517748'
};

// ====================
// Function to display a property value
// ====================

function displayProperty(obj, propertyName) {
    // Use bracket notation to access property dynamically
    console.log(`${propertyName}: ${obj[propertyName]}`);
}

// ====================
// Function to update a property value
// ====================

function updateProperty(obj, propertyName, newValue) {
    // Update the property using bracket notation
    obj[propertyName] = newValue;
    console.log(`Updated ${propertyName} to: ${newValue}`);
}

// ====================
// Testing dynamic property access
// ====================

console.log("=== Book Object Testing ===");

// Display initial properties
console.log("\nInitial Book Properties:");
displayProperty(book, 'title');   // Expected: JavaScript: The Good Parts
displayProperty(book, 'author');  // Expected: Douglas Crockford
displayProperty(book, 'year');    // Expected: 2008
displayProperty(book, 'isbn');    // Expected: 978-0596517748

// Update the year property
console.log("\nUpdating year property:");
updateProperty(book, 'year', 2024);

// Verify the update
console.log("\nAfter updating year:");
displayProperty(book, 'year');    // Expected: 2024

// Display all properties to confirm only year changed
console.log("\nAll properties after update:");
displayProperty(book, 'title');
displayProperty(book, 'author');
displayProperty(book, 'year');
displayProperty(book, 'isbn');

// ====================
// Additional testing with dynamic property names
// ====================

console.log("\n=== Additional Dynamic Tests ===");

// Test 1: Access property using a variable
const propertyToAccess = 'title';
console.log(`Accessing '${propertyToAccess}':`, book[propertyToAccess]);

// Test 2: Update multiple properties dynamically
const updates = [
    { property: 'author', value: 'Douglas Crockford (Updated)' },
    { property: 'isbn', value: '978-0596517755' }
];

updates.forEach(update => {
    updateProperty(book, update.property, update.value);
});

// Test 3: Display all properties using a loop
console.log("\nFinal book properties:");
for (const property in book) {
    displayProperty(book, property);
}

// Test 4: Try to access non-existent property
console.log("\nTrying to access non-existent property:");
displayProperty(book, 'publisher'); // Expected: publisher: undefined