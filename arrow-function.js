// Arrow Function

const apresentarArrow = (nome) => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// Arrow Function com +1 linha

const somaNumerosPequenos = (num1, num2) => {
  if (num1 > 10 || num2 > 10) {
    return "somente números de 1 a 9";
  } else {
    return num1 + num2;
  }
};

// Hoisting: Arrow Function se comporta como Expressão de Função
