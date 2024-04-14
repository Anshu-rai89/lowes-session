

//We want to print hello world after 5 second



const promise1 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        reject("Error in code");
    }, 5000)
})

//console.log('I am running promise', promise1);

//promise1.then((data)=> console.log(data)).catch((data)=> console.log("error",data));


const fetchDataPromise = new Promise((resolve, reject)=> {
   function fetchDataFromServer() {
    setTimeout(()=> {
        resolve(JSON.stringify({user: {email: "abc@gmail.com"}}))
    },1000)
   }
   
   fetchDataFromServer();
})

function parseData(data) {
  const parsedData = JSON.parse(data);
  return parsedData;
}

function renderData(data) {
    console.log("Data is rendered", data)
    return null;
}

// Promise chaining
fetchDataPromise.then(parseData).then(renderData).catch(error=> console.log("Error", error));
// How can we fetch data from API using Promises 


// Can we actually execute  a async code in a sync way 

// Async await 



