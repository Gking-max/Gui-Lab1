// ====================
// Exercise 9: Simple Library System
// ====================

// 1. Create base library object
const library = {
    name: 'City Library',
    books: [],
    
    // Add a book
    addBook(title, author, isbn) {
        const book = { title, author, isbn };
        this.books.push(book);
    },
    
    // Find a book by title
    findBookByTitle(title) {
        for (let book of this.books) {
            if (book.title === title) {
                return book;
            }
        }
        return null;
    },
    
    // List all books
    listAllBooks() {
        console.log(`Books in ${this.name}:`);
        this.books.forEach(book => {
            console.log(`- ${book.title} by ${book.author}`);
        });
    }
};

// 2. Create university library that inherits from library
const universityLibrary = Object.create(library);
universityLibrary.name = 'University Library';
universityLibrary.courses = [];

// 3. Add special method for university library
universityLibrary.addCourseBook = function(courseName, title, author, isbn) {
    // Add the book
    this.addBook(title, author, isbn);
    
    // Add course if not already there
    if (!this.courses.includes(courseName)) {
        this.courses.push(courseName);
    }
};

// ====================
// Testing
// ====================

console.log("=== Testing Library System ===\n");

// Test 1: Add books to university library
console.log("1. Adding books to university library:");
universityLibrary.addCourseBook('Computer Science', 'JavaScript Basics', 'John Doe', '111');
universityLibrary.addCourseBook('Math', 'Algebra', 'Jane Smith', '222');
universityLibrary.addCourseBook('Computer Science', 'Advanced JS', 'John Doe', '333');

// Test 2: List all books
universityLibrary.listAllBooks();

// Test 3: Find a book
console.log("\n2. Finding a book:");
const found = universityLibrary.findBookByTitle('Algebra');
console.log("Found:", found ? found.title : "Not found");

const notFound = universityLibrary.findBookByTitle('Unknown');
console.log("Not found:", notFound);

// Test 4: Show courses
console.log("\n3. University courses:");
console.log(universityLibrary.courses);

// Test 5: Check inheritance
console.log("\n4. Inheritance check:");
console.log("universityLibrary has books?", universityLibrary.books.length > 0);
console.log("Can use listAllBooks?", typeof universityLibrary.listAllBooks === 'function');

// Test 6: Property check
console.log("\n5. Property ownership:");
console.log("Owns 'courses'?", Object.hasOwn(universityLibrary, 'courses')); // true
console.log("Owns 'books'?", Object.hasOwn(universityLibrary, 'books')); // false (inherited)
console.log("Owns 'addCourseBook'?", Object.hasOwn(universityLibrary, 'addCourseBook')); // true
console.log("Owns 'addBook'?", Object.hasOwn(universityLibrary, 'addBook')); // false (inherited)