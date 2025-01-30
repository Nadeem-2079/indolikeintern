// script.js
document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === "") return; // Prevent adding empty tasks

  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');
  
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button class="delete">Delete</button>
  `;

  // Mark task as completed when clicked
  li.addEventListener('click', function() {
    li.classList.toggle('completed');
  });

  // Delete task
  const deleteButton = li.querySelector('.delete');
  deleteButton.addEventListener('click', function(e) {
    e.stopPropagation();
    taskList.removeChild(li);
  });

  taskList.appendChild(li);
  taskInput.value = ''; // Clear input field
}
