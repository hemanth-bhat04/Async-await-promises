let a = async function  main() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json();
    console.log(data);
    console.log(2);
}

a