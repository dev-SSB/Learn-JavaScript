// --------- class based getter and setter ---------
class User1{
    constructor(username,age){
        this.username=username;
        this.age=age;
    }
    // Getter
    get username(){
        return this._username.toUpperCase();
    }
    // setter
    set username(value){
        this._username=value;
    }
}

// const SSB1 = new User1("SSB",22);
// console.log(SSB1.username);





// --------- Function based getter and setter ---------
function User2(username,age){
    this._username=username;
    this._age=age;

    Object.defineProperty(this,"username",{
        // Getter
        get: function(){
            return this._username.toUpperCase();
        },
        // setter
        set: function(value){
            this._username=value;
        }
    })
}

// const SSB2 = new User2("SSB",22);
// console.log(SSB2.username);






// --------- Object based getter and setter ---------
const User3 = {
    _username: "SSB",
    _age: "25",

    get username() {
        return this._username;
    },

    set username(value) {
        this._username = value;
    }
};

// const SSB3 = Object.create(User3);
// console.log(SSB3.username);

// SSB3.username = "PK";
// console.log(SSB3.username);
