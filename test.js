// opérateur de spread: ..." 3 petits points
// qd on a nue variable structuré de pouvoir la décomposée et de récupérer les propriétés individuellement

constlisteNombre = [1, 2, 3, 4];




//  DEFAULT PARAMETERS
// const somme = (a, b) => a + b;
// console.log(somme(2)); // affiche not a number parce que la valeur de b n est pas définie

somme = (a = 0, b = 0) => {
    console.log(a, b);
    return a + b;
}
console.log(somme(2, 5));

// REST parameter => permet de creér une FONCTION VARIADIQUE 
// => qui peut avoir plusieurs arguments.
// Il est utilisé dans la déclaration de la fonction 
// dans la déclaration des araqguments passés en parametre en entrée de ma fonction

// const saluer = (...prenom) => { // correspond au rest operateur
//     console.log(...prenom); // correspond au spread operator
// }
// console.log(...prenom);


var params = [1, 2, 3, 4, 5, 11, 27, 28, 68];
// let chiffre = params % 2;

// const recuperePairs = (x) => console.log(x);
// console.log(chiffre);

// const recuperePairs = (...params) => { // 1er version
//     const tab = [];
//     for (n of params)
//         if (!(n % 2)) tab.push(n);
//     consol.log(tab);
// }



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



function somme(...params) {
    return params.reduce((accumulateur, element) => {
        return accumulateur + element;
    });
}

console.log(somme(1));
console.log(somme(1, 2, 3, 4, 5));

class Carre {
    constructor(objectColor, forme) {
        console.log(this);
        this.couleur = objectColor;
        this.forme = "carre";
        console.log(this);
    }
}
const c = new Carre('vert');
console.log(c);
console.log(c.couleur);

//Template literals => utilisation du backtick AltGr + 7
const pers = {
    prenom: 'john',
    nom: 'Wick'
}

// const message = 'Bonjour' + pers.prenom + ' ' + pers.nom + ' !';
message = `Bonjour ${pers.prenom} ${pers.nom} !`


class guest {
    constructor(invite, invite1, invite2) {
        this.invite = "Jean";
        this.invite1 = "Paul";
        this.invite2 = "Jack";
        console.log(this);
    }
}
const saluerTous = (invite = "Jean", invite1 = "Paul", invite2 = "Jack") => {
    console.log(`Bonjour a ${invite}, ${invite1}, ${invite2} `);
    console.log(`Bonjour a ${invite} et ${invite1}, ${invite} `);
    console.log(`Bonjour a ${invite}, ${invite} et ${invite} `);
}
saluerTous();

//MAP  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map
const tableau = [1, 2, 3, 4, 5];
console.log(
    tableau.map(function(element_courrant, index) {
        console.log(element_courrant, index);
        return (element_courrant);

    })
);

// Meme function écrite différement
console.log(
    tableau.map(function(n, i) {
        console.log(n, i);
        return (n += 2);
    })
);

// version a utiliser 
console.log(tableau.map((n, i) => (n += 2)));



// FILTER  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter
console.log(
    tableau.filter(function(n) {
        returnn <= 3;
    })
);

console.log(
    tableau.reduce(function(previous, current) {
        return previous + current;
    })
);

// Example Developer.molzilla.org
const word = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result); //expected outpu: Array["exuberant", "destruction", "present"]