// --- Constructor Function ---
/*
Constructor Functions
What is a constructor function?
Creating objects with constructor functions
Using the new keyword
Adding methods to constructor functions
The this keyword inside constructor functions
*/









// --- What is a Constructor Function? ---
/*

A constructor function in JavaScript is a special type of function that is used to create and initialize objects. 

Constructor functions help create objects with similar properties and methods.

1) Constructor functions are regular functions.
2) They are invoked with the new keyword.
3) Names start with an uppercase letter to differentiate them from regular functions.

*/






// --- Creating Objects with Constructor Functions ---
/*

When you use new Keyword :
1) new empty object created.
2) this to refer to the new object within the constructor function.
3) Links the new object to the prototype of the constructor function.
4) Returns the new object.
*/






// --- Adding Methods to Constructor Functions ----
/*

Methods can be added to constructor functions in two ways:
1) Directly in the constructor function
    Every object gets its own copy of the method, which can consume memory.

2) Using the prototype 
    Methods added to the prototype constructor function are shared across all objects created by constructor function, reducing memory usage.
*/

function Car(make, model) {
    this.make = make;
    this.model = model;

    // Directly in the constructor function
    this.start1 = function () {
        console.log(`${this.make} ${this.model} is starting...`);
    };
}

// Add method to prototype
Car.prototype.start2 = function () {
    console.log(`${this.make} ${this.model} is starting...`);
};

// Creating an instance
const car1 = new Car("Toyota", "Camry");
car1.start1(); // Toyota Camry is starting...
car1.start2(); // Toyota Camry is starting...









// --- this Keyword Inside Constructor Functions ---
/*

Inside a constructor function, the this keyword refers to the newly created object. It is used to assign properties and methods to the object.

*/

function NewCar(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;

    // Adding a method using 'this'
    this.getCarDetails = function () {
        return `${this.year} ${this.make} ${this.model}`;
    };
}


const car3 = new NewCar("Ford", "Mustang", 2023);
console.log(car3.getCarDetails()); 
// Output: 
// 2023 Ford Mustang
