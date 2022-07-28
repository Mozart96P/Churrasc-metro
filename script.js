//Carne - 400gr por pessoa se mais de 6 horas é 650gr
//Cerveja - 1200 ml por pessoa se mais de 6 horas é 2000ml
//Refrigerante/agua - 1000ml por pessoa se mais de 6 horas 1500ml
// crianças valem pela metade de todos os valores exceto (obviamente) de bebidas alcóolicas


function calcular(){
let inputAdultos = parseFloat(document.getElementById("adultos").value);
let inputCriancas = parseFloat(document.getElementById("criancas").value);
let inputTempo = parseFloat(document.getElementById("tempo").value);

let inputResultado = document.getElementById("resultado");
                
                var adultos = inputAdultos;
                let criancas = inputCriancas;
                let tempo = inputTempo;

                let TotalCarne = carnePP(tempo) *adultos + (carnePP(tempo) / 2 *criancas);
                let TotalCerveja = cervejaPP(tempo) *adultos;
                let TotalBebidas = bebidaPP(tempo) *adultos + (carnePP(tempo) / 2 *criancas);

                resultado.innerHTML = `<p>${TotalCarne / 1000}Kg de carne</p> <img class="imagensresultado" src="imagens/carne03.png">`
                resultado.innerHTML += `<p>${Math.ceil(TotalCerveja / 355)}Latas de cerveja</p> <img class="imagensresultado" src="imagens/breja3.png">`
                resultado.innerHTML += `<p>${Math.ceil(TotalBebidas / 2000)}Pet's 2 Lt de bebidas</p> <img class="imagensresultado" src="imagens/agua06.png">`
                resultado.innerHTML += `<p id="aproveite">Aproveite !</p>`
}

function carnePP(tempo){
                if(tempo >= 6){
                return 650;
           }else {
                return 400;
           }
}
function cervejaPP(tempo){
     if(tempo >= 6){
     return 2000;
}else {
     return 1200;
}
}
function bebidaPP(tempo){
     if(tempo >= 6){
     return 1500;
}else {
     return 1000;
}
}