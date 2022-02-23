// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// // EXERCÍCIO 0A
// function soma(num1, num2) {
//   // implemente sua lógica aqui
//   return num1 + num2

// }

// // EXERCÍCIO 0B
// function imprimeMensagem() {
//   // implemente sua lógica aqui
//   const mensagem = prompt('Digite uma mensagem!')

//   console.log(mensagem)


// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// // EXERCÍCIO 01
// function calculaAreaRetangulo() {
// let alt = Number (prompt ("Diga uma altura !"))
// let lar = Number ( prompt ("Diga uma largura !"))
//  console.log(alt * lar);
//  }

// EXERCÍCIO 02


// function imprimeIdade() {
//   let ano = Number (prompt ("Em que ano estamos ?"))
// let idade = Number (prompt ("Em que ano você nasceu ?"))
// console.log(ano - idade);
// }


// EXERCÍCIO 03
// function calculaIMC(peso, altura) {
//   return peso / (altura * altura)
// }
// 
// 
// 

// function imprimeInformacoesUsuario() {
//  const nome = prompt ("Qual seu nome ?")
//   const idade = prompt ("Qual a sua idade ?")
//   const email = prompt ("Qual seu email ?")

//   console.log(`Meu nome é ${nome} , tenho  ${idade} anos, e o meu email é ${email}.`)
// }

//  console.log("Meu nome é " + nome + ", tenho " + idade + " anos" + ", e o meu email é " + email)




// "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."



//  EXERCÍCIO 05
// function imprimeTresCoresFavoritas() {
//   let cor1 = prompt("Diga sua cor preferida")
//   let cor2 = prompt("Diga sua segunda cor preferida")
//   let cor3 = prompt("Diga sua terceira cor preferida")

//  console.log([cor1, cor2, cor3])
//   
// }

//  EXERCÍCIO 06
function retornoStringEmMaiuscula(string) {
  return string.toUpperCase()
}

// EXERCÍCIO 07
// function calculaIngressosEspetaculo(custo, valorIngresso) {

// let resposta = (custo / valorIngresso)
// return resposta 
// }

// EXERCÍCIO 08
//  Escreva uma função que recebe duas strings e retorna um booleano 
//  (true ou false) indicando se elas possuem o mesmo tamanho.
// function checaStringsMesmoTamanho(string1, string2) {
// return string1.length === string2.length

//  }





// EXERCÍCIO 09
// Escreva uma função que recebe um array e retorna o primeiro elemento.
// function retornaPrimeiroElemento(array) {
//   return array[0]

  
// }
// function formataMinusculo(nome) {
  //   const novoNome = nome.toLowerCase()
  //   return novoNome
  // }
  // EXERCÍCIO 10
  // function retornaUltimoElemento(array) {
  //   return array [array.length - 1]

  //  }

//     EXERCÍCIO 11
//     function trocaPrimeiroEUltimo(array) {
// return array[array.length - 1]

//  }

//     EXERCÍCIO 12
//     function checaIgualdadeDesconsiderandoCase(string1, string2) {
// //      implemente sua lógica aqui
// return string1.toLowerCase() === string2.toLowerCase()
    // }

//    EXERCÍCIO 13
//     function checaRenovacaoRG() {
// //  implemente sua lógica aqui
// const anoAtual = Number (prompt("Qual o ano atual?"))
// const anoNascismento= Number (prompt("Qual o ano de seu nascimento ?"))
// const anoEmissao= Number (prompt("Qual o ano da emissao?"))

// const idade = anoAtual - anoNascismento
// const tempoCarteira = anoAtual - anoEmissao

// const cond1 = idade <=20 && tempoCarteira>=5
// const cond2 = idade > 20 && idade <=50 && tempoCarteira>=10
// const cond3 = idade > 50 && tempoCarteira >=15

// console.log(cond1 || cond2|| cond3)
//     }

//     EXERCÍCIO 14
    // function checaAnoBissexto(ano) {
//    implemente sua lógica aqui
// const cond1 = ano %400 ===0
// const cond2 = (ano % 4 ===0) && (ano % 100 !== 0)
// return cond1 || cond2

//  }

//     EXERCÍCIO 15
//  function checaValidadeInscricaoLabenu() {
// //     implemente sua lógica aqui
// const maiorDeIdade  = prompt("Voce tem mais de 18 anos ?" )
// const ensinoMedio  = prompt("Voce possui ensino médio ?" )
// const disponibilidade  = prompt("voce possui disponibilidade" )
// console.log(maiorDeIdade === "sim" && ensinoMedio === "sim" && disponibilidade === "sim");
//  }