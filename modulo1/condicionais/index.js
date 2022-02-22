// Tente responder os exercícios dessa seção sem executar o código.
//  Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

// 1. Leia o código abaixo:


// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }


// a) Explique o que o código faz. Qual o teste que ele realiza? 
//    Ele quer saber se o numero que o usuario colocou é par ou impar 


// b) Para que tipos de números ele imprime no console "Passou no teste"? 
//   Para os tipos pares



// c) Para que tipos de números a mensagem é "Não passou no teste"?
// Para os tipos impares


// 2. O código abaixo foi feito por uma pessoa desenvolvedora, 
// contratada para automatizar algumas tarefas de um supermercado:


// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//    break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


// a) Para que serve o código acima?
//   Para dar um preço as frutas


// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//    A mensagem será Maçã - preço : 2.25


// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa
//  no console se retirássemos o `break` que está logo acima do `default` 
//  (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// Se tirarmos o break em cima do default a pêra pega o ultimo valor , por tanto ficará R$5,00

// const numero = Number(prompt("Digite o primeiro número."))

// if (numero > 0) {
//     console.log("Esse número passou no teste")
//     let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)


//     a) O que a primeira linha está fazendo?
// Esta pedindo paara o usuario digitar um numero

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// A mensagem seria que aparecerá será "Esse numero passou no teste"
// Se o numero fosse -10, nao apareceria nada , pois o if so esta pergunta se o numero é Maior.

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

// Haverá um erro sim , já que a variavel mensagem, não diz nada

// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir 
// (apenas maiores de idade).

//     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

//     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

//     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
//     Se sim, imprima no console `"Você pode dirigir"`, 
//     caso contrário, imprima `"Você não pode dirigir."`

const habilitação = Number(prompt("Qual a sua idade ? "))

if (habilitação > 17) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirrigir");
}

// Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar 
// M (matutino) ou V (Vespertino) ou N (Noturno). 
// Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

let turno = prompt("Diga em qual turno você estuda, apenas com M, V ,ou N")

if (turno === "M") {
    console.log("Bom Dia !!!");
} else if (turno === "V") {
    console.log("Boa Tarde!!!");
} else {
    console.log("Boa Noite!!!")
}

//4 - Repita o exercício anterior, mas utilizando a estrutura de switch case agora.


let turno2 = prompt("Diga em qual turno você estuda, apenas com M, V ,ou N")

switch (turno2) {
    case "M":
        console.log("Bom Dia !!!");
        break;
    case "V":
        console.log("Boa Tarde!!!");
        break;
    default:
        console.log("Boa Noite!!!");
        break;
}



// Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele / ela só assistirá a um filme 
// com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. 
// Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço
// do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme.
// Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

function cinema() {

    const generoFilme = prompt("Qual o genero do filme")
    const valorIngresso = Number(prompt("Qual o valor do engresso?"))

    if (generoFilme === "fantasia" && valorIngresso <= 15) {
        console.log("Bom Filme!!!");
    } else {
        console.log("Escolha outro filme :(");
    }
}
cinema()
