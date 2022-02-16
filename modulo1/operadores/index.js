// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) 

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)

// console.log("d. ", typeof resultado)

//  a.  false
//  b.  false
//  c.  true
//  d.  boolean

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)


// 1. Faça um programa que:

//     a) Pergunte a idade do usuário

//     b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

//     c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

//     d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

// let idade = prompt ("Qual sua idade ?")
// let idadeAmigo = prompt ("Qaul a idade do seu Melhor Amigo ?")

// console.log ("Sua Idade é Maior que a do seu Amigo? ", idade > idadeAmigo)
// console.log (idade - idadeAmigo)

// Sua Idade é Maior que a do seu Amigo?  true
//  4

// 2. Faça um programa que:

//     a) Peça ao usuário que insira um número **par**

//     b) Imprima na console **o resto da divisão** desse número por 2.

//     c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

//     d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código


// let numerop = prompt("Insira um numero Par!")
// console.log (numerop / 2)

// A Principio deu certo, esta dividindo corretamente. 
// Se o usuario insere um numero impar, continua dando Certo.

// 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 

//     a) A idade do usuário em meses

//     b) A idade do usuário em dias

//     c) A idade do usuário em horas

// let idade = prompt ("Qual sua idade ?")
// console.log (idade * 12)
// console.log (idade * 365)
// console.log (idade * 8760)

//  300
//  9125
//  219000 
// - Correto 

// Faça um programa que pergunte ao usuário dois números. Em seguida, faça as 
// operações e imprima no console as seguintes mensagens seguidas pelo true ou false:

// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

// obs: O true ou false vai depender dos números inseridos e do resultado das operações.

// let numerop =prompt ("Diga um numero !")
// let numeros =prompt ("diga outro numero !")
// console.log (numerop < numeros)
// console.log (numerop === numeros)
// console.log (numerop !== numeros)
// console.log ( numeros !== numerop)

// true
// false
// true
// true
// Correto !!!

const instrutores = ["Amanda", "Lais"]
instrutores.push("chijo")
console .log(instrutores)