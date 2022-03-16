
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// // a-)Comparador de desigualdade a!==b 
// // Exemplo:

// // function checarDesigualdade(a, b) {

// //     return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
// // }
// // console.log(checarDesigualdade(1, 3));

// // // b-)Compare a igualdade entre a===b

// // function checarIgualdade(a, b) {

// //     return `No Comparador de igualdade ${a} === ${b} é ${a === b}`
// // }
// // console.log(checarIgualdade(1, 2));

// // // c-)Faça uma função chamada "verificaSeEMaior"
// // function verificaSeEMaior(a, b) {

// //     return a > b
// // }

// // console.log(verificaSeEMaior(321, 2156));


// // Exercício 2------------------------------------------------------------------------------------
// //Escreva true or false para as comparações abaixo:

// // exemplo 1>2 = false
// // a-) 1==='1'= false
// // b-) 1=='1'= true
// // c-) 'a'==='b'= false
// // d-) 'b'>'a'= false
// // e-) 0!==null= true


// // CONDICIONAIS

// // Exercício 3------------------------------------------------------------------------------------

// const cadastro = () => {
//     let usuario = []
//     let nomeDoUsuario = prompt("Qual seu nome ?")
//     let anoDeNascimento = (prompt("Qual ano de seu nascimento ?"))
//     let senhaDoUsuario = prompt("Sua senha")
//     let nacionalidade = prompt("Qual sua nacionalidade?")
//     let idade = 2022 - anoDeNascimento

// let cadastroUsuario = {
//     nome: nomeDoUsuario,
//     idade: idade,
//     nacionalidade: nacionalidade,
//     senha : senhaDoUsuario,
// }

// if (idade >= 18 && senhaDoUsuario.length >= 6 && (nacionalidade === "brasileira" || nacionalidade === "brasileiro")){
//     usuario.push(nomeDoUsuario,idade,senhaDoUsuario,nacionalidade)
//     console.log("Pode se Cadastrar!");
// } else {
//     console.log("Infelizmente você não pode se cadastrar!");
// }
// console.log(usuario);
// }
// console.log(cadastro(nomeDoUsuario,idade,senhaDoUsuario,nacionalidade));

//Exercício 4-----------------------------------------------------------------------------------------------
//- Exercício 4- Condicional - **Login do usuário**

// const login = () => {
//     let senha = prompt ("Diga sua senha")  
//     let senhaDoUsuario = ("labenu")

//     if (senha == "labenu") {
//         console.log("Usuário Logado");

//     }else{
//         console.log("Senha Inválida");
//     }

// }

// console.log(login());

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

//         if (usuários.senha = "labenu") {
//         console.log("Usuário Logado");

//     }else{
//         console.log("Senha Inválida");
//     }

// // Exercício 5----------------------------------------------------------------------------------------------------
// // Escreva uma função que receba do usuário seu nome, e o nome da vacina que tomou.
// //  E retorne a mensagens a seguir dependendo da vacina tomada.  
// // Sabendo que as vacinas tem tempos diferentes  para a aplicação da segunda dose crie uma única variável 
// // ‘tempo” que mude seu valor dependendo da vacina informada pelo usuário, faça o mesmo com “data”.

// // - Coronavac = 28 dias
// // - Astrazenica = 90 dias
// // - Pfizer = 90 dias

// const primeiraDose = () => {
// let nome = prompt ("Qual seu nome ?")
// let vacina = prompt("Qual vacina você tomou ?")
// let tempo 
// let data 

// if (vacina === "coronavac") {
//     console.log(`Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo ="28 dias"} dias. Compareça no posto na data ${data = "11 de Abril"}.`);    
// }else if (vacina == "astrazenica"){
// console.log(`Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo= "90 dias"} dias. Compareça no posto na data ${data = "12 de junho"}.`); 

// }else 
// console.log(`Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo = "90 dias"} dias. Compareça no posto na data ${data = "12 de junho"}.`)
// }


// console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

// const segundaDose = (nomeDoUsuario) => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "incompleta" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     return {...usuarios, nomeDoUsuario, imunizacao: "complete"}


// }
// console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------
const usuarios = [
    { nome: "Artur", imunizacao: "incompleta" },
    { nome: "Barbara", imunizacao: "completa" },
    { nome: "Carlos", imunizacao: "incompleta" },
]
const avisoAosAtrasados = (lista) => {
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].imunizacao == "incompleto") {
            console.log(`Olá ${usuarios[i].nome} Sua imunização está ${usuarios[i].imunizacao}, por favor volte ao postinho para tomar a segunda dose.`);
        }
        return lista
    }
    console.log(avisoAosAtrasados())

   // DESAFIO------------------------------------------------------------------------------------------

//     const usuarios = [
//         {
//             nome: "Artur",
//             ano: 2000,
//             nacionalidae: "brasileiro",
//             senha: "123456",
//             vacina: "pfizer",
//             imunizacao: "incompleta"
//         },
//         {
//             nome: "Bárbara",
//             ano: 1984,
//             nacionalidae: "brasileira",
//             senha: "labenu",
//             vacina: "astrazenica",
//             imunizacao: "completa"
//         },
//         {
//             nome: "Carlos",
//             ano: 2000,
//             nacionalidae: "brasileiro",
//             senha: "123456",
//             vacina: "coronavac",
//             imunizacao: "incompleta"
//         }

//     ]
//     let nome = prompt("Qual seu nome?")
//     let senha = prompt("Digite sua senha")

//     const cadastroDesafio = (nomeUsuario, senhaUsuario) => {
//         for (let i = 0; i < usuarios.length; i++) {
//             if (usuarios[i].nome === nomeUsuario && usuarios[i].senha === senhaUsuario) {
//                 console.log(`usuario ${nomeUsuario} cadastrado`);
//             } else {
//                 console.log("Cadastro não encontrado");
//             }
//             return cadastroDesafio
//         }

//         console.log(cadastroDesafio(nome, senha));

// const loginDesafio = () => {  
//     let nomeDoUsuario = prompt("Qual seu nome ?")
//     let anoDeNascimento = (prompt("Qual ano de seu nascimento ?"))
//     let senhaDoUsuario = prompt("Sua senha")
//     let nacionalidade = prompt("Qual sua nacionalidade?")
//     let nomeVacina = prompt ("Qual a vacina você tomou?")
//     let idade = 2022 - anoDeNascimento
//     let obj = {}

//     if (idade >= 18 && senhaDoUsuario.length >= 6 && (nacionalidade === "brasileira" || nacionalidade === "brasileiro")){
    
//     novoobjeto = {
//         nome : nomeDoUsuario,
//         nascimento : anoDeNascimento,
//         senha : senhaDoUsuario,
//         pais : nacionalidade, 
//         vacina : nomeVacina  
//     }
// } else {
//     console.log("Infelizmente você não pode se cadastrar!");
// }
//     usuários.push(novoobjeto)
//     console.log(obj);
//       return usuários
// }

// console.log(loginDesafio());

// const primeiraDoseDesafio = () => {
//     //  Sua lógica aqui
// }
// console.log(primeiraDoseDesafio())
// const segundaDoseDesafio = (nomeDoUsuario) => {
//     //  Sua lógica aqui
// }
// console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

// const avisoAosAtrasadosDesafio = () => {
//     //  Sua lógica aqui

}    
//  console.log(avisoAosAtrasadosDesafio())