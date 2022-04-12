// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })


// a) O que vai ser impresso no console?

// RESPOSTA : Aparecerá no console, todas as informaçoes dentro da array, como o que tem dentro da array
// a ordem dos itens dentro da Array, e aparecerá tambem as arrays dentro das arrays.


// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)


//   a) O que vai ser impresso no console?

// RESPOSTA: Aparecerá apenaso item, ele aparecerá apenas o que tiver dentro da array.




const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)


// a) O que vai ser impresso no console?

// Ele puxará pro console toda a Array, menos quando tiver a palavra Chijo.



//1 - Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando 
// as funções de array map e filter:


// a) Crie um novo array que contenha apenas o nome dos doguinhos
//  Resultado esperado    

// b) Crie um novo array apenas com os [cachorros salsicha]
//   Resultado esperado


// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: 
// "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"
//   Resultado esperado


const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const novoArrayB = pets.map((item) => {
         return item.nome
      })
      console.log(novoArrayB)


    let animais = pets.filter((item)=> {
       return item.raca === "Salsicha"
    })
  console.log(animais);

let novaArrayC = pets.filter((item) => {
return item.raca === "Poodle"
}) .map(item => {
    console.log("Você ganhou um cupom de desconto de 10% para tosar o/a ",[item.nome], "!")
})


// Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

// a) Crie um novo array que contenha apenas o nome de cada item

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
// Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 },
]

let novaArray = produtos.map((item) => {
   return item.nome
})
console.log(novaArray);

  const preco = produtos.map((produto) => {
    return {
        nomeProduto : produto.nome,
        PrecoProduto : (produto.preco * 0.95). toFixed(3)
    }
  })    
console.log(preco);






















    let array2 = produtos.filter((item)=> {
       return item.categoria === "Bebidas"
    })
  console.log(array2);



  let array3 = produtos.filter((item)=> {
   if (item.nome.includes("Ypê")){
return item
   }
 })

 const mostraNaTela = produtos.map((item) => {
    return `Compre ${item.nome} por ${item.preco}`
 })
console.log(mostraNaTela);