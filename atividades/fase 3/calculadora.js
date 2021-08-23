/*Crie o programa “mini calculadora”, que após ler dois números inteiros apresenta as operações de soma, subtração, multiplicação e divisão com eles.
*/


var prompt = require('prompt-sync')();

 var num1 = prompt("qual o pimeiro número?");
 var num2 = prompt("qual o segundo número?");
  var soma = num1 + num2;
  var divisao = num1 / num2;
  var subtracao = num1 - num2;
  var multiplicacao = num1 * num2;
 
  console.log("o resultado da soma é: " + soma);  
  console.log("o resultado da divisao é: " + divisao);
  console.log("o resultado da subtração é: " + subtracao);
  console.log("o resultado da multiplicação é: " + multiplicacao);