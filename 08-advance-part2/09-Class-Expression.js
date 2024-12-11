// ------ Class Expressions ---------
/*
Class Expressions
Class declarations vs class expressions
Creating anonymous classes using class expressions
Assigning classes to variables
*/







// Class declarations
/*

Class expressions are an alternative way to define classes in JavaScript.

1) Class Declarations
    Use the class keyword to declare a class.
    Must have a name and cannot be anonymous.
    Hoisted but not initialized, meaning they can only be used after their declaration.

2)  Class Expressions
    Also use the class keyword but are defined inline as part of an expression.
    Can be either anonymous (no class name) or named.
    Not hoisted, meaning they must be defined before use.

An anonymous class does not have a name and is often assigned to a variable or used inline.

*/

// Example of Class Declaration
class MyClass1 {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, ${this.name}`);
    }
}
const obj1 = new MyClass1("Alice");
obj1.greet(); // Hello, Alice


// Example of Class Expression
const MyClass2 = class {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, ${this.name}`);
    }
};

const obj2 = new MyClass2("Bob");
obj2.greet(); // Hello, Bob






