document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('taskList');
    const newTaskInput = document.getElementById('newTask');
    const addTaskButton = document.getElementById('addTask');
    const removeTaskButton = document.getElementById('removeTask');

    addTaskButton.addEventListener('click', () => {
        const newTask = newTaskInput.value;
        if (newTask) {
            const listItem = document.createElement('li');
            listItem.textContent = newTask;
            taskList.appendChild(listItem);
            newTaskInput.value = '';


        }
    });

    removeTaskButton.addEventListener('click', () => {
        const selectedTask = taskList.querySelector('li:last-child');
        if (selectedTask) {
            taskList.removeChild(selectedTask);
        }
    });
});