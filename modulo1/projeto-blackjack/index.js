// let nome = prompt ("Qual seu nome ?")
// let idade =Number (prompt ("Qual sua idade?"))
// typeof idade
// typeof idade
// console.log(typeof nome, typeof idade);

// 1. Construa um programa, seguindo os seguintes passos:

//     a) Declare uma variável para armazenar um nome, sem atribuir um valor.

//     b) Declare uma variável para armazenar uma idade, sem atribuir um valor.

//     c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.

//     d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

//     e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

//     f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

//     g) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". 
//     Onde `nome` e `idade` são os valores que o usuário inseriu

// let nome = prompt ("Qual seu nome ?")
// let idade =prompt ("Qual sua idade?")

// console.log("Olá meu nome é", nome, "tenho", idade, "anos");



// 2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. 
// Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:

//     a) Crie três novas variáveis, contendo as respostas

//     b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:


// let pergunta1 = (prompt("Você esta de camisa preta ?"))
// let pergunta2 = (prompt("Você mora em POA ?"))
// let pergunta3 = (prompt("Você é gremista ?"))

// pergunta1 = false
// pergunta2 = true
// pergunta3 = true

// console.log(pergunta1);
// console.log(pergunta2);
// console.log(pergunta3);



// let a = 10
// let b = 25
// let c = 10

// Agora, queremos trocar os valores delas, de forma que `a` 
// passe a ter o valor de `b` e `b` passe a ter o valor de `a`. 

// Ou seja, no caso desse exemplo acima, `a` passaria a ser 25 e `b` passaria a ser 10.


// a = b
// b = c 


// console.log("o valor de a é", a);
// console.log("o valor de b é", b);


// Faça um programa que receba dois números do usuário e faça as seguintes operações,
//  imprimindo os resultados no console da seguinte forma:

// 1. O primeiro número somado ao segundo número resulta em: x.
// 2. O primeiro número multiplicado pelo segundo número resulta em: y.


// let numero1 =Number (prompt ("Diga um numero "))
// let numero2 = Number( prompt ("Diga outro numero"))
// let resultados = (numero1 + numero2)
// console.log(resultados);
// console.log(numero1 * numero2);

// Faça as seguintes operações usando o computador:
// 1. Somar 3 com 4
// 2. Multiplicar 3 com 5 e dividir o resultado por 2
// 3. Subtrair 5 de 4 e multiplicar o resultado por -1
// 4. Determinar o resto da divisão de 234 por 5


// numero1 = 234
// numero2 = 5
// let resultado = (numero1 % numero2 )
// console.log(resultado );

// Crie duas variáveis que guardem dois números. Imprima na
// tela as seguintes mensagens:
// 1. O primeiro número é igual ao segundo? True/False
// 2. O primeiro número é diferente do segundo? True/False
// 3. O primeiro número é maior que o segundo? True/False
// 4. O primeiro número é menor que o segundo? True/False

// numero1 = 6
// numero2 = 5

// resultado = (numero1 < numero2)

// console.log(resultado);


// Antes de começar, crie 3 variáveis: a, b e c. Atribua os
// valores true, false e true, respectivamente
// 1. Realize a operação: a && b
// 2. Realize a operação: b && c
// 3. Realize a operação: a && c
// 4. Realize a operação: a && b && c


// const a = true
// const b =  false
// const c = true

// let resultado = a && b && c

// console.log(resultado);


// Antes de começar, crie 3 variáveis: a, b e c. Atribua os
// valores true, false e true, respectivamente
// a= true
// b = false
// c = true
// 1. Realize a operação: a || b
// 2. Realize a operação: b || c
// 3. Realize a operação: a || c
// 4. Realize a operação: a || b || c

// const a = true
// const b =  false
// const c = true 

// resultado = a || c

// console.log(resultado);

// Faça um programa que receba o
// nome, ano de nascimento de uma
// pessoa e o ano atual e mostre:
// ● O nome da pessoa com um olá
// ● A idade dessa pessoa
// ● Um true ou false que diz se ela é
// maior de idade
// ● Quantos anos ela terá em 2050

