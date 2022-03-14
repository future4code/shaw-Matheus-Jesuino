
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {

    return `No Comparador de igualdade ${a} === ${b} é ${a === b}`
}
console.log(checarIgualdade(1, 3));

// c-)Faça uma função chamada "verificaSeEMaior"
function verificaSeEMaior(a, b) {

    return a > b
}

console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:

// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= false
// e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

const cadastro = () => {
    let usuario = []
    let nomeDoUsuario = prompt("Qual seu nome ?")
    let anoDeNascimento = (prompt("Qual ano de seu nascimento ?"))
    let senhaDoUsuario = prompt("Sua senha")
    let nacionalidade = prompt("Qual sua nacionalidade?")
    let idade = 2022 - anoDeNascimento

if (idade > 18 && senhaDoUsuario.length > 6 && nacionalidade === "brasileira") {
    usuario.push(nomeDoUsuario,idade,senhaDoUsuario,nacionalidade)
    console.log("Pode se Cadastrar!");
} else {
    console.log("Infelizmente você não pode se cadastrar!");
}
console.log(usuario);
}
console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------
// - Exercício 4- Condicional - **Login do usuário**



const login = () => {
    let senha = prompt ("Diga sua senha")  
    let senhaDoUsuario = ("labenu")

    if (senha == "labenu") {
        console.log("Usuário Logado");

    }else{
        console.log("Senha Inválida");
    }

}

console.log(login());


const usuários = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 1999,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }
    ]

        if (usuários.senha = "labenu") {
        console.log("Usuário Logado");

    }else{
        console.log("Senha Inválida");
    }




// Exercício 5----------------------------------------------------------------------------------------------------
// Escreva uma função que receba do usuário seu nome, e o nome da vacina que tomou.
//  E retorne a mensagens a seguir dependendo da vacina tomada.  
// Sabendo que as vacinas tem tempos diferentes  para a aplicação da segunda dose crie uma única variável 
// ‘tempo” que mude seu valor dependendo da vacina informada pelo usuário, faça o mesmo com “data”.

// - Coronavac = 28 dias
// - Astrazenica = 90 dias
// - Pfizer = 90 dias

const primeiraDose = () => {
let nome = prompt ("Qual seu nome ?")
let vacina = prompt("Qual vacina você tomou ?")
let tempo = Number ("28 dias", "90 dias", "90 dias")
let data = (14/03 + tempo)

if (vacina == "coronavac") {
    console.log(tempo[0]);    
}else (vacina == "astrazenica")
console.log(data[1]); 

console.log(`Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`)




console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui


}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    //  Sua lógica aqui
}
console.log(cadastroDesafio());

const loginDesafio = () => {
    //  Sua lógica aqui
}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
    //  Sua lógica aqui
}
console.log(primeiraDoseDesafio())
const segundaDoseDesafio = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasadosDesafio())