//--- Static Methods and Properties ---
/*
Static Methods and Properties
What are static methods and properties?
Defining static methods and properties
Accessing static members from the class itself, not an instance
*/













// 
/*

Static methods and properties are features of a class that belong to the class itself rather than instances of the class. 

Use the static keyword to define static methods or properties in a class.

Static members are accessed using the class name, not through an instance.

Static methods cannot access this.

Static methods and properties cannot directly interact with non-static properties or methods.
*/


class MathUtils {
    constructor(NonStaticProperty) {
        this.NonStaticProperty = NonStaticProperty;
    }

    static pi = 3.14159; // Static property

    static calculateArea(radius) {
        return this.pi * radius * radius; // Access static property
    }

    // static block do not have access to Non Static Property & Methods.
    static accessNonStaticProperty() {
        console.log(this.NonStaticProperty); // undefined
    }

}

// Accessing static property
console.log(MathUtils.pi); // 3.14159

// Calling static method
console.log(MathUtils.calculateArea(5)); // 78.53975

//  Static methods and properties cannot directly interact with non-static properties or methods.
const ex = new MathUtils(12);
MathUtils.accessNonStaticProperty();
