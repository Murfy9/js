// Declaração de Função

function minhaFuncao(param) {
  //bloco de códigos
}

// minhaFuncao("param");

// Expressão de Função

const soma = function (num1, num2) {
  return num1 + num2;
};

console.log(soma(1, 1));

// Diferença principal : HOISTING
// Funções e Var são "listadas" no topo do arquivo

console.log(apresentar());

function apresentar() {
  return "Óla!";
}

// console.log(soma(1, 1));

// const soma = function (num1, num2) {
//   return num1 + num2;
// };
