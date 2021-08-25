
const prompt = require("prompt-sync")();

//ENTRADAS

//PROCESSAMENTO
for (var i = 43; i< 50; i++) {
    console.log("poltrona" + i);
    var poltrona = prompt("poltrona comum ou preferencial? C ou P");

    if ((poltrona == "P") && (i != 46)) {
        console.log("essa poltrona não é preferencial");
        continue;
    }
    console.log("ingresso" + i + "vendido.");
}


//SAIDA
