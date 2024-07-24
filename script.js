const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

function addTask() {
  if (taskInput.value === '') {
    alert("Please write something!");
  } else {
    let listItem = document.createElement("li");
    listItem.innerHTML = taskInput.value;
    taskList.appendChild(listItem);
    let deleteSpan = document.createElement("span");
    deleteSpan.innerHTML = "\u00d7";
    listItem.appendChild(deleteSpan);
  }
  taskInput.value = "";
  saveTasks();
}

taskList.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    saveTasks();
  } else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
    saveTasks();
  }
}, false);

function saveTasks() {
  localStorage.setItem("tasks", taskList.innerHTML);
}

function displayTasks() {
  taskList.innerHTML = localStorage.getItem("tasks");
}

displayTasks();
