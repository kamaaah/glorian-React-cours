// const xhr = new XMLHttpRequest(),
//     method = "GET",
//     url = "https://jsonplaceholder.typicode.com/users";
// xhr.open(method, url);
// xhr.onreadystatechange = () => {
//     // In local files, status is 0 upon success in jsonplaceholder.typicode.com/
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//         var status = xhr.status;
//         if (status === 0 || (status >= 200 && status < 400)) {
//             // The request has been completed successfully
//             console.log(xhr.responseText);
//         }
//     }
// }
// xhr.send();
console.log(' ##############  Traning.js ##############"');

// 2. recupere l'email de l'utilisateur concerne par cet tache 
//  via https: //jsonplaceholder.typicode.com/users

const get = (url) => {
    return new Promise((resolve, reject) => {
        const xhr = new window.XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4)
                if (xhr.status === 200) resolve(xhr.responseText);
                else reject("Ceci est un message d'erreur");
        };
        xhr.open("GET", url);
        xhr.send();
    });
};
// const getTodos = async() => {
//     const response = await get("https://jsonplaceholder.typicode.com/todos");
//     const todos = JSON.parse(response);
//     console.log(todos);
//     const todo = todos[41];
//     console.log("Todo", todo);
//     return todos;

//     // const response = await get(`https://jsonplaceholder.typicode.com/users?id=${"userId:2"}`);
//     //     const user3 = users[2];
//     //     console.log(user3);
//     //     console.log(user3.email);
//     //     console.log(todo[id].username);

//     //     // const response = await get("https://jsonplaceholder.typicode.com/todos");
//     //     // console.log(todos); // toute la liste
//     //     // console.log(todos[41]); // 11e r possibilité
//     //     // console.log(todos.filter((todo) => todo.id === 42));
//     //     // console.log(todo[]);
// };


// const getUsers = async() => {
//     const response = await getTodos();
//     // console.log(userId.)
// }
//  ************* Correction Glorian **************************
const getTodos = async() => {
    const response = await get("https://jsonplaceholder.typicode.com/todos");
    const todos = JSON.parse(response);
    const todo = todos[41];
    // console.log(todos.filter((todo) => todo.id === 42));
    const userId = todo.userId;
    // console.log(userId);
    const responseUser = await get(
        `https://jsonplaceholder.typicode.com/users?id=${userId}`
    );
    // console.log(responseUser);
    const parseResponse = JSON.parse(responseUser);
    const user = parseResponse[0];
    const email = user.email;
    console.log(email);
};

getTodos();