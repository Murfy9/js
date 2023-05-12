// Parâmetros de Função

// let numero1 = 2;
// let numero2 = 2;

function soma(numero1, numero2) {
  return numero1 + numero2;
}

function multiplica(numero1 = 1, numero2 = 1) {
  return numero1 * numero2;
}

console.log(multiplica(soma(4, 5)));

// console.log(soma(numero1, numero2));

// Parâmetros x Argumentos

// Ordem dos parâmetros

function nomeIdade(nome, idade) {
  return `Meu nome é ${nome} e minha idade é ${idade}`;
}
console.log(nomeIdade(26, "Pedro"));
