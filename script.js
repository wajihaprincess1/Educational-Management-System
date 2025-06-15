document.addEventListener('DOMContentLoaded', (event) => {
    // Add event listeners if needed after the DOM is loaded
});

function addTask() {
    const userName = document.getElementById('userName').value;
    const departmentName = document.getElementById('departmentName').value;
    const userType = document.getElementById('userType').value;
    const taskInput = document.getElementById('taskInput').value;

    if (userName && departmentName && userType && taskInput) {
        const taskList = document.getElementById('taskList');

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = `${taskInput} - ${userName} (${userType}, ${departmentName})`;

        // Create a delete button and append it to the list item
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = () => {
            taskList.removeChild(li);
        };

        li.appendChild(deleteButton);
        taskList.appendChild(li);

        // Clear the input fields after adding the task
        document.getElementById('userName').value = '';
        document.getElementById('departmentName').value = '';
        document.getElementById('userType').value = 'admin';
        document.getElementById('taskInput').value = '';
    } else {
        alert('Please fill in all fields');
    }
}
