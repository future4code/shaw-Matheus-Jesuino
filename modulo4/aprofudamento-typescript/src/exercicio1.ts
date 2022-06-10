// O Typescript é uma linguagem um pouco mais criteriosa 
// que o Javascript, então vamos conhecer
//  um pouco desses critérios.

// a) Crie uma variável **minhaString** do tipo `string` 
// e atribua um valor a ela. Tente atribuir um número 
// a esta variável. O que acontece?

// Ele diz que a um erro, que o tipo number, não pode ser atribuido ao tipo string

// const minhaString:string = 5




// b) Crie uma variável **meuNumero** do tipo `number` e 
// atribua um valor numérico. Como fazer para que essa 
// variável também aceite strings? Ou seja,
//  como criamos no typescript uma variável que aceite 
//  mais de um tipo de valor?

// Podemos usar a tipagem any, ou o simbolo | ,que significa ou.

// const meuNumero:number = 5

// c) Agora crie um novo objeto. Este objeto é uma pessoa, 
// e deve possuir três propriedades:

const pessoa = {
    nome: "Matheus",
    idade: 26,
    corFavorita: "Azul"
}

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

// Crie mais três objetos, que também precisam ter apenas 
// os campos definidos acima. Crie um **tipo** `Pessoa` 
// para garantir que todos os objetos tenham os mesmos campos.
enum Cores {
    VERMELHO = "Vermelho",
     LARANJA= "Laranja",
     AMARELO = "Amarelo",
     VERDE = "Verde",
     AZUL = "Azul",
     AZULESCURO = "Azul-escuro",
     VIOLETA = "Violenta"
     }


type Pessoa = {
    nome:string
    idade:number
    corFavorita:string
}

const pessoa1 : Pessoa = {
    nome: "Matheus",
    idade: 26,
    corFavorita: Cores.AZUL
}

const pessoa2 : Pessoa = {
    nome: "Mina",
    idade: 27,
    corFavorita: Cores.VERDE
}

const pessoa3 : Pessoa = {
    nome: "Paulinha",
    idade: 28,
    corFavorita: Cores.LARANJA
}

// d) Modifique a propriedade `corFavorita` para que apenas 
// seja possível escolher entre as cores do arco-íris.
//  Utilize um `enum` para isso.

console.table(pessoa1)
console.table(pessoa2)
console.table(pessoa3)



    