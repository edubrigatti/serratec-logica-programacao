const prompt = require('prompt-sync')();

const limite = 20;
var idade = 17;
var podevotar = (idade >= limite);
var naopodevotar = (idade < limite);

if (podevotar)
    console.log("Muito bem, você pode votar!");    
    
if (naopodevotar)
    console.log("Infelizmente ainda não chegou sua vez.");



