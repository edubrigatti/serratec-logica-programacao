/*
# Serratec - Parque Tecnológico Região Serrana
 *  Lógica de Programação - Prof. Moises do Amaral Baddini
 * Atividade: Elicitação de Requisitos
 * Squad: GPS - Group of Programming Students
 * Autor (Descrição): Luana Aquino
 * Arquivo: fraseSensitiva.js
 * Data: 20/08/2021

### Descrição:
Qual frase da sensitiva Marcia Fernendes você seria. Solicitando dia que você nasceu, mês de nascimento e cor da camiseta.

As frases são:
"Tem fantasma que não quer nem ficar perto de nós, porque ele acha que a gente tá pior que ele!"
“para de ser doida!”
"Um morto-vivo não dá um bom dia alegre pra ninguém! E eu tô falando com você mesmo!"
"Uma pessoa que só reclama... Ela tem encosto!"
"Eles ficam no esgoto... Eles quem? Os dragões!"
"O café é forte! Ele afronta almas das trevas!"
"A inveja gruda nos azulejos!"
“Uma mulher inteligente não perde a doçura por maior que seja a burrice do homem.”
“Quer ser feliz ou ter razão?”
“Não me julgue nem me subestime, posso fazer você acreditar no seu julgamento.”
“Aceite e assuma sua realidade, esqueça o passado, a vida é aqui e agora! O ontem já passou e o amanhã talvez nem venha. Viva o presente.”
“Nem rato aguenta ficar num ambiente onde tem gente sugando a energia dos outros”
*/

const ler = require('prompt-sync')()

var diaNasc = ler('Qual dia você nasceu?')
var mesNasc = ler('Qual mes você nasceu?')
var anoNasc = ler('Qual ano você nasceu?')
var corCamisa = ler(
  'Qual cor de sua camisa? (R: vermelha, azul, verde, amarela, laranja, preta ou branca)'
)

//Verifcando cor da camisa (R: vermelha, azul, verde, amarela, laranja, preta ou branca)
if (
  corCamisa == 'vermelha' ||
  corCamisa == 'Vermelha' ||
  corCamisa == 'VERMELHA'
) {
  corCamisa = 1
}

if (corCamisa == 'azul' || corCamisa == 'Azul' || corCamisa == 'AZUL') {
  corCamisa = 2
}

if (corCamisa == 'verde' || corCamisa == 'Verde' || corCamisa == 'VERDE') {
  corCamisa = 3
}

if (
  corCamisa == 'amarela' ||
  corCamisa == 'Amarela' ||
  corCamisa == 'AMARELA'
) {
  corCamisa = 4
}

if (
  corCamisa == 'laranja' ||
  corCamisa == 'Laranja' ||
  corCamisa == 'LARANJA'
) {
  corCamisa = 5
}

if (corCamisa == 'preta' || corCamisa == 'Preta' || corCamisa == 'PRETA') {
  corCamisa = 6
}

if (corCamisa == 'branca' || corCamisa == 'Branca' || corCamisa == 'BRANCA') {
  corCamisa = 7
}

var numAleatorio = Math.floor(diaNasc) + corCamisa + Math.floor(mesNasc)

if (numAleatorio > 12) {
  numAleatorio = 12
}

var aniversario = diaNasc + '/' + mesNasc + '/' + anoNasc
// 10/10/2005

//Usando switch para mostrar frase aleatoria
switch (numAleatorio) {
  case 1:
    console.log('Seu aniversário é:', aniversario)
    console.log(
      'Com base na cor de sua camisa e no dia de seu nascimento, essa é sua frase:'
    )
    console.log(
      '"Tem fantasma que não quer nem ficar perto de nós, porque ele acha que a gente tá pior que ele!"'
    )
    break
  case 2:
    console.log('Seu aniversário é:', aniversario)
    console.log(
      'Com base na cor de sua camisa e no dia de seu nascimento, essa é sua frase:'
    )
    console.log('“para de ser doida!”')
    break
  case 3:
    console.log('Seu aniversário é:', aniversario)
    console.log(
      'Com base na cor de sua camisa e no dia de seu nascimento, essa é sua frase:'
    )
    console.log(
      '"Um morto-vivo não dá um bom dia alegre pra ninguém! E eu tô falando com você mesmo!"'
    )
    break
  case 4:
    console.log('Seu aniversário é:', aniversario)
    console.log(
      'Com base na cor de sua camisa e no dia de seu nascimento, essa é sua frase:'
    )
    console.log('"Uma pessoa que só reclama... Ela tem encosto!"')
    break
  case 5:
    console.log('Seu aniversário é:', aniversario)
    console.log(
      'Com base na cor de sua camisa e no dia de seu nascimento, essa é sua frase:'
    )
    console.log('"Eles ficam no esgoto... Eles quem? Os dragões!"')
    break
  case 6:
    console.log('Seu aniversário é:', aniversario)
    console.log(
      'Com base na cor de sua camisa e no dia de seu nascimento, essa é sua frase:'
    )
    console.log('"O café é forte! Ele afronta almas das trevas!"')
    break
  case 7:
    console.log('Seu aniversário é:', aniversario)
    console.log(
      'Com base na cor de sua camisa e no dia de seu nascimento, essa é sua frase:'
    )
    console.log('"A inveja gruda nos azulejos!"')
    break
  case 8:
    console.log('Seu aniversário é:', aniversario)
    console.log(
      'Com base na cor de sua camisa e no dia de seu nascimento, essa é sua frase:'
    )
    console.log(
      '“Uma mulher inteligente não perde a doçura por maior que seja a burrice do homem.”'
    )
    break
  case 9:
    console.log('Seu aniversário é:', aniversario)
    console.log(
      'Com base na cor de sua camisa e no dia de seu nascimento, essa é sua frase:'
    )
    console.log('“Quer ser feliz ou ter razão?”')
    break
  case 10:
    console.log('Seu aniversário é:', aniversario)
    console.log(
      'Com base na cor de sua camisa e no dia de seu nascimento, essa é sua frase:'
    )
    console.log(
      '“Não me julgue nem me subestime, posso fazer você acreditar no seu julgamento.”'
    )
    break
  case 11:
    console.log('Seu aniversário é:', aniversario)
    console.log(
      'Com base na cor de sua camisa e no dia de seu nascimento, essa é sua frase:'
    )
    console.log(
      '“Aceite e assuma sua realidade, esqueça o passado, a vida é aqui e agora! O ontem já passou e o amanhã talvez nem venha. Viva o presente.”'
    )
    break
  case 12:
    console.log('Seu aniversário é:', aniversario)
    console.log(
      'Com base na cor de sua camisa e no dia de seu nascimento, essa é sua frase:'
    )
    console.log(
      '“Nem rato aguenta ficar num ambiente onde tem gente sugando a energia dos outros”'
    )
    break
}