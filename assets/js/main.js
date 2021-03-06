// Fazendo a animação do termometro

function tempLoad() {
    let temp = document.getElementById('temp');
    temp.innerHTML = "&#xf2cb;";

    setTimeout(function() {
        temp.innerHTML = "&#xf2ca;";
    },1000);

    setTimeout(function() {
        temp.innerHTML = "&#xf2c9;";
    },2000);

    setTimeout(function() {
        temp.innerHTML = "&#xf2c8;";
    },3000);

    setTimeout(function() {
        temp.innerHTML = "&#xf2c7;";
    },4000);
}

tempLoad();

setInterval(tempLoad,5000);


// Fazendo a  conversão  das temperaturas

document.getElementById('temperatura-entrada').addEventListener('input', function(e){  // Validando o input

    let temperatura_entrada = parseFloat(e.target.value);

    if (temperatura_entrada){
                document.getElementById('saida').style.display ="inline"; // Ao digitar o valor no input é exibido novamente  os  elementos na  saida
        

            // Conversão  para Kelvin
                document.getElementById('saida-kelvin').innerHTML = (temperatura_entrada + 273.15).toFixed(2) + " K";


            // Conversão para Fahrenheit
                document.getElementById('saida-fahrenheit').innerHTML = ((temperatura_entrada * (9 / 5)+ 32)).toFixed(2) + " F"

            // Conversão  para Rankine
                document.getElementById('saida-rankine').innerHTML = ((temperatura_entrada)*(9 /5) + 491.67).toFixed(2) + " R";   
        
         }  else {
             document.getElementById('saida').style.display = "none";
         } 
});