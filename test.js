// opérateur de spread: ..." 3 petits points
// qd on a une variable structurée de pouvoir la décomposée et de récupérer les propriétés individuellement
// constlisteNombre = [1, 2, 3, 4];

console.log('***************  COurs Glorian *************************');
// ******************* DESTRUCTURING ****************************
let personnes = ['Pierre', 'Paul', 'Jacques'];
// let personne1 = personnes[0];
// let personne2 = personnes[1];
// let personne3 = personnes[2];
let animal = { chien: 'bob', chat: 'kitty' };
let [personne1, personne2] = personnes;
// console.log(personne1, personne2);
let { chat } = animal;
// console.log(chat);
// SPREAD
const tab = [3, 4, 5];
// console.log(tab);
// console.log(...tab);
const tab2 = [1, 2, ...tab];
// console.log(tab2);
// DEFAULT PARAMETERS
const somme = (a = 0, b = 0) => {
  console.log(a, b);
  return a + b;
};
// console.log(somme(2, 5));
//FUNCTION VARIADIQUE
const saluer = (...prenom) => {
  console.log(...prenom);
};
//BOUCLES FOR

const listNumber = ['un', 'deux', 'trois'];
// listNumber List { 0: "un", 1: "deux", 2: "trois" }

const objNumber = { 0: 'un', 1: 'deux', 2: 'trois' };
console.log('********** listNumber ************');
for (let n in listNumber) console.log(n);
for (let n of listNumber) console.log(n);
console.log(' ********** objNumber ************');
for (let n in objNumber) console.log(objNumber[n]);
// for (let n of objNumber) console.log(objNumber[0]);
//CLASS
class Animal {
  constructor(prenom) {
    this.prenom = prenom;
  }
}
class Carre {
  constructor(objectColor) {
    this.couleur = objectColor;
    this.forme = 'carre';
    console.log(this); // 1
    console.log(this.couleur); // 2
  }
}
// // const c = new Carre("vert");
// // console.log(c); // 1
// // console.log(c.couleur); // 2
// TEMPLATE LITERALS
const nom = 'Pierre';
const string = `"N'est-ce pas"`;
console.log(`${string} ${nom}`);
//MAP FILTER REDUCE
const tableau = [1, 2, 3, 4, 5];
console.log(
  tableau.map(function (n, i) {
    console.log(n, i);
    return (n += 2);
  })
);
console.log(
  tableau.filter(function (n) {
    return n <= 3;
  })
);
console.log(
  tableau.reduce(function (previous, current) {
    return previous + current;
  })
);
// console.log(tableau.reduce((previous, current) => previous + current));
// console.log(tableau.map((n) => (n += 2)));
// console.log(tableau.filter((n) => n <= 3));
// JSON -> JavaScript Object Notation
// AJAX -> Aynschronous Javascript And XML

console.log('"################### ENd Cours Glorian #########################');

// *********************** DEFAULT PARAMETERS ********************************
// const somme = (a, b) => a + b;
// console.log(somme(2)); // affiche not a number parce que la valeur de b n est pas définie

sommes = (a = 0, b = 0) => {
  console.log(a, b);
  return a + b;
};
console.log(sommes(2, 5));

// **************** REST parameter => permet de creér une FONCTION VARIADIQUE ******************
// => qui peut avoir plusieurs arguments.
// Il est utilisé dans la déclaration de la fonction
// dans la déclaration des araqguments passés en parametre en entrée de ma fonction

// const saluer = (...prenom) => { // correspond au rest operateur
//     console.log(...prenom); // correspond au spread operator
// }
// console.log(...prenom);

var params = [1, 2, 3, 4, 5, 11, 27, 28, 68];
let chiffre = params % 2;

const recuperePairs = (x) => console.log(x);
console.log(chiffre);

const recuperePaires = (...params) => { // 1er version
    const tab = [];
    for (n of params)
        if (!(n % 2)) tab.push(n);
    consol.log(tab);
}

// const recuperePairs = (...numbers) => {
//     const result = (numbers.filter((n) => !(n % 2))); // 2ère refacto

//     console.log(chiffres.filter % 2 === 0);
// }

// const recuperePais = (...numbers) => {
//     console.log(numbers.filter((n) => !(n % 2)));
// }

// recuperePairs(1, 2, 4, 5);
// recuperePairs();
// recuperePairs(1, 3, 11, 27);
// recuperePairs(1, 2, 3, 11, 28, 27, 68);

// // Function VARIABLE
// const saluer = (...prenom) => {
//     console.log(...prenom);
// };

