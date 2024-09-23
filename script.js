// Get references to the input field, add button, task list, and progress bar
const taskInput = document.getElementById('new-tasks');
const addTasksButton = document.getElementById('add-tasks');
const taskList = document.getElementById('task-list');
const progressBar = document.getElementById('progress');
const progressPercentage = document.getElementById('progress-percentage');

// Function to update the progress bar
function updateProgressBar() {
    const totalTasks = taskList.getElementsByTagName('li').length;
    const completedTasks = taskList.querySelectorAll('input[type="checkbox"]:checked').length;

    // Calculate the percentage of tasks completed
    const progressPercentageValue = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

    // Update the width of the progress bar to reflect the percentage
    progressBar.style.width = `${progressPercentageValue}%`;

    // Update the percentage text
    progressPercentage.textContent = `${Math.round(progressPercentageValue)}%`;
}

// Function to add multiple tasks from the pasted input
function addTasks() {
    const taskText = taskInput.value.trim();  // Get task input value and trim whitespace

    if (taskText !== '') {
        const tasks = taskText.split('\n'); // Split the text by line breaks

        tasks.forEach(task => {
            if (task.trim() !== '') {
                // Create a new list item for each task
                const newTaskItem = document.createElement('li');

                // Create a checkbox for each task
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';

                // Update progress bar when the checkbox is toggled
                checkbox.addEventListener('change', updateProgressBar);

                // Append the checkbox and task text to the list item
                newTaskItem.appendChild(checkbox);
                newTaskItem.appendChild(document.createTextNode(` ${task.trim()}`));

                // Add the new task to the task list
                taskList.appendChild(newTaskItem);
            }
        });

        // Clear the input field
        taskInput.value = '';

        // Update the progress bar
        updateProgressBar();
    }
}

// Add event listener to the "Add Tasks" button
addTasksButton.addEventListener('click', addTasks);


