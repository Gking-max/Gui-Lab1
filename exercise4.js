// ====================
// Exercise 4: Creating and Modifying Object Literals
// ====================

// Create a student object with initial properties
const student = {
    firstName: 'John',
    lastName: 'Doe',
    studentId: '12345',
    courses: [], // Empty array for courses
    
    // Method to get full name
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    
    // Method to enroll in a course
    enrollCourse(courseName) {
        this.courses.push(courseName); // Add course to courses array
        console.log(`${courseName} has been added to courses.`);
    },
    
    // Method to get number of enrolled courses
    getCourseCount() {
        return this.courses.length; // Return length of courses array
    }
};

// ====================
// Testing the student object
// ====================

console.log("=== Student Object Testing ===");

// Test 1: Get full name
console.log("Full Name:", student.getFullName()); // Expected: John Doe

// Test 2: Initial course count
console.log("Initial course count:", student.getCourseCount()); // Expected: 0

// Test 3: Enroll in first course
student.enrollCourse('CMPS2212'); // Adds to courses array

// Test 4: Enroll in second course
student.enrollCourse('MATH2210'); // Adds to courses array

// Test 5: Get updated course count
console.log("Course count after enrolling:", student.getCourseCount()); // Expected: 2

// Test 6: Display all courses
console.log("All enrolled courses:", student.courses); // Expected: ['CMPS2212', 'MATH2210']

// Test 7: Additional enrollment
student.enrollCourse('ENG1010');
console.log("Final course count:", student.getCourseCount()); // Expected: 3
console.log("Final courses list:", student.courses);