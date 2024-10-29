// Define an async function to fetch JSON data
async function fetchData() {
    try {
        // Await the fetch call
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Await the response to be converted to JSON
        const data = await response.json();

        // Log the JSON data
        console.log(data);
    } catch (error) {
        // Handle any errors
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Call the function to fetch data
fetchData();