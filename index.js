const inputElement = document.querySelector("#input-element");
const listContainer = document.querySelector("#list-container");
const listArray = [];

function addTask() {
  listArray.push(inputElement.value);
  inputElement.value = "";
}

const addButton = document.querySelector("#add-item");
addButton.addEventListener("click", addTask);
