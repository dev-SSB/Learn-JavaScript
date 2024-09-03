// ----------- Promise, async await, fetch(return promise) ------------

/*

The Promise Object represents the eventual completion or failure of an asynchronous operation
and its resulting values

A promise is in one of the these states:
    pending
    fulfilled
    rejected

*/

// promise & async await ---> Nearly Same 













// ------ Promise 1 ------
// resolve() and .then() are directly connected

const promise1 = new Promise( (resolve,rejected) => {
    // Do an async Task : DB calls, Cyptography, Network calls

    setTimeout( () => {
        // console.log("Async Task1 Completed");
        resolve();
    } ,1000)
});

promise1.then( () => {
    // console.log("Promise1 Consumed")
});













// ------ Promise 1 Another Way ------

new Promise( (resolve,rejected) => {
    setTimeout( () => {
        // console.log("Async Task1 Completed");
        resolve();
    } ,1000)
}).then( () =>{
    // console.log("Promise1 Consumed")
})















// ------ Promise 2: Data Consumtion and Value ------


const promise2 = new Promise( (resolve,rejected) => {
    setTimeout( () =>{
        // Send Data in Object
        resolve( {name:"SSB",email:"SSB@example.com"} ); 
        
    },1000);
} )

promise2.then( (data) => {
    // console.log(data);
} )















// ------ Promise 3: chainning, catch, finally ------

const promise3 = new Promise( (resolve,rejected) => {
    setTimeout( () => {
        // let error = false;
        let error = true;

        if(!error){
            resolve({username:"SSB",password:"123"});
        }
        else{
            rejected("Error : Occur");
        }
    }, 1000);
});

promise3
.then( (userData) => {
    // console.log(userData);
    return userData.username
})
.then( (name) => {
    // console.log(name);
})
.catch( (err) => {
    // console.log(err);
})
.finally( () => {
    // console.log("The Promise Resolved or Rejected");
    
})














// ------ Promise 4: async await  ------
// above promise 3 work same as Promise 4

const promise4 = new Promise( (resolve,rejected) => {
    setTimeout( () => {
        let error = false;
        // let error = true;

        if(!error){
            resolve({username:"Ayu",password:"123"});
        }
        else{
            rejected("Error : JS went Wrong");
        }
    }, 1000);
});

// 
async function consumePromise4() {
    try {
        const response = await promise4;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

// Call
// consumePromise4(); 














// ------ URL Data Fetch using async await  ------
// URL = https://jsonplaceholder.typicode.com/users
// fetch return promise object

async function userAllData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log("Error : ",error);
    }
}

// Call
// userAllData();














// ------ URL Data Fetch using .then().catch()  ------
// URL = https://jsonplaceholder.typicode.com/users
// Above Same Work using .then().catch()


fetch("https://jsonplaceholder.typicode.com/users")
.then( (response) => {
    return response.json();
})
.then( (data) => {
    // console.log(data);
})
.catch( (error) => {
    // console.log(error);
})