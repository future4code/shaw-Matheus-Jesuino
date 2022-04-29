/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * Opa, Põe o segundo if dentro do primeiro if e o primeiro else lá embaixo no finalzinho
 */
console.log("Bem Vindo(a) ao jogo Blackjack!")

let jogo = confirm("Quer começar uma nova rodada ?")

if (jogo) {
   let voceCompra1 = comprarCarta()
let voceCompra2 = comprarCarta()
let somaVoce = voceCompra1 + voceCompra2


let computadorCompra1 = comprarCarta()
let computadorCompra2 = comprarCarta()
let somaComputador = computadorCompra1 + computadorCompra2

let pontuacaoUsuario = voceCompra1.valor + voceCompra2.valor
let pontuacaoComputador = computadorCompra1.valor + computadorCompra2.valor


console.log(`Você - cartas: ${voceCompra1.texto} ${voceCompra2.texto} - Pontuação - ${pontuacaoUsuario}`) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
console.log(`Computador - cartas: ${computadorCompra1.texto} ${computadorCompra2.texto} - Pontuação - ${pontuacaoComputador}`)


if (pontuacaoUsuario > pontuacaoComputador) {
   console.log("Você venceu!")
} else if (pontuacaoComputador > pontuacaoUsuario) {
   console.log("Computador venceu")
}else if (pontuacaoUsuario === pontuacaoComputador){
console.log("Empate !");
}
} else {
   console.log("O jogo Acabou!")
} 