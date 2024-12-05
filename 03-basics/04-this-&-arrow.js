// --------------------------------- this ---------------------------------------

// this refer to the current object or context


const user = {
    username:"SSB",
    price:999,

    // Method
    welcomeMessage: function(){
        console.log( `${this.username} , Welcome to BroadCast` );
        console.log(this);
        /* Output of this
            {   
                username: 'SSB',
                price: 999,
                welcomeMessage: [Function: welcomeMessage]
            }
        */
    }
}

// user.welcomeMessage();
/*

SSB , Welcome to BroadCast
{
  username: 'SSB',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}

*/

user.username = "Sunny"
// user.welcomeMessage();
/* 

Sunny , Welcome to BroadCast
{
  username: 'Sunny',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}

*/






// Here this refer to Global Object or undefined in strict Mode.
// Global Object means Window.


// Regular Function
// Not Work ---> undefined
// function talk(){
//     let userName = "SSB";
//     console.log(this.userName);
// }
// talk()


// Function Expression
// Not Work ---> undefined
// const talk = function(){
//     let userName = "SSB";
//     console.log(this.userName);
// }
// talk()


// Basic Fat Arrow Function
// Not Work ---> undefined
const talk2 = () => {
    let userName = "SSB";
    console.log(this.userName);
}
// talk2()



/*
How to Make It Work
If you want this.userName to refer to a property of an object, you can define talk as a method of that object:

Context of this: Inside the talk method, this refers to the person object because the 
method is being called as a property of that object.
*/
const person = {
    userName: "SSB",
    talk: function() {
        console.log(this.userName);
    }
};

// person.talk(); // Output: "SSB"



// --------------------------------- Arrow Function ---------------------------------------




// Explicit Return

const addTwo = (n1,n2) => {
    return n1+n2;
}
// console.log( addTwo(2,3) );
// 5



// Implicit Return

const sum = (num1,num2) => num1+num2;
// console.log( sum(9,3) );
// 12


// Implicit Return
const add = (num1,num2) => ( num1+num2 );
// console.log( add(9,9) );
// 18



// Object Implicit return

const obj = () => ( {name:"SSB",age:23} );
// console.log( obj() );
// {name:"SSB",age:23}


