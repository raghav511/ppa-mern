const addTask = () => {
  const task = document.getElementById("add-task");
  if (task.value != "") {
    const taskList = document.getElementById("task-list");
    const listItem = document.createElement("li");
    listItem.className = "task-item";
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.className = "edit-btn";
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete-btn";
    listItem.innerText = task.value;
    taskList.append(listItem, editBtn, deleteBtn);
  }
};
