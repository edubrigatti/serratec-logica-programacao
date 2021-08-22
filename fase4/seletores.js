const prompt = require('prompt-sync')();

const limite_clientes = 8;
console.log("tem uma pessoa querendo entrar");
var qtde = prompt("quantas pessoas temos dentro da loja?");

var permiitir = qtde < limite_clientes;
