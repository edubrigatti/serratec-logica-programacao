/* requisito:
criar um programa para saver se o carro esta ligado ou desligado*/

const prompt = require('prompt-sync')();

// entrada
console.log('responda algumas perguntas com "sim" ou "não":');
var barulho = prompt("esta ouvindo barulho do motor?");
var movimento = prompt("o veículo está em movimento?");
var luzes = prompt("as luzes do painel, ou farol, estão acesas?");

// processamento
var ligado = (movimento == "sim") || (barulho == "sim") && (luzes == "sim");



//saida
console.log("concluímos que: seu carro está ligado?", ligado);