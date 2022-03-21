// Nesse challenge, vamos praticar looping com strings - que nada mais é que um array de caracteres.

// Crie uma função que receba uma string e:

// 1. Imprime no terminal todas as vogais, na ordem em que elas aparecem na string de entrada, uma em cada linha.
// 2. Depois de imprimir todas as vogais, imprime no terminal todas as consoantes, 
// na ordem em que elas aparecem na string de entrada.

let palavra = "alvo"

function string(vogais) {
for (let i = 0; i < vogais.length; i++) {
    if (vogais === "a") {
        console.log("a")        
    }else if (vogais === "o"){
        console.log("o");    
}
return vogais
}

}
string(palavra)
console.log(string);