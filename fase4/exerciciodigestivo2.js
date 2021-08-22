const prompt = require('prompt-sync')();

const limite = 8;
var qtde = 9;

var liberada = (qtde , limite);
var proximo = (qtde == 7);

if (liberada)
 if (proximo)
   console.log("não deixe entrar se estiver acompanhada");
 else   
    console.log("entrada liberada");
else
console.log("aguarde um pouco");