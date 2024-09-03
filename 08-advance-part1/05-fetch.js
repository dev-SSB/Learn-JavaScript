// ---------------  Fetch  --------------------







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