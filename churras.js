//Carne 400 gr por pessoa + 6 horas 650 gr
//Cerveja - 1200 ml + 6 horas 2000 ml
//Refri/ água - 1000 mls por pessoa + 6 horas 1500 ml

//Criaça metade dos adultos

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");


function calcular() {

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdeCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdeCerveja = cervejaPP(duracao) * adultos;
    let qtdeBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);


    resultado.innerHTML = `<div class="result-block"><img src="./imagens/icon bife.png"/> <p>${qtdeCarne / 1000} kg de Carne </p>`
    resultado.innerHTML += `<img src="./imagens/icon bebida.png"/><p>${Math.ceil(qtdeCerveja / 355)} Lata(s) de Cerveja</p>`
    resultado.innerHTML += `<img src="./imagens/icon bebida.png"/><p>${Math.ceil(qtdeBebidas / 2000)} Pet(s) de 2l de Bebidas</p>`
}

function carnePP(duracao) {

    if (duracao >= 6) {
        return 650;
    }else {
        return 400;
    }
}

function cervejaPP(duracao) {

    if (duracao >= 6) {
        return 2000;
    }
    else {
        return 1200;
    }
}

function bebidasPP(duracao) {

    if (duracao >= 6) {
        return 1500;
    }
    else {
        return 1000;
    }
}
function limpar(){
    inputAdultos.value = '';
    inputCriancas.value = '';
    inputDuracao.value = '';
    resultado.innerHTML = '';   
}

