// Na aula de ontem, vimos que os arquivos escritos em Typescript, com sua extensão 
// `.ts` passam por um processo de conversão de typescript para Javascript para que
//  possam ser lidos e executados. Este processo é chamado de **transpilação**. 

// Com a biblioteca `typescript` instalada, temos acesso ao comando `tsc` no terminal.
// O `tsc` é o comando responsável por fazer a transpilação dos arquivos.

// Abaixo, há um exemplo de código escrito em Typescript. 

// a) Crie um arquivo chamado `exercicio-4.ts` , cole o código abaixo 
// e use comentários para responder as questões.

// b) Como você faria, já com a extensão instalada, para transpilar(converter) esse arquivo
//  typescript em um arquivo javascript?
// tsc exercicio4.ts 

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}


// b) E se este arquivo estivesse dentro de uma pasta chamada `src`. 
// O processo seria diferente? Se sim, descreva as diferenças.
// tsc src/exercicio4.ts 

// c) Existe alguma maneira de **transpilar** múltilplos arquivos de uma vez só?
//  Caso conheça, explique como fazer.
// tsc exercicio1.ts exercicio2.ts exercicio3.ts
