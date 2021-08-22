A prefeitura de Teresópolis estabeleceu o “Rodízio de CPF”, onde o dígito final do documento será utilizado para permitir a entrada nas lojas. CPF final “par” somente pode sair nos dias pares, e de igual modo, o dia ímpar é destinado aos documentos ímpares.

var ler = require('prompt-sync')();

var dia = ler("dia de hoje: ");
var finaldecpf = ler("02 últimos números do seu cpf: ");

var diapar = dia%2;
var cpfpar = finaldecpf%2;

var comparacpf = diapar == cpfpar;

console.log("está autorizado a entrar na loja? " + comparacpf);