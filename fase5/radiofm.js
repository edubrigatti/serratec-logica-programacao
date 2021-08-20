const ler = require('prompt-sync')()

do{

  //ENTRADAS
  var telefone = ler("LIgando para você:  ");
  var naoAcertou = (telefone !="90show");

  //PROCESSAMENTOS
  while (naoAcertou) {
      console.log("que pena...");

      telefone = prompt ("ligando pra vc:");
      naoAcertou = (telefone != "90show");
  };

  console.log("parabéns vc ganhou!!!");

  //SAIDA

  var contar = 0;

  while (contar < 10) {
        contar++;
        console.log("numero agora é" + contar);
          }

          console.log("fim da contagem");


