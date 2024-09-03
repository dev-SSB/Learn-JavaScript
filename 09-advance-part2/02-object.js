// ------  Object: Must See Images--------

/*
    Array ---------------------
                              ⬇️
    String   ---------->    Object ---------->  NULL
                              ⬆️ 
    Function ------------------


    this ---> means Current Context or Jis ne Call Kiya hai wo hai

*/





// Function is function and As Well As Object
function multiply(num){
    return num*5;
}
multiply.Power = 4;

// ---> 25
// console.log( multiply(5) );
// ---> 4
// console.log( multiply.Power );
// ---> { }
// console.log( multiply.prototype );





// Constructor Function
function createUser (uName,percentage){
    this.uName = uName;
    this.percentage = percentage;
};

// ProtoType Property
createUser.prototype.Increment = function(){
    this.percentage++;
};

createUser.prototype.printMe = function(){
    console.log(`Percentage is ${this.percentage}`);
};

// 
const user1 = new createUser("SSB",99);
const user2 = new createUser("Ayu",79);

user1.Increment();
user1.printMe();




// Read Images for Interview and Understand what happen when we use New Keyword