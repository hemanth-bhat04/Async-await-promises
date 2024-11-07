document.addEventListener('DOMContentLoaded', function() {
    getUsers();
});

function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            const userTable = document.getElementById('userTable');
            userTable.innerHTML = '';
            data.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${user.id}</td><td>${user.name}</td><td>${user.email}</td>`;
                userTable.appendChild(row);
            });
        })
        .catch(error => console.error('Error occurred:', error));
}

function addUser() {
    const newUser = { name: 'New User', email: 'newuser@example.com' };
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(data => {
        getUsers(); // Refresh the user list
    })
    .catch(error => console.error('Error occurred:', error));
}

function updateUser() {
    const updatedUser = { name: 'Updated User', email: 'updateduser@example.com' };
    fetch('https://jsonplaceholder.typicode.com/users/1', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedUser)
    })
    .then(response => response.json())
    .then(data => {
        getUsers(); // Refresh the user list
    })
    .catch(error => console.error('Error occurred:', error));
}

function deleteUser() {
    const userId = 1; // Example user ID to delete
    fetch('https://jsonplaceholder.typicode.com/users/' + userId, {
        method: 'DELETE'
    })
    .then(response => {
        getUsers(); // Refresh the user list
    })
    .catch(error => console.error('Error occurred:', error));
}
