const addTask = () => {
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");
  const task = taskInput.value;
  const li = document.createElement("li");
  li.innerText = task;
  taskList.appendChild(li);
};
