
function fetchUsers() {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            const success = Math.random() > 0.8; 

            if (success) {
                
                const users = [
                    { id: 1, name: 'Hemanth Bhat', email: 'hb04@gmail.com' },
                    { id: 2, name: 'Ravi Kumar', email: 'ravi@gmail.com' },
                    { id: 3, name: 'Hanuman', email: 'ram@gmail.com' }
                ];
                resolve(users); 
            } else {
                reject('Failed to fetch user data.'); 
            }
        }, 1000); 
    });
}


function displayUsers(users) {
    const usersContainer = document.getElementById('users');
    usersContainer.innerHTML = ''; 

    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'col-md-4 mb-3'; 
        userDiv.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${user.name}</h5>
                    <p class="card-text">${user.email}</p>
                </div>
            </div>
        `;
        usersContainer.appendChild(userDiv);
    });
}

document.getElementById('fetchUsersBtn').addEventListener('click', () => {
    const usersContainer = document.getElementById('users');
    usersContainer.innerHTML = '<div class="text-center">Loading...</div>'; 

    fetchUsers()
        .then(users => {
            displayUsers(users); 
        })
        .catch(error => {
            usersContainer.innerHTML = `<div class="alert alert-danger">${error}</div>`; 
        });
});