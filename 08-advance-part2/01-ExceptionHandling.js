// ----------- Exception Handling -------------------

/*

Exception handling is used to catch and manage errors that might occur during the execution of a program.

JS provides way to handle exceptions using try, catch, finally, and throw keywords.

1. The try Block
The try block contains code that may throw an error. If an error occurs, execution is immediately transferred to the catch block.

2. The catch Block
The catch block handles errors thrown in the try block. It takes an optional error object that provides details about the error.

3. The finally Block
The finally block contains code that executes regardless of whether an error occurred or not. It is typically used for cleanup operations.

4. The throw Statement
The throw statement is used to create custom exceptions. It can throw any value, such as a string, number, or object.

5. Custom Errors Classes
You can create custom error classes to handle specific types of errors.



*/


// --- try catch finally -----
try {
    let result = 10 / 2;
    console.log("Result:", result);
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("This block always runs.");
}
// Output:
// Result: 5
// This block always runs.






// ---  using custom exceptionsthrow keyword ----

try {
    let age = -1;
    if (age < 0) {
        throw new Error("Age cannot be negative");
    }
} catch (error) {
    console.log(error.message);  // Output: Age cannot be negative
}







// --- Custom Errors Classes ----

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

try {
    throw new CustomError("This is a custom error");
} catch (error) {
    console.log(error.name);    // Output: CustomError
    console.log(error.message); // Output: This is a custom error
}







/*

Error Types 

1. Error: Base type for custom errors.
    throw new Error("Something went wrong!");

2. ReferenceError: Occurs when trying to access variable that does not exist.

3. SyntaxError: Occurs when there's a syntax mistake.

4. TypeError: Occurs when a value is not of the expected type.

5. RangeError: Occurs when a value is out of range.
    let arr = new Array(-1); // RangeError

*/