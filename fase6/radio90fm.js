/*Na promoção relâmpago da rádio 90FM, os cinco primeiros ouvintes que mandarem um WhatsApp durante o programa ao vivo, ganham um par de ingressos para o cinema!*/

const prompt = require("prompt-sync")();


const respOficial = "digitacao";

for (var i = 0; i < 3; i++) {
   console.log("Alô ouvinte" + (i + 1));
   var chances = 2;

   do {
    var resposta = prompt("Qual a sua resposta a pergunta ao vivo? ");
    var acertou  = resposta ==  respOficial;

    if (acertou) {
        console.log("ouvinte " + (i + 1) + " ganhou caneca!");
    } else {
        chances--;
        console.log("você errou! ", chances);
     } 

    } while (!acertou && (chances > 0));

     }


     console.log("90FM é show!");