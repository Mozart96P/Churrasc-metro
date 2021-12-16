// Carne 400 gr por pessoa se =+ 6 horas será 650 gr por pessoa
// Cerveja 1200 ml por pessoa se =+ 6horas 2000 ml por pessoa
// Refrigerante/Agua 1000ml por pessoa se =+ 6 horas 1500ml por pessoa
// Crianças valem por metade desses valores

let inputadultos = document.getElementById("adultos");
let inputcriancas = document.getElementById("criancas");
let inputtempo = document.getElementById("tempo");

let resultado = document.getElementById("resultado");

function calcular(){
                let adultos = inputadultos.value;
                let criancas = inputcriancas.value;
                let tempo = inputtempo.value;

                let totalcarne = carnePP(tempo)* adultos +(carnePP(tempo) / 2 * criancas);
                console.log(totalcarne);

                let totalbreja = brejaPP(tempo) * adultos;
                console.log(totalbreja);

                let totalbebidas = bebidaPP(tempo) * adultos + (bebidaPP(tempo) /2 * criancas);
                console.log(totalbebidas);

                resultado.innerHTML = `<h4>VOCÊ PRECISARÁ DE</h4>`
                resultado.innerHTML += `<img src="imagens/carne03.png"><p>${totalcarne / 1000} Kg de carne</p>`
                resultado.innerHTML += `<img src="imagens/breja3.png"><p>${Math.ceil(totalbreja / 355)} latas de cerveja</p>`
                resultado.innerHTML += `<img src="imagens/agua06.png"><p>${Math.ceil(totalbebidas / 2000)} Pets 2Lt de bebidas</p>`
                resultado.innerHTML += `<h4>Aproveite!</h4>`
} 

function bebidaPP(tempo){
                if(tempo >= 6){
                return 1500} else{
                return 1000               
                }
}

function brejaPP(tempo){
                if(tempo >= 6){
                return 2000} else{
                return 1200               
                }
}

function carnePP(tempo) {
                
                if (tempo >= 6){
                return 650}
                else{
                return 400
                }
}