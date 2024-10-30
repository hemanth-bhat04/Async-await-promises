
const postsData = [
    {
        id: 1,
        title: 'Post One',
        body: 'This is the body of post one.',
        comments: [
            { name: 'John Doe', email: 'john@example.com', body: 'Great post!' },
            { name: 'Jane Smith', email: 'jane@example.com', body: 'Very informative, thanks!' }
        ]
    },
    {
        id: 2,
        title: 'Post Two',
        body: 'This is the body of post two.',
        comments: null 
    },
    {
        id: 3,
        title: 'Post Three',
        body: 'This is the body of post three.',
        comments: [
            { name: 'Charlie Black', email: 'charlie@example.com', body: 'Interesting perspective!' },
            { name: 'Diana Green', email: 'diana@example.com', body: 'I completely agree with you.' }
        ]
    }
];


async function fetchPosts() {
    
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(postsData);
        }, 1000); 
    });
}

async function displayPosts() {
    const posts = await fetchPosts();
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = ''; 

   
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row'; 

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'col-12 col-md-6 col-lg-4 mb-4'; 
        postDiv.innerHTML = `
            <div class="post">
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <button class="btn btn-primary" onclick="displayComments(${post.id})">View Comments</button>
                <div class="comments" id="comments-${post.id}"></div>
            </div>
        `;
        rowDiv.appendChild(postDiv);
    });

    postsContainer.appendChild(rowDiv); // Append the row to the posts container
}


function displayComments(postId) {
    const post = postsData.find(p => p.id === postId);
    const commentsContainer = document.getElementById(`comments-${postId}`);
    commentsContainer.innerHTML = ''; 

    if (post && post.comments) {
        if (post.comments.length > 0) {
            post.comments.forEach(comment => {
                const commentDiv = document.createElement('div');
                commentDiv.innerHTML = `
                    <strong>${comment.name}</strong> (${comment.email}):
                    <p>${comment.body}</p>
                `;
                commentsContainer.appendChild(commentDiv);
            });
        } else {
            commentsContainer.innerHTML = 'No comments available.';
        }
    } else {
        commentsContainer.innerHTML = 'Error loading comments.';
    }
}


displayPosts();