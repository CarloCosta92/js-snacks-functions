/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const nome = 'Carlo';


// Dichiara la funzione qui.
function salutare(person) {
    const hours = new Date().getHours();
    console.log(hours);
    let saluto;
    if (hours <= 13){
        saluto="Buongiorno"
    } else if(hours <= 17){
        saluto="Buon Pomeriggio"
    }else{
        saluto="Buonasera"
    }

    return `${saluto} ${person}`;
}

//arrow functions

// const salutare = (nome) => {
//     const hours = new Date().getHours();
//     let saluto;
//     if (hours <= 13){
//         saluto="Buongiorno"
//     } else if(hours <= 17){
//         saluto="Buon Pomeriggio"
//     }else{
//         saluto="Buonasera"
//     }

//     return `${saluto} ${nome}`;
// }




// Invoca la funzione qui e stampa il risultato in console

salutare(nome);
console.log(salutare(nome));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.