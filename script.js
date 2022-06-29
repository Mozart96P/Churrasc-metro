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
                console.log(TotalCarne);
}

function carnePP(tempo){
                if(tempo >= 6){
                return 650;
           }else {
                return 400;
           }
}