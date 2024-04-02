let todoList = JSON.parse(localStorage.getItem("todoList")) || [
  { item: "", dueDate: "" }
];
displayItems();

function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let dateElement = document.querySelector("#todo-date");
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({ item: todoItem, dueDate: todoDate });
  inputElement.value = "";
  dateElement.value = "";

  localStorage.setItem("todoList", JSON.stringify(todoList));
  displayItems();
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  localStorage.setItem("todoList", JSON.stringify(todoList));
  displayItems();
}

function displayItems() {
  let conatinerElement = document.querySelector(".todo-container");
  let newHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    let item = todoList[i].item;
    let dueDate = todoList[i].dueDate;
    //let {item, dueDate} = todoList[i]   ---shorthand of above statement
    newHTML += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class="btn-delete" onclick="deleteTodo(${i})">Delete</button>
      `;
  }
  conatinerElement.innerHTML = newHTML;
}