// constlistNumber = ["un", "deux", "trois"];
// // listNumber List(0:"un", 1:"deux", 2:"trois")
// const objNumber = { 0: "un", 1: "deux", 2: "trois" };
// for (let n in listNumber) console.log(n);
// for (let of listNumber) console.log(n);
// for (let n in objNumber) console.log(objNumber[n]);

// function somme(...params) {
//     return params.reduce((accumulateur, element) => {
//         return accumulateur + element;
//     });
// }

// console.log(somme(1));
// console.log(somme(1, 2, 3, 4, 5));

// class Rectangle {
//     constructor(objectColor, forme) {
//         console.log(this);
//         this.couleur = objectColor;
//         this.forme = "rectangle";
//         console.log(this);
//     }
// }
// const c = new Carre('vert');
// console.log(c);
// console.log(c.couleur);

//*****************  Template literals => utilisation du backtick AltGr + 7 *******************
const pers = {
  prenom: 'john',
  nom: 'Wick',
};

// const message = 'Bonjour' + pers.prenom + ' ' + pers.nom + ' !';
message = `Bonjour ${pers.prenom} ${pers.nom} !`;
console.log(message);

// *********** Exo by me *****************
class guest {
  constructor(invite, invite1, invite2) {
   this.invite = 'Jean';
    this.invite1 = 'Paul';
    this.invite2 = 'Jack';
    console.log(this);
  }
}

const saluerTous = ()  => {
        console.log(`Bonjour à ${guest.invite}, ${guest.invite1}, ${guest.invite2}`);
        console.log(`Bonjour à ${guest.invite1} et ${guest.invite2}, ${guest.invite}`);
        console.log(`Bonjour à ${guest.invite2},  ${guest.invite} et ${guest.invite1}`);
    }

// const saluerTous = (invite = 'Jean', invite1 = 'Paul', invite2 = 'Jack') => {
//   console.log(`Bonjour a ${invite}, ${invite1}, ${invite2} `);
//   console.log(`Bonjour a ${invite} et ${invite1}, ${invite} `);
//   console.log(`Bonjour a ${invite}, ${invite} et ${invite} `);
// };
saluerTous();

//MAP  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map
const array = [1, 2, 3, 4, 5];
console.log(
  array.map(function (element_courrant, index) {
    console.log(element_courrant, index);
    return element_courrant;
  })
);

// Meme function écrite différement
console.log(
  array.map(function (n, i) {
    console.log(n, i);
    return (n += 2);
  })
);

// version a utiliser
console.log(array.map((n, i) => (n += 2)));

// FILTER  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter
console.log(
  array.filter(function (n) {
    return n <= 3;
  })
);

console.log(
  array.reduce(function (previous, current) {
    return previous + current;
  })
);

// Example Developer.molzilla.org
const word = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = word.filter(word => word.length > 6);
console.log(result); //expected outpu: Array["exuberant", "destruction", "present"]

// le 19 Janvier 2021
//fonction Asynchrone avec les promises
// ###########   Glorian Bikoumou 9 h 36 #############""
const gets = url => {
  return new Promise((resolve, reject) => {
    const xhr = new window.XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4)
        if (xhr.status === 200) resolve(xhr.responseText);
        else reject('Une erreur est survenue');
    };
    xhr.open('GET', url);
    xhr.send();
  });
};
const getTodoss = () => {
  const response = get('https://jsonplaceholder.typicode.com/users')
    .then(responseText => {
      const users = JSON.parse(responseText);
      const user4 = users[3];
      const id = user4.id;
      return id;
    })
    .then(id => {
      const responseTodos = get(
        `https://jsonplaceholder.typicode.com/todos?userId=${id}`
      ).then(responseText => {
        const result = JSON.parse(responseText);
        console.log(result);
      });
    })
    .catch(errorMessage => {
      console.log('DANS LE .CATCH');
      console.error(errorMessage);
    });
};

// Glorian Bikoumou 10 h 21
const get = url => {
  return new Promise((resolve, reject) => {
    const xhr = new window.XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4)
        if (xhr.status === 200) resolve(xhr.responseText);
        else reject("Ceci est un message d'erreur");
    };
    xhr.open('GET', url);
    xhr.send();
  });
};
const getTodos = async () => {
  const response = await get('https://jsonplaceholder.typicode.com/users');
  const users = JSON.parse(response);
  const user = users[3];
  const id = user.id;
  const responseTodos = await get(
    `https://jsonplaceholder.typicode.com/todos?userId=${id}`
  );
  const todos = JSON.parse(responseTodos);
  console.log(todos);
};

//############################## REACT JS #########################################
