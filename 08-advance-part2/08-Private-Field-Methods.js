// -------- Private Fields and Methods ---------

/*
Private Fields and Methods (ES2022)
Using # to define private fields and methods
Accessing and modifying private fields within the class
Why use private fields in OOP?
*/












// ---  ---
/*

Private fields are defined using the # prefix in the class body.

Private fields and methods can only be accessed or modified within the class where they are defined.

Private methods can be used internally to support public methods without exposing them.

*/


class Person {
    #name; // Private field

    constructor(name) {
        this.#name = name; // Initialize the private field
    }

    getName() {
        return this.#name; // Access the private field
    }

    setName(newName) {
        this.#name = newName; // Modify the private field
    }
}

const person = new Person('John');
console.log(person.getName()); // John
person.setName('Alice');
console.log(person.getName()); // Alice





// --- Why Use Private Fields in OOP? ---
/*

1) Encapsulation
    Encapsulation supports the abstraction principle, where you expose only the necessary details to the user of the class and hide the complex internal workings.
2) Security:
    Prevents accidental or malicious modification of important data.
3) Control Over Access:
    We can define public getter and setter methods that control how the private data is accessed and modified. 
*/



class Calculator {
    #validateInput(value) { // Private method
        if (typeof value !== "number") {
            throw new Error("Invalid input: Must be a number.");
        }
    }

    add(a, b) {
        this.#validateInput(a);
        this.#validateInput(b);
        return a + b;
    }

    subtract(a, b) {
        this.#validateInput(a);
        this.#validateInput(b);
        return a - b;
    }
}

const calc = new Calculator();
console.log(calc.add(10, 5)); // 15
console.log(calc.subtract(10, 5)); // 5

// Attempting to call private method will fail
// calc.#validateInput(10); // SyntaxError: Private field '#validateInput' must be declared in an enclosing class
