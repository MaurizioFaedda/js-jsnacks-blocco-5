$(document).ready(function() {
    var bici = [
        {
            nome: 'bmx',
            peso: 10
        },
        {
            nome: 'mountain',
            peso: 8
        },
        {
            nome: 'corsa',
            peso: 5
        }
    ];

var peso_min = bici[0].peso;
var bici_peso_min = bici[0];

    for (var i = 0; i < bici.length; i++) {
        var bici_corrente = bici[i];
        var peso_corrente = bici_corrente.peso;
        console.log(peso_corrente);

        if(peso_corrente < peso_min) {

            peso_min = peso_corrente;
            bici_peso_min = bici_corrente;
        }
    }

    console.log(peso_min);
    console.log(bici_peso_min);
})
