/*O aplicativo na entrada da loja possui internamente um limite de pessoas que podem estar dentro do estabelecimento ao mesmo tempo. Toda vez que um cliente quiser entrar, o segurança irá preencher a quantidade de pessoas já na loja, e o programa avisará se o cliente pode prosseguir.*/


const prompt = require('prompt-sync')();

const limite = 10;
var qtde = 9;

var liberada = (qtde , limite);
var proximo = (qtde == 9);

if (liberada)
 if (proximo)
   console.log("não deixe entrar se estiver com mais gente!");
 else   
    console.log("entrada autorizada.");
else
console.log("aguarde um momento por favor.");