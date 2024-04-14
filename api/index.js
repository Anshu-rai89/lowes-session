
// function printData(data) {
//     console.log(data);
// }

// function getData() {
//     const fetchPromise = fetch("https://jsonplaceholder.typicode.com/todos/1")
//     console.log("fetchPromise", fetchPromise);

//     fetchPromise.then((response)=> {
//         console.log("Promise success", response);
//         const jsonPromise = response.json();
//         return jsonPromise;
    
//     }).then((data)=> console.log("JSON data", data)).catch(error=> {console.log("Error", error)});
// }

// getData();

var flag = true;
async function fetchData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const jsonData = await response.json();
    flag = false;
    console.log("JSON data", jsonData);
}



fetchData();
console.log("After Fetching data");

while(flag) {
    console.log("heyy");
}
