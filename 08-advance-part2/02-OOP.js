// --- OOP ---
/*
Understanding Object-Oriented Programming (OOP) Basics
What is OOP?
Four Pillars of OOP:
Encapsulation
Abstraction
Inheritance
Polymorphism
Objects vs. Classes in JavaScript
*/
















/*

Object-Oriented Programming (OOP) organizes code using objects and classes and make the code reusable, extensible, and easier to maintain.

The four pillars of OOP are Encapsulation, Abstraction, Inheritance, and Polymorphism.

*/







// --- Encapsulation ---
/*

Class is a way of performing encapsulation.

Encapsulation is the process of binding and hiding of State & Behavior.
State means attribute and values.
Behavior means function or methods.

Hide the state and provide controlled access to read or modify the state through getter and setter method.

Encapsulation Achieved using closures or private fields (#).
*/

class BankAccount {
    #balance; // Private field

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(100);
account.deposit(50);
console.log(account.getBalance()); // 150
// console.log(account.#balance); // Error: Private field








// --- Abstraction ----
/*

Abstraction means selective ignorance. We only select particular Data & ignore other data.

At the end of Abstraction proess we get state of an object. i.e attrbute and values.

Abstraction provides a way to hide the Implementation Detail and expose only important information to the outside user.

*/

class Car {
    start() {
        console.log("Car started.");
    }

    stop() {
        console.log("Car stopped.");
    }
}

class ElectricCar extends Car {
    start() {
        console.log("Electric car started silently.");
    }
}

const myCar = new ElectricCar();
myCar.start(); // Output: Electric car started silently.

// Here, the internal workings of how the car starts or stops are abstracted from the user. The user only needs to call start() or stop() to interact with the car.










// --- Inheritance ---
/*

Reuse of already defined classes with Is-A Relationship called as Inheritance.

In inheritance one class (child class) can inherit the properties and methods of another class (parent class).

Inheritance achieved using the extends keyword in JavaScript.

Inheritance helps to reuse of code and establish a relationship between classes.

*/

class Animal {
    speak() {
        console.log("Animal speaks");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

const dog = new Dog();
dog.speak(); // Dog barks









// --- Polymorphism ---
/*

Polymorphism allows objects of different classes to be treated as objects of a common superclass.

It also enables the same method to behave differently based on the object.

Polymorphism achieved using method overriding and dynamic method calls.

*/


class Shape {
    draw() {
        console.log("Drawing a shape");
    }
}

class Circle extends Shape {
    draw() {
        console.log("Drawing a circle");
    }
}

class Square extends Shape {
    draw() {
        console.log("Drawing a square");
    }
}

const shapes = [new Circle(), new Square(), new Shape()];

shapes.forEach((shape) => shape.draw());
// Output:
// Drawing a circle
// Drawing a square
// Drawing a shape






// ----  Objects ---

/*

An object is a collection of properties (key-value pairs) and methods. It represents an instance in JavaScript.

*/



// Class
/*

A class is a blueprint for creating objects. It defines properties and methods that an object will have.

*/