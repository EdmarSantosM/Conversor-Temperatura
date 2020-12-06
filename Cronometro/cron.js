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
    var format = hh + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0 + ss : ss');   // Instrução ternária
    document.getElementById('counter').innerHTML = format;
}