// let nome = prompt ("Qual seu nome ?")
// let anoNascimento =Number (prompt ("Que ano você nasceu ?"))
// let anoAtual = Number (prompt("Que ano estamos ?"))
// let idadeAtual = anoAtual - anoNascimento
// let idadeFutura = 2050 - anoNascimento

// console.log("Olá meu nome é", nome, "tenho", idadeAtual, "anos");
// console.log("Você é maior de 18 anos ?", 18 <= idadeAtual );
// console.log("Em 2050 você terá quantos anos?", idadeFutura);

// 1. Faça um programa que:

//     a) Pergunte a idade do usuário

//     b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

//     c) **Imprima no console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?"
//     , seguido pela resposta (`true` ou `false`)

//     d) **Imprima no console** a diferença de idade (não tem problema se sair um número negativo)


// let idade = Number (prompt ("Qual sua idade?"))
// let idadeAmigo = Number ( prompt ("Qual a idade do seu amigo?"))

// console.log("Sua idade é maior que a do seu amigo?", idade >= idadeAmigo);
// console.log("Qual a diferença de idade de vocês?",idade - idadeAmigo);



// 2. Faça um programa que:

//     a) Peça ao usuário que insira um número **par**

//     b) Imprima na console **o resto da divisão** desse número por 2.

//     c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

//     d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código


// let par = Number (prompt("Insira um numero par"))

// console.log(par % 2);


// 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 

//     a) A idade do usuário em meses

//     b) A idade do usuário em dias

//     c) A idade do usuário em horas

// let anos = Number (prompt("Qauntos anos voce tem?"))

// console.log(anos * 12);
// console.log(anos * 365);
// console.log(anos * 8760);

// Faça um programa que pergunte ao usuário dois números. 
// Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:


// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

// obs: O true ou false vai depender dos números inseridos e do resultado das operações.


// let numero1 = Number (prompt("Diga um numero ?"))
// let numero2= Number (prompt("Diga outro numero numero ?"))

// let resultado = numero1 > numero2
// let resultado2 = numero1 === numero2
// let resultado3 = numero1 % numero2 ===0
// let resultado4 = numero2 % numero1 ===0


// console.log(resultado);
// console.log(resultado2)
// console.log(resultado3);
// console.log(resultado4);


// Crie um programa que peça ao usuário para inserir o seu
// nome e sua cor favorita e imprima a mensagem:
// "A cor favorita de FULANO é COR"
// Faça o exercício duas vezes, utilizando template strings e
// concatenação


// let nome = prompt ("Qual seu nome ?")
// let cor = prompt ("Qual sua cor favorita ?")

// // console.log("A cor favorita do " + nome + " é " + cor);

// console.log(`A cor favorita do ${nome} é a ${cor}`);

// Peça para o usuário escrever uma frase e imprima no console
// a frase alterada, com:
// ● Todas as letras maiúsculas;
// ● Na língua do i (substituindo a vogal "o" por "i");
// ● O tamanho da frase.

// Crie um array com pelo menos 5 raças de cachorro
// ● Peça para o usuário inserir um número de 1 a 5
// ● Imprima no console a raça correspondente à posição
// escolhida pelo usuário

// let array = ["lasanha", "leite", "arroz", "presunto","nescau"]
// let usuario = Number (prompt("Escolha um numero de 0 a 4"))
// console.log(usuario);
// const resultado = array [usuario]

// console.log(resultado);

// Para este exercício, comece criando um array com os
// valores: 1, 2, 3, 4, 5 e 6.
// 1. Determine o tamanho do array
// 2. Adicione o número 7
// 3. Remova os números 4 e 5
// 4. Determine o novo tamanho do array


// let numeros = ["1", "2", "3", "4","5","6"]
// numeros.splice(3 , 2)

// console.log(numeros.length, numeros)

// Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, 
// ignorando os espaços


// let frase = prompt("Diga uma frase")
// let array = frase.split(" ")

// console.log(array)

// Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], 
// faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array

// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, 
// Imprima no console a seguinte mensagem:

// O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!


// let nome = prompt ("Qual seu nome ?")
// let email = prompt ("Qual seu email ?")

// console.log(`${email} foi cadastrado com sucesso. Seja bem vinda(o), ${nome}`);

// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, 
// armazenado em uma variável. Em seguida, siga os passos:

//     a) Imprima no console o array completo

//     b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", 
//     seguida por cada uma das comidas, **uma embaixo da outra**.

//     c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. T
//     roque a segunda comida da sua lista pela inserida pelo usuário. 
//     Imprima no consolea nova lista


// let comida = ["lasanha", "feijão", "ambrosia", "pão", "stroggnoff"]
// let usuario = prompt ("Diga uma comida")

// comida[1] = usuario
// console.log(comida)


// 3. Faça um programa, seguindo os passos:

//     a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

//     b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

//     c) Imprima o array no console

//     d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

//     e) Remova da lista o item de índice que o usuário escolheu.

//     f) Imprima o array no console

// listaDeTarefas = []

// let tarefas = prompt ("Diga 1 coisas que você faz no seu dia")
// let tarefas2 = prompt ("Diga 2 coisas que você faz no seu dia")
// let tarefas3 = prompt ("Diga 3 coisas que você faz no seu dia")

// listaDeTarefas.push(tarefas)
// listaDeTarefas.push(tarefas2)
// listaDeTarefas.push(tarefas3)

// let escolha = prompt ("Escolha um numero de 0 a 2")
// listaDeTarefas.splice(Number(escolha),1)

// console.log(listaDeTarefas); 
// const nome = "matheus"

// function fazer(nome1) {
//     console.log(nome1);    
// }
// fazer (nome)

// ● Crie uma função que receba dois números e retorne a
// soma entre eles
// ● Crie uma variável soma no escopo da sua função e tente
// acessá-la fora desse escopo

// let a = 5
// let b = 5

// function somar(n1, n2) {
    
//     return n1 + n2
// }
// let soma = somar(a,b)
// console.log(soma);




// funcao nomeada
// function somar(n1, n2) {
//   const soma = n1 + n2

//   return soma
// }
// const mostraTela = somar(1, 2)
// console.log(mostraTela)


// ● Refaça o exercício 1 com a sintaxe de função anônima
// ● Refaça o exercício 2 com a sintaxe de Arrow Function

// function anonimo
// let dizerOla = function(nome1) {
//     console.log("Olá, " + nome1 + "!");
// }
// dizerOla ("Mathes")


// arrow finction
// let soma = (n1, n2) => {
//   const soma = n1 + n2

//   return soma
// }
// const mostraTela = soma(1, 2)
// console.log(mostraTela)



// 1. Escreva as funções explicadas abaixo:
    
//     a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações 
//     sobre você, como: 
    
//     ```
//     "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
//     ```
    
//     Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a 
//     função não possui entradas, apenas imprime essa mensagem.
    
//     b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: 
//     o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). 
//     Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma 
//só mensagem com o template:
// 2. Escreva as funções explicadas abaixo:
    
    // a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
    // faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
    
    // b) Faça uma função que recebe 2 números e retorne um booleano que informa se o 
    // primeiro número é **maior ou igual** ao segundo.
    
    // c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
    
    // d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem,
    //  juntamente com uma versão dela em letras maiúsculas


    // function soma(palavra) {
  
    //  return `${palavra.length} ${palavra.toUpperCase()}`
    // }
 
 
    // console.log(soma( "Essa é uma frase teste"))



//Crie um objeto que represente um filme. Ele deve ter
// dados da direção, o nome, o ano de lançamento, uma
// lista com o elenco e uma propriedade que diga se você já
// viu ou não.
// ● Acesse e imprima no console cada uma das propriedades:
// metade usando notação do ponto e a outra metade com
// notação de colchetes. 



// let filme = {
// nome :"batman", 
// atores : "robert pattison",
// lançamento : 2022,
// assistiu : true
// }

// nomeDoFilme = filme.nome

