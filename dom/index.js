
// We need to get the data that is present in input 
// We need to run some code whenever user click on add button
// We need to access the add button 
// we need to add a event lister 

// Access add button from dom 
const addButton = document.getElementById("add-btn");


addButton.addEventListener("click", handleAddButtonOnClick);

function handleAddButtonOnClick () {
 console.log("Click happend");

 // We need to get the data present in input 
 const nameInputElement = document.getElementById("name-inp");

 // we need to access the input from dom

 const inputData = nameInputElement.value;

 console.log("Input data", inputData);

 if(inputData == "") {
    alert("Input data is empty");
    return;
 }

 // We need to insert this data in our list 

 // We need to find the ul element from dom

 const listUL = document.getElementById("list-ul");
 // we need to create a li element 

const li = document.createElement('li');
 // we need to add the input data in li element
 li.textContent = inputData;
   
 // we need to insert the li in ul 

 listUL.appendChild(li);

 nameInputElement.value = "";

}