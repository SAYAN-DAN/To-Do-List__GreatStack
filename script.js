const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask() {
  // Check if the inputBox (presumably an input field) is empty.
  if (inputBox.value === "") {
    // If it's empty, show an alert to inform the user to write something.
    alert("You must write something!");
  } else {
    // If the inputBox is not empty:
    
    // Create a new <li> element.
    let li = document.createElement("li");
    
    // Set the inner HTML of the <li> element to the value of the inputBox.
    li.innerHTML = inputBox.value;
    
    // Append the newly created <li> element to the listContainer.
    listContainer.appendChild(li);

    // Create a new <span> element.
    let span = document.createElement("span");
    
    // Set the inner HTML of the <span> element to the "×" character (likely for deletion).
    span.innerHTML = "\u00d7";
    
    // Append the <span> element as a child of the <li> element.
    li.appendChild(span);
  }
  
  // Clear the inputBox after adding the task.
  inputBox.value = "";
  
  // Call the saveData function to save the updated task list.
  saveData();
}


listContainer.addEventListener(
  "click",
  function (a) {
    // This function is the event handler for the "click" event on the list container.

    // Check if the clicked element (a.target) is an "LI" (list item) element.
    if (a.target.tagName === "LI") {
      // If the clicked element is an "LI" element, toggle the "checked" class on it.
      a.target.classList.toggle("checked");

      // Call the "saveData" function to save the updated data, possibly to a backend or local storage.
      saveData();
    }
    // Check if the clicked element (a.target) is a "SPAN" element.
    else if (a.target.tagName === "SPAN") {
      // If the clicked element is a "SPAN" element, remove its parent (which is likely an "LI" element).
      a.target.parentElement.remove();

      // Call the "saveData" function to save the updated data, possibly to a backend or local storage.
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
