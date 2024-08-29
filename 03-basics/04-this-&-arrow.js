// --------------------------------- this ---------------------------------------

// this refer to the current context


const user = {
    username:"SSB",
    price:999,

    welcomeMessage:function(){
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

// user.username = "Sunny"
// user.welcomeMessage();
/* output

Sunny , Welcome to BroadCast
{
  username: 'Sunny',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}

*/



// Not Work ---> undefined
// function talk(){
//     let userName = "SSB";
//     console.log(this.userName);
// }
// talk()


// Not Work ---> undefined
// const talk = function(){
//     let userName = "SSB";
//     console.log(this.userName);
// }
// talk()



// Not Work ---> undefined
const talk2 = () => {
    let userName = "SSB";
    console.log(this.userName);
}
// talk2()







// --------------------------------- Arrow Function ---------------------------------------




// Explicit Return

const addTwo = (n1,n2) => {
    return n1+n2;
}
// console.log( addTwo(2,3) );




// Implicit Return

const sum = (num1,num2) => num1+num2;
// console.log( sum(9,3) );


// Implicit Return

const add = (num1,num2) => ( num1+num2 );
// console.log( add(9,9) );




// Object Implicit return

const obj = () => ( {name:"SSB",age:23} );
// console.log( obj() );



