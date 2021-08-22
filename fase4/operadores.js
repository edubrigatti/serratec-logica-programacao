// RELACIONAIS

const prompt = require('prompt-sync')();
var aluno = "edu";
var presente = (aluno != "");

console.log("Aluno está presente?");
console.log(presente);


//BOOLEAN (FALSO/VERDADEIRO)
// AMBOS = &&
var maria = true;
var carol = false;
var estaopesentes = maria && carol;
// var estaopesentes = true && true
console.log("estão pesentes?", estaopesentes);



// OPERADOR OU
// quando QUALQUER dos valores é verdade

var servidordragao = false;
var servidorbola = false;

var entrar = servidordragao || servidorbola;
console.log("estou conectado no discord?", entrar);


// NEGAÇÃO = ! (sinal de exclamação)
var prof = true;
var servidorgalera = ! prof;
console.log("posso entra galera?", servidorgalera);



var prompt = require('prompt-sync')();
//entradas
var A = prompt("possui habilitação A? Digite s ou n");
var B = prompt("possui habilitação B? Digite s ou n");
var C = prompt("possui habilitação C? Digite s ou n");

//processamento
var moto = A == "s" || A == "S" || A == "Sim";
var carro = B == "s" || B == "S" || B == "Sim";
var vuc = C == "s" || C == "S" || C == "Sim";

//&& || 
var resposta = moto && carro && vuc;

//saida
console.log("você é motorista de verdade?", resposta);
