// ----------------- callBack and callBack Hell or Pyramid of Doom -------------------


/*

A callback is a function that is passed as an argument to another function and is executed after the completion of asynchronous task.

why use?
callBack handle the result after the completion of asynchronous task.

When we have multiple nested callbacks. then this is called as CallBack Hell.
CallBack Hell also called as Pyramid of Doom.

Promise and Async/Await are simple way to handle Asynchronous Operation as compared to Callbacks.


*/



// fetchData is asynchronous function.
// asynchronous task (e.g., setTimeout)
function fetchData(callback) {
    setTimeout(() => {
      let data = "Hello, World!";
      // Call the callback function with the result after 2 seconds
      callback(data);
    }, 2000);
  }
  
  // Define the callback function
  function displayData(data) {
    console.log("Received data:", data);
  }
  
  // Call fetchData, passing displayData as the callback
  fetchData(displayData);
  