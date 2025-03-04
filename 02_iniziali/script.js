/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function firstLetter(elements) {

    let letter=[];

    for(let i=0; i<elements.length; i++){
        letter.push(elements[i][0]);
    }
    return letter;
}

//arrow function

// const firstLetter = elements =>{

//     let letter=[];

//     for(let i=0; i<elements.length; i++){
//         letter.push(elements[i][0]);
//     }
//     return letter;
// }

// Invoca la funzione qui e stampa il risultato in console

firstLetter(names);
console.log(firstLetter(names));



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]