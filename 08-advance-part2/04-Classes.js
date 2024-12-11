// ------ Class -----
/*
Introduction to Classes in JavaScript (ES6 Classes)
What are classes in JavaScript?
Defining a class using the class keyword
Constructor method in a class
Class properties and methods
Creating objects from a class (instances)
The new keyword with classes
this keyword in class methods
*/










// Introduction to Classes in JavaScript (ES6 Classes)
// What are classes in JavaScript?
/*

Javascript is a prototyped based language.

Classes in JS are syntactic sugar over the existing prototype-based inheritance.

Class is a blueprint for creating objects with predefined properties and methods.
Class encapsulate data (properties) and behavior (methods) inside Objects.

*/








// Defining a class using the class keyword
// Constructor method in a class
// Class properties and methods
/*

The class keyword is used to define a class. It can include:
    1) Constructor method.
    2) Other methods (both static and instance methods).

1) Constructor method :
    Constructor method is a special method in class used to initialize object properties.

    It is automatically called when we create a new instance of the class using the new keyword.

    A class can have only one constructor.

2) Other methods :
    Instance Methods: Operate on an instance of the class.

    Static Methods: Defined using the static keyword and belong to the class itself (not its instances).

*/

class Person {
    // Constructor method
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Instance Method
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    // Static Method
    static getName() {
        return this.name;
    }
}

const p1 = new Person("SSB", 18);
// Instance Method
p1.greet();
// Static Method
console.log(Person.getName())

// Output:
// Hello, my name is SSB and I am 18 years old.
// Person













// Creating objects from a class (instances)
// The new keyword with classes
// this keyword in class methods
/*

Objects created from a class are called instances.

When we use new Keyword with Classes:
1) new empty object is created.
2) constructor method is automatically called to initialize the object's    properties.
3) Links the prototype of the new object to the prototype of class.
4) Returns the new object.


this keyword Inside Class: 
1) Inside the constructor method : 
    this is used to refer to the newly created object.
2) Inside other methods : 
    this refers to the instance of the class. 
    It is used to access the properties and methods of the current instance.
*/










// Class Inheritance
/*

SubClass can inherit methods and properties from a Parent Class.

We use extends keyword to create a SubClass and the super() function to call the parent class’s constructor.

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
