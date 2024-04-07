
// We need to get the data that is present in input 
// We need to run some code whenever user click on add button
// We need to access the add button 
// we need to add a event lister 

// Access add button from dom 
const addButton = document.getElementById("add-btn");
const deleteButtons = Array.from(document.getElementsByClassName("delBtn"));
const ulElement = document.getElementById("list-ul");


addButton.addEventListener("click", handleAddButtonOnClick);

deleteButtons.forEach(function (deleteBtn) {
    console.log("Delete Btn", deleteBtn);
    deleteBtn.addEventListener('click', handleDelete)
})

ulElement.addEventListener("click", function (event) {
    console.log(
      "UL clicked",
      event.target.tagName,
      event.target.classList,
      event.target.className
    );


    // if(event.target.className === 'delBtn') {
    //     event.target.parentElement.remove();
    // }
});

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

li.onclick = function (event) {
    console.log("Li is clicked", event.target);
};

 // we need to add the input data in li element
 //li.textContent = inputData;
   
// They are prone to Attack 
// Dangerosly set inner html 
const innerHtmlOfLi = `<span> ${inputData} </span> <button onclick="handleDelete(event)" class= "delBtn"> Delete </button>`;

li.innerHTML = innerHtmlOfLi;
 // span 
 // delete
 // we need to insert the li in ul 

 listUL.appendChild(li);

 nameInputElement.value = "";

}


// function handleLiClick (event) {
//     console.log("Li was clicked", event);
// }
function handleDelete (event) {
  console.log("Handle Delete clicked", event.target);
  event.stopPropagation();
//   const parenLiElement = event.target.parentElement;
//   parenLiElement.remove();
}