// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// a) O que vai ser impresso no console?
// No Console aparecerá: Matheus Nachetergaele, 20, globo , 14.

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// a) O que vai ser impresso no console?
// Ela ficará:
// nome : Jubo
// idae:3
// raca : srd


// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// Ela permite fazer uma cópia de um objeto (ou array) inteiro, para poermos manipular ela da maneira
// que quisermos (ex: mudar ou adicionar propriedades).


// a) Crie dois objetos diferentes com as seguintes propriedades: 
// nome, idade e profissão. 

// b) Escreva uma função que receba um objeto de cada vez e retorne
//  um array com as seguintes informações:

// 1. O valor de `nome`
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `profissão`


// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// a) O que vai ser impresso no console?
//  [false
//  undefined


// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

// 1. Resolva os passos a seguir: 
    
//     a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos
//      (um array que sempre terá exatamente **três apelidos**).
//       Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:**
// Exemplo de entrada
// const pessoa = {
//     nome: "Amanda", 
//     apelidos: ["Amandinha", "Mandinha", "Mandi"]

 
//  Exemplo de saída
//  "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

//  const pessoa = { 
//  nome : "Matheus",
// apelidos :["Mat", "Mata", "Teu"]
//   }
//  function quemSouEU(objeto) {
//  console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]} ou ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)

//  }
//  quemSouEU(pessoa)


// 2. Resolva os passos a seguir: 
    
//     a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
    
//     b) Escreva uma função que receba um objeto de cada vez e retorne um array com as seguintes informações:
    
//     1. O valor de `nome`
//     2. O numero de caracteres do valor `nome`
//     3. O valor de `idade`
//     4. O valor de `profissão`
//     5. O numero de caracteres do valor `profissão`

// const pessoa1 = {
// nome : "Matheus",
// idade : 25,
// prossissao : "desenvolvedor"
// }
// const pessoa2 = {
// nome :"Luciana",
// idade :25,
// profissao: "CX"
// }
// function retornoArrayInfos(pessoa) {
//    const arrayInfos = [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length]
//    return arrayInfos
//     }
// console.log(retornoArrayInfos (pessoa1));
// console.log(retornoArrayInfos( pessoa2));

//  a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

// b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades:
//  nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

// c) Crie uma função que **receba** um objeto fruta por **parâmetro** e 
// coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 

// -   Dica
    
//     <aside>
//      Aqui você deve usar o método **push()**
    
//     </aside>
    

// d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.**

// let carrinho = []

// let fruta1 = {
//     nome1 : banana,
//     disponibilidade1 : true  
// }

// let fruta2 = {
//     ...nome2 : morango,
//     disponibilidade2 : true  
// }

// let fruta3 = 
//     nome3 : maça,
//     disponibilidade3 : true  
