"use strict"

// Declaração  das variáveis

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000; // milésimos equivalem a 1 segundo
var cron;

 // Funções
 

 function start() {
     stop();
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
    
     document.getElementById('counter').innerHTML = '00:00:00';

}

function timer(){

   ss++;
   if(ss == 60){
       ss = 0;
       mm++;

       if(mm == 60){
           mm = 0;
           hh++;
       }
   }


    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);  // INstrução ternaria
    document.getElementById('counter').innerHTML = format;
}