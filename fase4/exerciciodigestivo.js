const prompt = require('prompt-sync')();

console.log("=== Shopping - Sanitarios ===");

//entradas
var cor = prompt("Qual a cor do indicador? (verde, vermelho) ");

//processamento
var liberado = (cor != "vermelho");

//saida
var saida = "Aguarde antes de entrar";

if (liberado)
 saida  = "Pode entrar no sanitario";

 console.log(saida);

