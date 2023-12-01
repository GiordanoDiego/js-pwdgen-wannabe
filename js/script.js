
let nomeUtente = prompt('Inserisci nome:');
console.log('Valore preso dal prompt:', nomeUtente);
document.getElementById('nomeUtente').innerHTML = nomeUtente;

let cognomeUtente = prompt('Inserisci cognome:');
console.log('Valore preso dal prompt:', cognomeUtente);
document.getElementById('cognomeUtente').innerHTML = cognomeUtente;

let coloreUtente = prompt('Inserisci il tuo colore preferito:');
console.log('Valore preso dal prompt:', coloreUtente);
document.getElementById('coloreUtente').innerHTML = coloreUtente;

let datiUtente = nomeUtente + " " + cognomeUtente + " " + coloreUtente + " " + 114;
console.log('dati completi:', datiUtente)
document.getElementById('datiUtente').innerHTML = datiUtente;

let pswUtente = nomeUtente + cognomeUtente + coloreUtente + 114;
console.log('Password:', pswUtente)
document.getElementById('pswUtente').innerHTML = pswUtente;