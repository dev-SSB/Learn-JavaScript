// ---------- async await  -----------

/*

async and await are syntactic sugar built on top of Promises.

It is used kto write asynchronous code that looks and behaves more 
like synchronous code



async Keyword: A function declared with the async keyword always returns a Promise. Inside an async function, you can use the await keyword.



await Keyword: The await keyword can only be used inside async functions. 

It pauses the execution of the function until the Promise is resolved or rejected, and then returns Promise Object.

If the Promise is rejected, await throws an error, which can be handled with a try/catch block.




*/






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
consumePromise4(); 










// -------- ----------
function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data fetched!");
      }, 2000);
    });
}

async function getData() {
    try {
      const result = await fetchData();  // Await the fetchData() Promise 
      console.log(result);  // Logs the resolved value
    } catch (error) {
      console.log("Error:", error);  // Handles any rejection or error
    }
}

// Call
getData();











// -------- Multiple await Calls ---------

function fetchData1() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Data 1 fetched!"), 1000);
    });
}
  
function fetchData2() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Data 2 fetched!"), 1000);
    });
}

async function getData() {
    const data1 = await fetchData1();  // Wait for Data 1
    console.log(data1);
    
    const data2 = await fetchData2();  // Wait for Data 2
    console.log(data2);
}

// Call
getData();











// ----- Promise.all([p1,p2]) ------
// Promise.all() waits for both Promises to resolve, and then results will contain an array of their resolved values.


function fetchData1() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Data 1 fetched!"), 1000);
    });
}
  
function fetchData2() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Data 2 fetched!"), 1000);
    });
}

async function getData() {
    const promise1 = fetchData1();  // Starts fetching Data 1
    const promise2 = fetchData2();  // Starts fetching Data 2
  
    const results = await Promise.all([promise1, promise2]);  // Wait for both to complete
    console.log(results);  // Logs both results
}
  
getData();
  