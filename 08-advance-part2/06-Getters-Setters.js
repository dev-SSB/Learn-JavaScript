// ------- Getters and Setters ---------
/*
Getters and Setters
What are getters and setters?
Defining getters and setters in a class
Using getters to retrieve values
Using setters to modify values
Why use getters and setters?
*/












// ---  ---
/*

Getters and setters are methods that provide controlled access to the properties of an object and keep the internal implementation hidden.

We can define getters and setters in a class using the get and set keywords.
    1) Getter (get):
        Retrieves the value of a property.
        Acts like a property but is implemented as a method.
        Use the syntax of accessing a property (no parentheses).
    2) Setter (set):
        Modifies the value of a property.
        We can validate or process data before setting the value.

*/

class BankAccount {
    constructor(owner, balance) {
        this._owner = owner;
        this._balance = balance;
    }

    // Getter for balance
    get balance() {
        return `Your balance is ${this._balance.toFixed(2)}`;
    }

    // Setter for balance
    set balance(amount) {
        if (amount >= 0) {
            this._balance = amount;
        } else {
            console.error("Balance cannot be negative!");
        }
    }

    deposit(amount) {
        this._balance = this._balance + amount;
    }

    withdraw(amount) {
        if (amount > this._balance) {
            console.error("Insufficient funds!");
        } else {
            this._balance = this._balance - amount;
        }
    }
}

const account = new BankAccount("John", 500);

// Using the getter to access properties
console.log(account.balance);

// Using the setter to modify properties
account.balance = 1000;

// Using the getter to access properties
console.log(account.balance);

account.deposit(200);
console.log(account.balance);

account.withdraw(2000);

// Output
// Your balance is 500.00
// Your balance is 1000.00
// Your balance is 1200.00
// Insufficient funds!










// ---- Why Use Getters and Setters? ------
/*

1) Encapsulation:
    Hide the internal details of the class.
    Protect data from being accessed or modified directly.

2) Validation:
    Ensure that property values meet certain criteria before being set.

3) Security:
    Getters and setters provide a layer of control over sensitive data.

*/