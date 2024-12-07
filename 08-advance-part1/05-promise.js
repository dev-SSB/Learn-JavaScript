// ----------- Promise, async await, fetch(return promise) ------------



// promise & async await ---> Nearly Same 


/*

The Promise Object represents completion or failure of an asynchronous operation
and its resulting values.

Promise and Async/Await are simple way to handle Asynchronous Operation as compared to Callbacks.

A Promise has three states:
    i) pending : Async Operation Not Completed.
    ii) fulfilled : Async Operation Completed and Promise has Result.
    iii) rejected : Async Operation Not Completed and Promise has Error.


We can create a Promise by passing callBack function to Promise Constructor.
CallBack Function takes two parameters:
    resolve() : Fullfilled the Promise.
    reject() : Reject the Promise.


We can Handle Promise using .then() and .catch() and finally() methods.
.then() is used to what to do When Promise is Fulfilled.
.catch() is used to what to do when Promise is Rejected.
.finally() Executed regardless of Promise Outcome. It is useful for cleanup Task.




*/


let myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
      resolve("Operation successful!");
    } 
    else {
      reject("Operation failed!");
    }
});
  
myPromise
.then((message) => {
    console.log(message); // "Operation successful!"
})
.catch((error) => {
    console.log(error); // If there was an error
})
.finally(() => {
    console.log("Operation completed."); // This will run regardless of success or failure
});
  








// -------- Chainning --------
/*

Chaining Promise ?
Promise has ability to chain multiple Asynchronous Operations.


*/


let fetchData = new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve("Data fetched!")
    }, 1000);
});
  
fetchData
.then((response) => {
    console.log(response); 

    // chaining
    return new Promise( (resolve,reject) => {
    setTimeout(() => resolve("Processing data..."), 1000);
    });
})
.then((response) => {
    console.log(response);
      
    return "Data processed!";
})
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.log("Error:", error);
});

// Output:
// Data fetched!
// Processing data...
// Data processed!












// ------ Promise 1 ------
// resolve() and .then() are directly connected

const promise1 = new Promise( (resolve,rejected) => {
    // Do an async Task : DB calls, Cyptography, Network calls

    setTimeout( () => {
        console.log("Async Task1 Completed");
        resolve();
    } ,1000)
});

promise1.then( () => {
    console.log("Promise1 Consumed")
});













// ------ Promise 1 Another Way ------

new Promise( (resolve,rejected) => {
    setTimeout( () => {
        console.log("Async Task1 Completed");
        resolve();
    } ,1000)
}).then( () =>{
    console.log("Promise1 Consumed")
})















// ------ Promise 2: Data Consumtion and Value ------


const promise2 = new Promise( (resolve,rejected) => {
    setTimeout( () =>{
        // Send Data in Object
        resolve( {name:"SSB",email:"SSB@example.com"} ); 
        
    },1000);
} )

promise2.then( (data) => {
    console.log(data);
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
    console.log(name);
})
.catch( (err) => {
    console.log(err);
})
.finally( () => {
    console.log("The Promise Resolved or Rejected");
    
})

