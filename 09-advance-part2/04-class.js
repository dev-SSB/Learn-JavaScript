// ---------- class & static keyword & Inheritance ---------





// ---- class & constructor ----

class User{
    // constructor
    constructor(userName,email,pass){
        this.userName = userName;
        this.email = email;
        this.pass = pass;
    }

    printMe(){
        console.log(`my Name is ${this.userName}`);
    }
};

// 
// const SSB = new User("Shiv","SSB@email.com",123);
// SSB.printMe();









// ---- Inheritance & Static Keyword ----


class Parent{
    // constructor
    constructor(userName){
        this.userName = userName;
    }

    printMe(){
        console.log(`Name is ${this.userName}`);
    }

    // Static Method Acess Not Available
    static staticMethod(){
        return `static method`;
    }
};


class Child extends Parent{
    // constructor
    constructor(userName,email,password){
        // super()
        super(userName)
        this.email = email;
        this.password = password;
    }
};

// 
const child1 = new Child("Ayu","email",121);
child1.printMe();

// ---> Error
// child1.staticMethod();

