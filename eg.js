// Simulating API endpoints for placeholder JSON
const userApiUrls = [
    'https://jsonplaceholder.typicode.com/users/1',
    'https://jsonplaceholder.typicode.com/users/2',
    'https://jsonplaceholder.typicode.com/users/3'
];

// Function to fetch user data from a given URL
const fetchUserData = (url) => {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
};

// Function to fetch all user data when the button is clicked
const fetchAllUsers = () => {
    Promise.all(userApiUrls.map(fetchUserData))
        .then(users => {
            const userContainer = document.getElementById('user-container');
            userContainer.innerHTML = ''; // Clear previous data
            users.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.className = 'user col-md-4';
                userDiv.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${user.name}</h5>
                            <p class="card-text"><strong>Email:</strong> ${user.email}</p>
                            <p class="card-text"><strong>Phone:</strong> ${user.phone}</p>
                            <p class="card-text"><strong>Company:</strong> ${user.company.name}</p>
                        </div>
                    </div>
                `;
                userContainer.appendChild(userDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
};

// Event listener for the button
document.getElementById('fetch-button').addEventListener('click', fetchAllUsers);