// Fetch user data from a public API using async/await
async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        displayUsers(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('userContainer').innerHTML = `
            <div class="alert alert-danger" role="alert">
                Failed to load user data.
            </div>`;
    }
}


function displayUsers(users) {
    const userContainer = document.getElementById('userContainer');
    userContainer.innerHTML = ''; // Clear existing content

    users.forEach(user => {
        const userCard = `
            <div class="col-md-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${user.name}</h5>
                        <p class="card-text"><strong>Email:</strong> ${user.email}</p>
                        <p class="card-text"><strong>Company:</strong> ${user.company.name}</p>
                        <p class="card-text"><strong>City:</strong> ${user.address.city}</p>
                    </div>
                </div>
            </div>`;
        userContainer.insertAdjacentHTML('beforeend', userCard);
    });
}


fetchUserData();
