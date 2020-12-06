"use strict"

// Declaração  das variáveis

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000;
var cron;

 // Funções

 function start() {
     cron = setInterval(() => { timer(); }, tempo);

 }

 
 function pause() {
     clearInterval(cron);
}


function stop() {
    clearInterval(cron)
     hh = 0;
     mm = 0;
     ss = 0;

}

function timer(){
    document.getElementById('counter').innerHTML = 'teste';
}