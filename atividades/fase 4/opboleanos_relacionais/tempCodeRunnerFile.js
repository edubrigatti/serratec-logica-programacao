 const prompt = require('prompt-sync')();

var limite = prompt("Quantas pessoas estão na loja? ");
    if (limite <= 8)
        console.log("entrada liberada");
    else
        console.log("limite atingido!!");