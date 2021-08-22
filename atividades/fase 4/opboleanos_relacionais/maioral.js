const prompt = require('prompt-sync')();

var Pedro = 10;
var Marcos = 8;

var ganhou1 = Pedro > Marcos;
var ganhou2 = Marcos > Pedro;
var empate = Marcos == Pedro;

if (ganhou1)
    console.log("você ganhou Pedro!!");

if (ganhou2)
    console.log("parabéns você ganhou Marcos!!");

if (empate);
    console.log("que pena houve empate");
