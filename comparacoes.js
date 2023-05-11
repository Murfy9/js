// == (Comparação implícita) Só compara o valor

const numero = 7;
const texto = "7";

console.log(numero == texto); // True

// === Compara o valor e o tipo de dado

console.log(numero === texto); // False

// Typeof

console.log(typeof numero);
console.log(typeof texto);

// Conversão explícita (Boa prática colocar os === e fazer a conversão)

Number();
String();

// ||: Operador “ou”, retorna true caso uma condição seja válida;
// &&: Operador “e”, retorna true somente se todas as condições forem válidas;
// != e !==: Operadores “não igual” e “estritamente não igual”, utilizados para comparação, da mesma forma que == e === retornam true ou false.
