const inputElement = document.querySelector("#input-element");
const listContainer = document.querySelector("#list-container");
let listArray = [];
let listFromStorage = JSON.parse(localStorage.getItem("tasks"));
if (listFromStorage) {
  listArray = listFromStorage;
  renderItems();
}

function addTask() {
  listArray.push(inputElement.value);
  inputElement.value = "";
  localStorage.setItem("tasks", JSON.stringify(listArray));
  renderItems();
}

function renderItems() {
  let itemsList = "";
  for (let i = 0; i < listArray.length; i++) {
    itemsList += `<li> ${listArray[i]}</li>`;
  }
  listContainer.innerHTML = itemsList;
}

const addButton = document.querySelector("#add-item");
addButton.addEventListener("click", addTask);