// console.log(nomeDoFilme);




// ● Crie um objeto que represente uma pessoa. Essa pessoa
// precisa ter nome, idade, gênero musical preferido.
// ● Imprima no console as propriedades desse objeto,
// seguindo o modelo abaixo:
// "O nome da pessoa é ___, ela tem ___ anos e gosta muito de
// ___."

// A. Adicione ao objeto do exercício 1 uma lista com os nomes
// dos personagens do filme.
// B. Acesse e imprima no console cada pessoa do elenco
// junto com seu respectivo personagem
// C. Altere a primeira pessoa do elenco por "Xuxa".
// D. Imprima no console as propriedades desse objeto,
// seguindo o modelo abaixo:
// "O nome do filme é ___. Seus personagens são ___, ___ e ___"

// let filme = {
// nome :"batman", 
// atores : "robert pattison, kravetz, brie larson",
// lançamento : 2022,
// assistiu : true
// }
// filme.personagens = "mulher-Gato, Batman, coringa"


// console.log(filme);


// Crie uma função que:
// ● Recebe 2 números (chamaremos de num1 e num2)
// ● Compara esses números entre si:
// ○ Se os números forem iguais, retorna uma mensagem
// de sucesso
// Depois, chame a função com números que foram inseridos
// pelo usuário através do prompt


// let usuario = Number (prompt ("Diga um numero"))
// let usuario2 = Number (prompt("Diga outro numero"))

// function numero (num1, num2){
//     if (num1 === num2 ){

//     console.log("Sucesso !!!")
// }else{
//     console.log("Fracassou!!!");
// }
// }
// numero (usuario,usuario2)



// Crie uma função que:
// ● Recebe 2 números (chamaremos de num1 e num2)
// ● Compara esses números entre si:
// ○ Retorna mensagens dizendo se o primeiro número é
// {maior/menor/igual} ao segundo número
// Depois, chame a função com números que foram inseridos
// pelo usuário através do prompt

// let pn1 = Number (prompt("Diga o primeiro numero ?"))
// let pn2 = Number (prompt("Diga o segundo numero ?"))

// function numeros(num1, num2) {
//     if (num1 > num2){
// console.log("Primeiro Numnero é maior !!!");

//     }else if(num1 < num2){
//         console.log("Segundo Numero é maior !!!");
//     }else{
//         console.log("Primeiro Numero e Segundo Numero são igual !!!");
//     }
    
// }
// numeros (pn1,pn2)


// Escreva um programa que receba
// o Pokémon inicial escolhido pela
// pessoa e retorna o seu tipo:
// ● Bulbasauro (Planta e Veneno)
// ● Charmander (Fogo)
// ● Squirtle (Água)


// let pokemon = prompt ("Escolha seu Pokemon inicial, Bulbasauro, Charmander, Squirtle ?")
// pokemon.toLowerCase
// switch (pokemon) {
//     case "Bulbasauro":
//         console.log("Planta e Veneno");
//         break;
// case "charmander":
// console.log("Fogo");
//         break;
//         case "Squirtle":
//         console.log("Àgua");
//         break
//         default:
//             console.log("Pokemon não encontrado !!!");
//             break
// }

// Uma pessoa pode estudar em uma faculdade se:
// ● Tiver concluído o ensino médio
// ● Tiver 18 anos ou mais
// ● Não estiver cursando outra faculdade
// Escreva uma função que receba estes parâmetros e devolva
// se a pessoa pode ou não estudar nesta faculdade. Receba os
// dados do usuário pelo prompt e execute a função


let ensino =Boolean (prompt ("Você concluiu o ensino Medio ?"))
let idade = Number (prompt("Quantos anos você tem?"))
let faculdade = Boolean ( prompt ("Você esta cursando outra faculdade ? "))


function podeEntrar(ens, id, facul) {
    if (ens === true, id > 17, facul ===false ) {
        console.log("Você pode entrar na Faculdade !!!");
        
    }else{
        console.log("Você não pode entrar na Faculdade");
    }
}
podeEntrar(ensino, idade, faculdade)