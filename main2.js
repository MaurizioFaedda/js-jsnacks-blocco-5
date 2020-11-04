// Creare un array di nomi e chiedere all'utente due numeri. Creare un nuovo array con i valori che si trovano in una posizione compresa tra i due numeri inseriti dall'utente.
$(document).ready(function() {

    var nomi = ['mario', 'luca', 'luigi', 'maria', 'sara', 'mauro', 'alice'];

    console.log(nomi);

    var inizio = parseInt(prompt('inserisci un numero tra 0 e 6'));
    var fine =  parseInt(prompt('inserisci un numero tra 0 e 6'));

    console.log(inizio, fine);

    var nomi_estratti = [];

    for (var i = inizio; i <= fine; i++) {
        var nome = nomi[i];
        console.log(nome);
        nomi_estratti.push(nome);
    }

    console.log(nomi_estratti);
})
