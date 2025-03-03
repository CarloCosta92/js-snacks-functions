/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function wordA (array, lettera){

    let newNames=[];

    for (let i=0; i<names.length; i++){
        if (array[i][0] === lettera){
            newNames.push(array[i])
           
        }
    }

return newNames;

}

//arrow function

// const wordA= (array, lettera) => {
//     let newNames=[];

//     for (let i=0; i<names.length; i++){
//         if (array[i][0] === lettera){
//             newNames.push(array[i])
           
//         }
//     }

// return newNames;

// }


// Invoca la funzione qui e stampa il risultato in console

wordA(names, 'A');
console.log(wordA(names, 'A'));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]