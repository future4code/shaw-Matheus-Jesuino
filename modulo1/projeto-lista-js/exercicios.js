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
// let lar =Number ( prompt ("Diga uma largura !"))
// let resultado = alt * lar 

// console.log(resultado);
// }

// EXERCÍCIO 02


// function imprimeIdade() {
//   let ano = Number (prompt ("Em que ano estamos ?"))
// let idade = Number (prompt ("Em que ano você nasceu ?"))
// let resultado = (ano - idade)

// console.log(resultado);
// }


// EXERCÍCIO 03
// function calculaIMC(peso, altura) {
//   return peso / (altura * altura)
// }










// // implemente sua lógica aqui
// // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."



// // EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 = prompt("Diga sua cor preferida")
  let cor2 = prompt("Diga sua segunda cor preferida")
  let cor3 = prompt("Diga sua terceira cor preferida")

  let cores = [cor1, cor2, cor3]
  console.log(cores)
}

// // EXERCÍCIO 06

// // EXERCÍCIO 07
// // function calculaIngressosEspetaculo(custo, valorIngresso) {

// // let resposta = (custo / valorIngresso)
// // return resposta 
// // }

// // // EXERCÍCIO 08
// // // Escreva uma função que recebe duas strings e retorna um booleano 
// // // (true ou false) indicando se elas possuem o mesmo tamanho.
// // function checaStringsMesmoTamanho(string1, string2) {
// //  let strin1 = 'bom dia'
// //  let strin2 = 'boa noite'
// //  return  (strin1 === strin2)
// // }
// // console.log()




// EXERCÍCIO 09
// Escreva uma função que recebe um array e retorna o primeiro elemento.
function retornaPrimeiroElemento(array) {
  let novoNome = [1, 2, 3]
  let retorno = novoNome.splice[1, 2]
  return retorno
}
// function formataMinusculo(nome) {
//   //   const novoNome = nome.toLowerCase()
//   //   return novoNome
//   // }
//   // EXERCÍCIO 10
//   function retornaUltimoElemento(array) {
//     // implemente sua lógica aqui

//     // }

//     // EXERCÍCIO 11
//     function trocaPrimeiroEUltimo(array) {
//       // implemente sua lógica aqui

//     }

//     // EXERCÍCIO 12
//     function checaIgualdadeDesconsiderandoCase(string1, string2) {
//       // implemente sua lógica aqui

//     }

//     // EXERCÍCIO 13
//     function checaRenovacaoRG() {
//       // implemente sua lógica aqui

//     }

//     // EXERCÍCIO 14
//     function checaAnoBissexto(ano) {
//       // implemente sua lógica aqui

//     }

//     // EXERCÍCIO 15
//     // function checaValidadeInscricaoLabenu() {
//       // implemente sua lógica aqui 
// }



const filme = {
nome : "Eu",
lançamento: "2020",
atores: ['Keanu rivers , Ryan Gosling, Matt Damon'],
assistido: true

}
console.log(filme)
filme.personagens = ['Karius, Mo Salah , Bob Firm']
console.log(`${filme.atores [0]} - ${filme.personagens[0]}`)
