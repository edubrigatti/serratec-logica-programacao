var ler = require('prompt-sync')();

var desculpa = prompt ("Vai ao treino hoje?");
var ler = require('prompt-sync')();
console.log("Escolha uma das opcões de desculpas abaixo:");
console.log("1) Tá muito frio de manhã");
console.log("2) Tá maluco?? O treino tá pesado demais!!");
console.log("3) Hoje é sexta, dia de beber!!!");
console.log("OBS: por favor, informe apenas números!! Ex: 1");

var numDesculpa = ler('Informe o número de sua desculpa:')

if (numDesculpa == 1) {
  //A alternativa 1
  console.log('Mas não tá frio para comer.')
}

if (numDesculpa == 2) {
  //A alternativa 2
  console.log('Treininho leve demais rsrs')
}

if (numDesculpa == 3) {
  //A alternativa 3
  console.log('Hoje é sexta, dia de beber!!!')
}

if (numDesculpa > 3) {
  // Digitou um número válido?
  console.log('Vc digitou um número que não está nas alternativas!')