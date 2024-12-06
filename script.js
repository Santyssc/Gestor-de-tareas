// Seleccionar los elementos
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.querySelector('#addTaskButton');
const taskList = document.querySelector('#taskList');
const completedTaskList = document.querySelector('#completedTaskList');

// Agregar tarea
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert("Por favor, agrega una tarea");
        return;
    }

    // Crear tarea dentro de un li
    const taskItem = document.createElement('li');
    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;

    // Botón de marcar como completada
    const completeButton = document.createElement('button');
    completeButton.textContent = '✔';
    completeButton.classList.add('complete-btn');
    completeButton.addEventListener('click', () => completeTask(taskItem, taskTextSpan.textContent));

    // Botón de eliminar
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '🗑';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', () => deleteTask(taskItem));

    // Añadir elementos al li
    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);

    // Agregar la tarea a la lista principal
    taskList.appendChild(taskItem);

    // Limpiar input
    taskInput.value = '';
}

// Completar tarea
function completeTask(taskItem, taskText) {
    // Eliminar de la lista principal
    taskItem.remove();

    // Crear elemento en la lista de completadas
    const completedItem = document.createElement('li');
    completedItem.textContent = taskText;

    // Botón de eliminar en completadas
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '🗑';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', () => deleteTask(completedItem));

    // Añadir a la lista de completadas
    completedItem.appendChild(deleteButton);
    completedTaskList.appendChild(completedItem);
}

// Eliminar tarea
function deleteTask(taskItem) {
    taskItem.remove();
}

// Evento del botón de agregar
addTaskButton.addEventListener('click', addTask);
