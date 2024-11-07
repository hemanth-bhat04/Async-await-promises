document.getElementById('fetchData').addEventListener('click', async () => {
    await fetchConcurrentData();
});

async function fetchConcurrentData() {
    try {
        const [postsResponse, usersResponse] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/posts'),
            fetch('https://jsonplaceholder.typicode.com/users')
        ]);

        if (!postsResponse.ok || !usersResponse.ok) {
            throw new Error('Network response was not ok');
        }

        const posts = await postsResponse.json();
        const users = await usersResponse.json();
        displayData(posts, users);
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('data').innerHTML = `<div class="alert alert-danger">Failed to fetch data: ${error.message}</div>`;
    }
}

function displayData(posts, users) {
    const dataContainer = document.getElementById('data');
    dataContainer.innerHTML = '<h2>Posts</h2>';
    
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'card mb-3';
        postElement.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${post.body}</p>
            </div>`;
        dataContainer.appendChild(postElement);
    });

    dataContainer.innerHTML += '<h2>Users</h2>';
    
    users.forEach(user => {
        const userElement = document.createElement('div');
        userElement.className = 'card mb-3';
        userElement.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${user.name}</h5>
                <p class="card-text">Email: ${user.email}</p>
            </div>`;
        dataContainer.appendChild(userElement);
    });
}
