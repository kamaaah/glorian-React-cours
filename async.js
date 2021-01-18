// var Loader = require('react-loader');
// Fonction getPosts qui 
//  récuoère le quatrième utilisateur  depuis "https://jsonplaceholder.typicode.com/users"
// recupère les taches a faire des cet utilisateur depuis https://jsonplaceholder.typicode.com/todos
//  renvoit les taches au format JSON
// const get = (url, success) => {
//     const xhr = new window.XMLHttpRequest();

//     // xhr.open('GET', url); // 1er étape
//     xhr.onreadystatechange = () => { // 2ème étage
//         if (xhr.readyState === 4) //console.log(xhr.responseText); // 2ème étape
//             if (xhr.status === 200) success(xhr.responseText); // 3ème étape
//             else console.log.error("Une erreur est survenue");
//     };
//     xhr.open("GET", url);
//     xhr.send(); // 1e r étape

// };


// //***************  Methode  standard de déclaration de la CallBack**************
// // const getTodos = () => { // 1er étape
// //     //get("https://jsonplaceholder.typicode.com/users"); // 1er étape
// //     get("https://jsonplaceholder.typicode.com/users",
// //         function success(responseText) {
// //             console.log(responseText);
// //         }
// //     );
// // };

// // ***************  Methode  fléchée de déclaration de la CallBack ****************
// const getTodos = () => { // 1er étape
//     //get("https://jsonplaceholder.typicode.com/users"); // 1er étape
//     get("https://jsonplaceholder.typicode.com/users",
//         (responseText) => {
//             console.log(responseText);
//         }
//     );
// };
// getTodos(); // 1er étage



console.log("  *************  Cour Glorian ***************** ");
// 1. recupere le quatrieme utilisateur depuis https://jsonplaceholder.typicode.com/users
// 2. recupere  les taches a faires de cet utilisateur depuis https://jsonplaceholder.typicode.com/todos?userId=[ID]
// 3. renvois les taches au format JSON
const get = (url, success, error) => {
    const xhr = new window.XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4)
            if (xhr.status === 200) success(xhr.responseText);
            else error("Une erreur est survenue");
    };
    xhr.open("GET", url);
    xhr.send();
};
const getTodos = () => {
    const response = get(
        "https://jsonplaceholder.typicode.com/users",
        (responseText) => {
            const users = JSON.parse(responseText);
            const user4 = users[3];
            const id = user4.id;
            const responseTodos = get(
                `https://jsonplaceholder.typicode.com/todos?userId=${id}`,
                (todosText) => {
                    const todos = JSON.parse(todosText);
                    console.log(todos);
                },
                (errorMessage) => {
                    console.error(errorMessage);
                }
            );
        },
        (errorMessage) => {
            console.error(errorMessage);
        }
    );
};
getTodos();