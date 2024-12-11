// ----------- Class Inheritance ---------

// Class Inheritance
// Inheriting from a parent class using extends
// The super keyword to call parent class methods and constructor
// Method overriding in child classes
// Inheriting properties and methods in subclasses









/*

Class inheritance in JavaScript allows SubClass can inherit methods and properties from a Parent Class.

We use extends keyword to create a SubClass.

super() function : 
    super(parameter) : Used to call the parent class’s constructor. 
    super.methodName(): Used to call a method from the parent class.

*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(`Name:${this.name} \nAge: ${this.age}`);
    }
}

class Developer extends Person {
    constructor(name, age, role) {
        super(name, age);  // Call the parent class's constructor
        this.role = role;
    }

    getRole() {
        console.log(`Role : ${this.role}`);
    }
}

const sde = new Developer("SSB", 22, "Web Developer");
sde.display();
sde.getRole();

// Output:
// Name:SSB 
// Age: 22
// Role : Web Developer










// --- Method Overriding in Child Classes ---
/*

Method overriding occurs when a child class defines a method with the same name as a method in its parent class. 
This is useful to child class to provide its own implementation while optionally calling the parent's version using super.

*/


class Animal {
	speak() {
		console.log("Animal makes a sound.");
	}
}

class Dog extends Animal {
	speak() {
        super.speak(); // Call the parent method
		console.log("Dog barks."); // Overrides parent method
	}
}

const dog = new Dog();
dog.speak(); 
// Output :
// Animal makes a sound.
// Dog barks
  