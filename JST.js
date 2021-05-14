const tbody = document.querySelector('#user-posts');



var posts = ['fetchPosts'];
var comments = ['fetchComments'];
//var results = ['fetchResults'];

//1 keer uitvoeren! Posts en Comments, *2 keer window.onload zorgt dat ene de ander overide
window.onload = () => {
    fetchPosts();
    fetchComments();
    //fetchResults();
}



async function fetchPosts()
{
    await fetch('http://jsonplaceholder.typicode.com/posts')
        .then(response => {
            return response.json();
        })
        .then(data => {
            //selects a random post
            var output = data[Math.floor(Math.random() * data.length)];
            console.log(output);
            console.log(data);
            post = output;
            addPostsToTable();

        })

.catch(error => console.log(error));
}


//const results = Object.assign({}, post.id, comment.id);
//var results2 = output;
//console.log(results);


function addPostsToTable()
{
    let table_row = `
        <tr>
        <td>${post.id}</td>
        <td>${post.title}</td>
        <td>${post.body}</td> 
        </tr>
        
`;
    tbody.innerHTML += table_row;
}



const tbody1 = document.querySelector('#user-comments');



async function fetchComments()
{
    await fetch('http://jsonplaceholder.typicode.com/comments')
        .then(response => {
            return response.json();
        })
        .then(data => {
            //selects a random comment
            var output = data[Math.floor(Math.random() * data.length)];
            console.log(data);
            comment = output;

            addCommentsToTable();

        })
        .catch(error => console.log(error));
}


function addCommentsToTable()
{
    let table_row = `
        <tr>
        <td>${comment.id}</td> <br>
        <td>${comment.name}</td> <br>  
        <td>${comment.email}</td> <br>
        <td>${comment.body}</td> 
        </tr>
        
`;
    tbody1.innerHTML += table_row;
}


//preciese comment and de post te koppelen is nog niet gelukt


