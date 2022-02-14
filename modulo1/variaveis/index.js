let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

/*console.log(10)
console.log(10, 5)*/


let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

/*console.log(10, 10, 10)*/


let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t / p} por hora`)


/*let horasTrabalhadasPorDia = prompt("Quantas horas você trabalha por dia?")
let t = valorRecebidoPorHora("Quanto você recebe por dia?")
alert(`Voce recebe ${valorRecebidoPorHora/horasTrabalhadasPorDia} por hora`)*/



let nome = ("")
let idade = ("")
console.log("Tipo de nome:", typeof nome)
console.log("Tipo de idade:", typeof idade)

/*Tipo de nome: string
  Tipo de idade: string*/

let nome = prompt("Qual seu nome?")
let idade = prompt("Qual sua idade?")
console.log("Tipo de nome:", typeof nome)
console.log("Tipo de idade:", typeof idade)

/*Tipo de nome: string
Tipo de idade: string*/

const nome = ("Olá Matheus")
const idade = ("Você tem 25")
console.log(nome, idade)

/*Olá Matheus Você tem 25*/

let corDaRoupa = true
console.log(corDaRoupa, "Você está usando uma roupa azul hoje?")


let idadeCorreta = false
console.log(idadeCorreta, "Você tem 22 anos?")


let cidade = true
console.log(cidade, "Você mora em Porto Alegre?")

/*true 'Você está usando uma roupa azul hoje?'
false 'Você tem 22 anos?'
true 'Você mora em Porto Alegre?'*/


let a = 10
let b = 25
let c = 25

b = a
a = c


// Aqui faremos uma lógica para trocar os valores

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

// Adicionando a letra c, conseguimos modificar o valor de a
/*O novo valor de a é 25
O novo valor de b é 10*/





