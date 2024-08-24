function sayHi(name){
    console.log(`Hello ${name}`);
}
sayHi('John');

function sum(a=0, b=0, c=0){
    return a + b + c;
}

console.log(sum(1, 2, 3)); 
console.log(sum(1, 2));
console.log(sum(1));
console.log(sum());

function addTwo(num){
    return num + 2;
}

function multiplicateByThree(num){
    return num * 3;
}

let result = multiplicateByThree(addTwo(4));
console.log(result); // 18


function sayHiWithAge(name, age = 18){
    return `Hello ${name}, you are ${age} years old`;
}
console.log(sayHiWithAge("Jonas")); 
console.log(sayHiWithAge("Petras", 25)); 


function makeFunction(f, num){
    return f(num);
}
function pow(num){
    return num * num;
}

console.log(makeFunction(pow, 5)); 


async function init() {
    let user, posts;

    try {
        // Fetch users
        const resUsers = await fetch(`https://jsonplaceholder.typicode.com/users`);
        user = await resUsers.json();

        // Fetch posts
        const resPosts = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        posts = await resPosts.json();
    } catch (error) {
        console.error('Failed to fetch data:', error);
        return; // Exit the function if fetching fails
    }

    // If fetches were successful, continue with processing
    const contentElement = document.querySelector('#content');

    const userData = createUserContent(user);
    if (userData) {
        contentElement.append(userData);
    }

    const userPosts = createUserPosts(posts);
    if (userPosts) {
        contentElement.append(userPosts);
    }
}

init();

function createUserContent(data) {
    console.log(data);
    const user = data[0];
    // Add some code here to create and return user content.
    
    // Create a div element
    const userElement = document.createElement('div');
    userElement.classList.add('user');

    // Create a h2 element
    const nameElement = document.createElement('h2');
    nameElement.textContent = user.name;

    // Create a p element
    const emailElement = document.createElement('p');
    emailElement.textContent = user.email;

    // Append elements to the user element
    userElement.append(nameElement, emailElement);

    return userElement;
}

function createUserPosts(posts) {
    console.log(posts);

    // Create a div element
    const postsElement = document.createElement('div');
    postsElement.classList.add('posts');

    // Create a h2 element
    const titleElement = document.createElement('h2');
    titleElement.textContent = 'Posts';

    // Create a ul element
    const listElement = document.createElement('ul');

    // Create li elements
    posts.forEach(post => {
        const postElement = document.createElement('li');
        postElement.textContent = post.title;
        listElement.append(postElement);
    });

    // Append elements to the posts element
    postsElement.append(titleElement, listElement);

    return postsElement;

}