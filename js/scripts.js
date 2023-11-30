let nomeUtente = prompt('Inserisci nome:');
console.log('Nome:', nomeUtente);
document.getElementById ('nomeUtente') .innerHTML = nomeUtente;


let cognomeUtente = prompt('Inserisci cognome:');
console.log('Cognome:', cognomeUtente);
document.getElementById ('cognomeUtente') .innerHTML = cognomeUtente;


let colorePreferito = prompt ('Inserisci colore preferito:');
console.log('Colore Preferito:', colorePreferito);
document.getElementById ('colorePreferito') .innerHTML = colorePreferito;

let emailUtente = prompt ('Inserisci Email:');
console.log('Email:', emailUtente);
document.getElementById ('emailUtente') .innerHTML = emailUtente;

let datiUtente = nomeUtente + " " + cognomeUtente + " " + colorePreferito + " " + 114;
console.log('Inserimento tutti i dati');
document.getElementById ('datiUtente') .innerHTML = datiUtente;



